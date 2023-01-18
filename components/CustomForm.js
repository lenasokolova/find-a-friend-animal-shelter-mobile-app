import { View, Text, SafeAreaView, Button, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import { Formik, Field } from 'formik';
import CustomInput from './CustomInput';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as SQLite from 'expo-sqlite';

import validationSchema from './validationSchema';
import { useRef } from 'react';

const CustomForm = () => {

    const db = SQLite.openDatabase('animalShelterUsers.db');
    const navigation = useNavigation();

    const [isLoading, setIsLoading] = useState(false);

    const [isShelter, setIsShelter] = useState(true);
    const [isUser, setIsUser] = useState(false);
    const [isSignUpForm, setIsSignUpForm] = useState(true);
    const [userArray, setUserArray] = useState([]);
    const [sheltersArray, seSheltersArray] = useState([]);

    const ref = useRef(null);


    // const { fullName, email, password, phoneNumber } = newUser;

    useEffect(() => {
        db.transaction(tx => {
            tx.executeSql('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT, phone INTEGER, password TEXT)')
        });

        db.transaction(tx => {
            tx.executeSql('CREATE TABLE IF NOT EXISTS shelters (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT, phone INTEGER, password TEXT)')
        });

        db.transaction(tx => {
            tx.executeSql('SELECT * FROM users', null,
                (txObj, resultSet) => setUserArray(resultSet.rows._array),
                (txObj, error) => console.log(error)
            );
        });

        db.transaction(tx => {
            tx.executeSql('SELECT * FROM shelters', null,
                (txObj, resultSet) => seSheltersArray(resultSet.rows._array),
                (txObj, error) => console.log(error)
            );
        });

        db.transaction(tx => {
            tx.executeSql('DELETE FROM users');
        });

        setIsLoading(false);
    }, []);

    if (isLoading) {
        return (
            <View className="flex-1 bg-white items-center justify-center">
                <Text>Loading names...</Text>
            </View>
        )
    }

    const disabledShelterForm = isShelter ? 'bg-green-900' : 'bg-gray-300';
    const disabledUserForm = isUser ? 'bg-green-900' : 'bg-gray-300';

    const changeUser = () => { // to be corrected!!
        setIsShelter(!isShelter);
        setIsUser(!isUser);
    }

    const toggleForm = () => {
        setIsSignUpForm(!isSignUpForm);
    }

    const addUserToDb = () => {

        // const { fullName, email, password, phoneNumber } = newUser;
        const values = ref.current.values;

        db.transaction(tx => {
            tx.executeSql('INSERT INTO users (name, email, phone, password) values(?, ?, ?, ?)', [values.fullName, values.email, values.phoneNumber, values.password],
                (txObj, resultSet) => {
                    let existingUsers = [...userArray];
                    existingUsers.push({ id: resultSet.insertId, name: values.fullName, email: values.email, phone: values.phoneNumber, password: values.password });
                    setUserArray(existingUsers);
                    console.log(userArray);
                },
                (txObj, error) => console.log(error)
            );
        });
    }

    const showUsers = () => {
        return userArray.map((user, index) => {
            return (
                <View key={index}>
                    <Text>Here's a full name: {user.name}</Text>
                    <Text>Here's a email: {user.email}</Text>
                    <Text>Here's a number: {user.phone}</Text>
                    <Text>Here's a passwrd: {user.password}</Text>

                </View>
            )
        })
    }

    return (
        <SafeAreaView className="flex-1 items-center justify-center ">
            <View className="w-4/5 items-center bg-white p-10 rounded-xl shadow-sm">
                <View className="w-full">
                    <Text className="mb-3 font-bold text-lg">SIGN {!isSignUpForm ? 'IN' : 'UP'} FORM for {isShelter ? 'animal shelters' : 'users'}</Text>
                </View>
                {showUsers()}

                <View className="w-full flex-row items-center justify-start space-x-3 mb-3">

                    <TouchableOpacity
                        className={`p-2 ${disabledShelterForm} rounded-md`}
                        onPress={() => changeUser()}
                    >
                        <Text className="text-white font-bold text-xs">Animal Shelter</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        className={`p-2 ${disabledUserForm} rounded-md`}
                        onPress={() => changeUser()}
                    >
                        <Text className="text-white font-bold text-xs">Regular User</Text>
                    </TouchableOpacity>

                </View>

                <Formik
                    initialValues={{
                        fullName: '',
                        email: '',
                        phoneNumber: '',
                        password: '',
                        confirmPassword: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { resetForm }) => { console.log(values); resetForm({ values: '' }); }}
                    innerRef={ref}
                >
                    {({ handleSubmit, isValid }) => (
                        <>
                            {isSignUpForm && <Field
                                component={CustomInput}
                                name="fullName"
                                placeholder={isShelter ? "  Shelter Name" : "  Full Name"}
                            />
                            }

                            <Field
                                component={CustomInput}
                                name="email"
                                placeholder="  Email Address"
                                keyboardType="email-address"
                            />

                            {isSignUpForm
                                &&
                                <Field
                                    component={CustomInput}
                                    name="phoneNumber"
                                    placeholder="  Phone Number"
                                    keyboardType="numeric"
                                />
                            }

                            <Field
                                component={CustomInput}
                                name="password"
                                placeholder="  Password"
                                secureTextEntry
                            />

                            {isSignUpForm
                                &&
                                <Field
                                    component={CustomInput}
                                    name="confirmPassword"
                                    placeholder="  Confirm Password"
                                    secureTextEntry
                                />
                            }

                            <View className="justify-between w-full items-center">
                                <View className="mt-1 mb-4">
                                    <Text>Have an account? Go to <Text
                                        className="font-bold text-md bg-green-200"
                                        onPress={() => toggleForm()}
                                    >{!isSignUpForm ? ' SIGN UP ' : ' SIGN IN '}</Text> form</Text>
                                </View>

                                <View>
                                    <Button
                                        onPress={() => { handleSubmit(); addUserToDb(); navigation.navigate('Home', { ref }); }}
                                        title={isSignUpForm ? "SIGN UP" : "SIGN IN"}
                                        disabled={!isValid}
                                        color="green"
                                        type="submit"
                                    />
                                </View>

                            </View>

                        </>
                    )}
                </Formik>
            </View>
        </SafeAreaView>

    )
}

export default CustomForm


// const [names, setNames] = useState([]);
    // const [currentName, setCurrentName] = useState(undefined);

    // useEffect(() => {
    //     db.transaction(tx => {
    //         tx.executeSql('CREATE TABLE IF NOT EXISTS names (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)')
    //     });

    //     db.transaction(tx => {
    //         tx.executeSql('SELECT * FROM names', null,
    //             (txObj, resultSet) => setNames(resultSet.rows._array),
    //             (txObj, error) => console.log(error)
    //         );
    //     });

    //     setIsLoading(false);
    // }, []);


// <View className="flex-1 bg-white items-center justify-center">
        //     <TextInput value={currentName} placeholder='name' onChangeText={setCurrentName} />
        //     <Button title="Add Name" onPress={addName} />
        //     {showNames()}
        // </View>



// const addName = () => {
    //     db.transaction(tx => {
    //         tx.executeSql('INSERT INTO names (name) values (?)', [currentName],
    //             (txObj, resultSet) => {
    //                 let existingNames = [...names];
    //                 existingNames.push({ id: resultSet.insertId, name: currentName });
    //                 setNames(existingNames);
    //                 setCurrentName(undefined);
    //             },
    //             (txObj, error) => console.log(error)
    //         );
    //     });
    // }

    // const deleteName = (id) => {
    //     db.transaction(tx => {
    //         tx.executeSql('DELETE FROM names WHERE id = ?', [id],
    //             (txObj, resultSet) => {
    //                 if (resultSet.rowsAffected > 0) {
    //                     let existingNames = [...names].filter(name => name.id !== id);
    //                     setNames(existingNames);
    //                 }
    //             },
    //             (txObj, error) => console.log(error)
    //         );
    //     });
    // };

    // const updateName = (id) => {
    //     db.transaction(tx => {
    //         tx.executeSql('UPDATE names SET name = ? WHERE id = ?', [currentName, id],
    //             (txObj, resultSet) => {
    //                 if (resultSet.rowsAffected > 0) {
    //                     let existingNames = [...names];
    //                     const indexToUpdate = existingNames.findIndex(name => name.id === id);
    //                     existingNames[indexToUpdate].name = currentName;
    //                     setNames(existingNames);
    //                     setCurrentName(undefined);
    //                 }
    //             },
    //             (txObj, error) => console.log(error)
    //         );
    //     });
    // };

    // const showNames = () => {
    //     return names.map((name, index) => {
    //         return (
    //             <View key={index} className="flex-row items-center self-stretch m-1">
    //                 <Text>{name.name}</Text>
    //                 <Button title='Delete' onPress={() => deleteName(name.id)} />
    //                 <Button title='Update' onPress={() => updateName(name.id)} />
    //             </View>
    //         );
    //     });
    // };