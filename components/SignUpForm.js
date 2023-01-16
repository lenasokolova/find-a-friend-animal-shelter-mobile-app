import { View, Text, SafeAreaView, StatusBar, TextInput, Button, TouchableOpacity } from 'react-native';
import React from 'react';
import { Formik, Field } from 'formik';
import CustomInput from '../components/CustomInput';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import validationSchema from './validationSchema';

const SignUpForm = () => {
    const navigation = useNavigation();

    const [isShelter, setIsShelter] = useState(true);
    const [isUser, setIsUser] = useState(false);

    const disabledShelterForm = isShelter ? 'bg-green-900' : 'bg-gray-300';
    const disabledUserForm = isUser ? 'bg-green-900' : 'bg-gray-300';


    const switchForm = () => { // to be corrected!!
        setIsShelter(!isShelter);
        setIsUser(!isUser);
    }

    return (
        <>
            <SafeAreaView className="flex-1 items-center justify-center">
                <View className="w-4/5 items-center bg-white p-10">
                    <View className="w-full">
                        <Text className="mb-3 font-bold text-lg">SING UP FORM for {isShelter ? 'animal shelters' : 'users'}</Text>
                    </View>

                    <View className="w-full flex-row items-center justify-start space-x-3">

                        <TouchableOpacity
                            className={`p-2 ${disabledShelterForm} rounded-md`}
                            onPress={() => switchForm()}
                        >

                            <Text className="text-white font-bold text-xs">Animal Shelter</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            className={`p-2 ${disabledUserForm} rounded-md`}
                            onPress={() => switchForm()}
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
                                <Field
                                    component={CustomInput}
                                    name="fullName"
                                    placeholder={isShelter ? "  Shelter Name" : "  Full Name"}
                                />
                                <Field
                                    component={CustomInput}
                                    name="email"
                                    placeholder="  Email Address"
                                    keyboardType="email-address"
                                />
                                <Field
                                    component={CustomInput}
                                    name="phoneNumber"
                                    placeholder="  Phone Number"
                                    keyboardType="numeric"
                                />
                                <Field
                                    component={CustomInput}
                                    name="password"
                                    placeholder="  Password"
                                    secureTextEntry
                                />
                                <Field
                                    component={CustomInput}
                                    name="confirmPassword"
                                    placeholder="  Confirm Password"
                                    secureTextEntry
                                />



                                <View className="flex-row justify-between w-full items-center">
                                    <Button
                                        onPress={() => {
                                            navigation.navigate('SignIn')
                                        }}
                                        title="SIGN IN"
                                        // disabled={!isValid}
                                        color="black"
                                    />

                                    <Button
                                        onPress={handleSubmit}
                                        title="SIGN UP"
                                        disabled={!isValid}
                                        color="green"
                                    />


                                </View>


                            </>
                        )}
                    </Formik>
                </View>
            </SafeAreaView>
        </>
    )
}

export default SignUpForm