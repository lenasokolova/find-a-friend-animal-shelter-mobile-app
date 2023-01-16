import React from 'react';
import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import CustomForm from './../components/CustomForm';

const FormsScreen = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);

    return (
        <>
            <CustomForm />
        </>

    )
}

export default FormsScreen;