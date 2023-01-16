import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const PetCard = ({ name, age, img, city, gender, size, tag, info, species, postcode, state, country, addressFirst, addressSecond }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('Pet', {
                    name, age, img, city, gender, size, tag, info, species, postcode, state, country, addressFirst, addressSecond
                })
            }}

        >
            {img ? <Image source={{
                uri: img
            }}
                className="h-72 w-full rounded-tl-2xl rounded-tr-2xl object-contain"
            /> : <Image source={{ uri: 'https://via.placeholder.com/350x350/166534/ffffff?text=NO+PHOTO+AVAILABLE' }}
                className="h-72 w-full rounded-tl-2xl rounded-tr-2xl object-contain"
            />}


            <View className="p-3 absolute bottom-24 right-7 bg-white rounded-full shadow-sm">
                <AntDesign name="hearto" size={24} color="black" />
            </View>

            <View className="px-5 pb-5">
                <View className="mb-2 flex-row items-center space-x-1">
                    <Text className="font-bold text-lg pt-6">{name} </Text>
                    <Text className="font-thin text-lg text-gray-500 pt-6">{age}</Text>
                    <Text className="font-bold text-lg text-gray-800 pt-6 pl-2">{species}</Text>
                </View>

                <View className="flex-row items-center space-x-2 ">
                    <Ionicons name="location-outline" size={16} color="#166534" />
                    <Text className="text-xs text-gray-400">{city}, {state}, {country}</Text>

                    {addressFirst || addressSecond ? <Text className="text-xs text-gray-600">{addressFirst || addressSecond}</Text> : <Text className="text-xs text-gray-600 font-bold">Ask about address</Text>}

                </View>
                <View className="flex-row mt-2 space-x-5">
                    <View className="flex-row items-center">
                        {gender == 'Male' ? <Ionicons name="male" size={20} color="#166534" /> : <Ionicons name="female" size={20} color="#166534" />}
                        <Text className="text-sm text-gray-700 pl-1">{gender}</Text>
                    </View>
                    <View className="flex-row items-center">

                        <MaterialCommunityIcons name="weight" size={19} color="#166534" />
                        <Text className="text-sm text-gray-700 pl-1">{size}</Text>
                    </View>
                    <View className="flex-row items-center">
                        <Ionicons name="basketball-outline" size={20} color="#166534" />
                        {tag ? <Text className="text-sm text-gray-700 pl-1">{tag}</Text> : <Text className="text-sm text-gray-700 pl-1">Sensitive</Text>}
                    </View>

                </View>
            </View>
        </TouchableOpacity>
    )
}

export default PetCard