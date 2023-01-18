import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react'
import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import SettingsForm from './../components/SettingsForm';
import AddPetToShelterForm from './../components/AddPetToShelterForm';


const AddPetToShelterScreen = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);

    return (
        <SafeAreaView className='bg-white h-full'>
            <ScrollView>
                <View>
                    <AddPetToShelterForm />
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default AddPetToShelterScreen