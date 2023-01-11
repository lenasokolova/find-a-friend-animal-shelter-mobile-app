import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { useLayoutEffect } from 'react';

const ShelterScreen = () => {
    const navigation = useNavigation();

    const { params: {
        title
    } } = useRoute();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
        })
    })
    return (
        <View>
            <Text>ShelterScreen</Text>
            <Text>{title}</Text>

        </View>
    )
}

export default ShelterScreen