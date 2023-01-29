import { View, Text, SafeAreaView, Button, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import { Formik, Field } from 'formik';
import CustomInput from './CustomInput';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import ImgPicker from './ImgPicker';

import validationSchema from './validationSchema';
import { useRef } from 'react';

const SignUpForm = (props) => {

    const { GoTotitle, onPress, question } = props

    // const navigation = useNavigation();

    // const [isLoading, setIsLoading] = useState(false);

    // const [isShelter, setIsShelter] = useState(true);
    // const [isUser, setIsUser] = useState(false);
    // const [isSignUpForm, setIsSignUpForm] = useState(true);
    // const [userArray, setUserArray] = useState([]);
    // const [sheltersArray, setSheltersArray] = useState([]);
    // const [currentId, setCurrentId] = useState();

    // const [currentValues, setCurrentValues] = useState();

    // const ref = useRef(null);

    // if (isLoading) {
    //     return (
    //         <View className="flex-1 bg-white items-center justify-center">
    //             <Text>Loading names...</Text>
    //         </View>
    //     )
    // }

    // const disabledShelterForm = isShelter ? 'bg-green-900' : 'bg-gray-300';
    // const disabledUserForm = isUser ? 'bg-green-900' : 'bg-gray-300';

    // const changeUser = () => { // to be corrected!!
    //     setIsShelter(!isShelter);
    //     setIsUser(!isUser);
    // }

    // const toggleForm = () => {
    //     setIsSignUpForm(!isSignUpForm);
    // }

    // const addUserToDb = async () => { }

    return (
        // <SafeAreaView
        //     className='bg-white my-5 p-5'
        // >
        //     <View className="w-full">


        //         <Text className="mb-3 font-bold text-lg">SIGN {!isSignUpForm ? 'IN' : 'UP'} FORM for {isShelter ? 'animal shelters' : 'users'}</Text>
        //     </View>

        //     <View className="w-full flex-row items-center justify-start space-x-3 mb-3">


        //         <TouchableOpacity
        //             className={`p-2 ${disabledShelterForm} rounded-md`}
        //             onPress={() => changeUser()}
        //         >
        //             <Text className="text-white font-bold text-xs">Animal Shelter</Text>
        //         </TouchableOpacity>
        //         <TouchableOpacity
        //             className={`p-2 ${disabledUserForm} rounded-md`}
        //             onPress={() => changeUser()}
        //         >
        //             <Text className="text-white font-bold text-xs">Regular User</Text>
        //         </TouchableOpacity>

        //     </View>

        <Formik
            initialValues={{
                fullName: '',
                email: '',
                phoneNumber: '',
                password: '',
                confirmPassword: '',
                photoUrl: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => { console.log(values); resetForm({ values: '' }); }}
        // innerRef={ref}
        >
            {({ handleSubmit, isValid }) => (
                <>
                    <CustomInput
                        label='Full name'
                        placeholder='Jane Doe'
                    />
                    <CustomInput
                        label='Email address'
                        placeholder='example@mail.com'
                    />
                    <CustomInput
                        label='Phone'
                        placeholder='+48000000000'
                    />
                    <CustomInput
                        label='Password'
                        placeholder='********'
                    />
                    <CustomInput
                        label='Confirm Password'
                        placeholder='********'
                    />
                    <CustomInput
                        label='Profile picture Url'
                        placeholder='http://image.com'
                    />

                    <ImgPicker />

                    <View className="justify-between w-full items-center">


                        <View className="mt-1 mb-4">
                            <Text>{question}</Text>
                            <TouchableOpacity onPress={onPress} className='bg-green-300 p-1 rounded-sm'>
                                <Text>Go to {GoTotitle} form</Text>
                            </TouchableOpacity>

                        </View>

                        <View>
                            <Button

                                title="SIGN UP"
                                color="green"
                                type="submit"
                            />
                        </View>

                    </View>

                </>
            )}
        </Formik>


        // </SafeAreaView>

    )
}

export default SignUpForm;