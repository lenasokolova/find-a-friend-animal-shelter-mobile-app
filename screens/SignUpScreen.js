import React from 'react';
import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import SignUpForm from '../components/SignUpForm';

const SignUpScreen = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);

    return (
        <>
            <SignUpForm />
        </>

    )
}

export default SignUpScreen;