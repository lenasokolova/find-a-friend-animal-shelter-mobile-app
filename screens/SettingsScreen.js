import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import SettingsForm from './../components/SettingsForm';
import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const SettingsScreen = () => {
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
                    <SettingsForm />
                </View>
                <View className="p-5 bg-green-100 flex items-center">
                    <Text className="text-xl text-center">Is there a new commer in your shelter?</Text>
                    <Text className="text-2xl font-bold text-center mb-3">Let's hep him to find a new home!</Text>
                    <TouchableOpacity
                        className="w-3/5 p-4 bg-black rounded-full"
                        onPress={() => navigation.navigate('AddPet')}
                    >
                        <Text className="text-white text-center text-xl">Add pet to DB</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}

export default SettingsScreen