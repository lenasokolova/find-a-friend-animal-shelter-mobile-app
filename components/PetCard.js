import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const PetCard = () => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('Pet', {
                })
            }}
            className="bg-white shadow-md rounded-2xl relative mb-5"
        >
            <Image source={{
                uri: "https://images.unsplash.com/photo-1615751072497-5f5169febe17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGRvZ3xlbnwwfHwwfHw%3D&w=1000&q=80"
            }}
                className="h-48 w-full rounded-tl-2xl rounded-tr-2xl object-contain"
            />
            <View className="p-3 absolute bottom-24 right-6 bg-white rounded-full shadow-sm">
                <AntDesign name="hearto" size={20} color="black" />
            </View>

            <View className="px-5 pb-5">
                <View className="mb-2">
                    <Text className="font-bold text-lg pt-6">Doggo <Text className="font-thin text-sm text-gray-500 pt-6">3 years old</Text></Text>
                </View>

                <View className="flex-row items-center ">
                    <Ionicons name="location-outline" size={16} color="gray" />
                    <Text className="text-xs text-gray-400">15 km away</Text>
                </View>
                <View className="flex-row mt-2 space-x-5">
                    <View className="flex-row items-center">
                        <Ionicons name="male" size={20} color="#166534" />
                        <Text className="text-sm text-gray-700 pl-1">Male</Text>
                    </View>
                    <View className="flex-row items-center">

                        <MaterialCommunityIcons name="weight" size={19} color="#166534" />
                        <Text className="text-sm text-gray-700 pl-1">Medium</Text>
                    </View>
                    <View className="flex-row items-center">
                        <Ionicons name="basketball-outline" size={20} color="#166534" />
                        <Text className="text-sm text-gray-700 pl-1">Male</Text>
                    </View>

                </View>
            </View>
        </TouchableOpacity>
    )
}

export default PetCard