import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Formik } from 'formik';
import CustomInput from './CustomInput';
import validationSchema from './validationSchema';
import { useRef, useState } from 'react';
import { Button } from 'react-native-web';

const SignInForm = (props) => {

    const { GoTotitle, onPress, question } = props
    const ref = useRef(null);
    const [isShelter, setIsShelter] = useState(true);
    const [isUser, setIsUser] = useState(false);
    return (
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
            innerRef={ref}
        >
            {({ handleSubmit, isValid }) => (
                <>

                    <CustomInput
                        label='Email address'
                        placeholder='example@mail.com'
                    />

                    <CustomInput
                        label='Password'
                        placeholder='********'
                    />


                    <View className="justify-between w-full items-center">


                        <View className="mt-1 mb-4">
                            <Text>{question}</Text>
                            <TouchableOpacity onPress={onPress} className='bg-green-300 p-1 rounded-sm'>
                                <Text>Go to {GoTotitle} form</Text>
                            </TouchableOpacity>

                        </View>

                    </View>

                </>
            )}
        </Formik>
    )
}

export default SignInForm