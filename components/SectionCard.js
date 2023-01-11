import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { AntDesign } from '@expo/vector-icons';

const SectionCard = ({ title, imgUrl }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('Shelter', {
                    title
                })
            }}
            className="bg-white mr-3 mb-3 shadow-xl rounded-xl relative"
        >

            <Image source={{
                uri: "https://media.istockphoto.com/id/94328901/photo/young-woman-with-dog-and-cat.jpg?s=170667a&w=0&k=20&c=l3faNbWec9tEExKlfgDE5vg6EwiUUNnSCKdImfZlJKk="
            }}
                className="h-48 w-60 rounded-sm object-contain"
            />
            <View className="p-3 absolute bottom-12 right-6 bg-white rounded-full shadow-sm">
                <AntDesign name="hearto" size={20} color="black" />
            </View>

            <View className="px-3 pb-4">
                <Text className="font-bold text-lg pt-6">{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default SectionCard