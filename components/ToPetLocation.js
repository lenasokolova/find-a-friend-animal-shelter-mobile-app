import { View, Text, Linking, Alert, TouchableOpacity, Image } from 'react-native'
import React from 'react';
import { useCallback } from 'react';
import { Ionicons } from '@expo/vector-icons';


const ToPetLocation = ({ url, children, img }) => {
    const handlePress = useCallback(async () => {
        const supported = await Linking.canOpenURL(url);

        if (supported) {
            await Linking.openURL(url);
        } else {
            Alert.alert(`Don't know how to open URl: ${url}`)
        }
    }, [url])
    return (
        <TouchableOpacity
            onPress={handlePress}
            className="bg-green-100 items-center p-5 mb-8 rounded-xl shadow-sm relative">
            <View className="absolute -left-5 rotate-12 opacity-80">
                <Ionicons name="paw-outline" size={94} color="white" />
            </View>
            <View className="absolute -right-5 bottom-5 opacity-80 -rotate-45">
                <Ionicons name="paw-outline" size={74} color="white" />
            </View>
            <View className="relative pt-2">
                {img ? <Image source={{
                    uri: img
                }}
                    className="w-28 h-28 rounded-full object-contain "
                /> : <Image source={{ uri: 'https://via.placeholder.com/350x350/166534/ffffff?text=NO+PHOTO+AVAILABLE' }}
                    className="w-28 h-28 rounded-full object-contain"
                />}
                <View className="absolute left-20 top-20 p-1 bg-white rounded-full shadow-md">
                    <Ionicons name="location-sharp" size={26} color="#166534" />
                </View>

            </View>
            <Text className="p-30 pt-5 pb-2 text-2xl font-bold">{children}</Text>

        </TouchableOpacity>
    )
}

export default ToPetLocation