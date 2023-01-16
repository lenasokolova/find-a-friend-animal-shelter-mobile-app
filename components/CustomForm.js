import { View, Text, SafeAreaView, StatusBar, TextInput, Button, TouchableOpacity } from 'react-native';
import React from 'react';
import { Formik, Field } from 'formik';
import CustomInput from './CustomInput';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
// import Realm from 'realm';

import validationSchema from './validationSchema';

const CustomForm = () => {
    const navigation = useNavigation();

    const [isShelter, setIsShelter] = useState(true);
    const [isUser, setIsUser] = useState(false);
    const [isSignUpForm, setIsSignUpForm] = useState(true);

    const disabledShelterForm = isShelter ? 'bg-green-900' : 'bg-gray-300';
    const disabledUserForm = isUser ? 'bg-green-900' : 'bg-gray-300';


    const changeUser = () => { // to be corrected!!
        setIsShelter(!isShelter);
        setIsUser(!isUser);
    }

    const toggleForm = () => {
        setIsSignUpForm(!isSignUpForm);
    }

    return (

        <SafeAreaView className="flex-1 items-center justify-center ">
            <View className="w-4/5 items-center bg-white p-10 rounded-xl shadow-sm">
                <View className="w-full">
                    <Text className="mb-3 font-bold text-lg">SIGN {!isSignUpForm ? 'IN' : 'UP'} FORM for {isShelter ? 'animal shelters' : 'users'}</Text>
                </View>

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
                    onSubmit={values => console.log(values)}
                >
                    {({ handleSubmit, isValid }) => (
                        <>
                            {isSignUpForm
                                &&
                                <Field
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
                                        onPress={handleSubmit}
                                        title={isSignUpForm ? "SIGN UP" : "SIGN IN"}
                                        disabled={!isValid}
                                        color="green"
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