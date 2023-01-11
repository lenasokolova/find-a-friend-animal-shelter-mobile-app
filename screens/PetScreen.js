import { View, Text, ScrollView, Image, TouchableOpacity, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const PetScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);
    return (
        <ScrollView className='bg-white relative'>
            <View>
                <Image source={{
                    uri: "https://images.unsplash.com/photo-1615751072497-5f5169febe17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGRvZ3xlbnwwfHwwfHw%3D&w=1000&q=80"
                }}
                    className="w-full h-72 bg-gray-300 p-4"
                />

            </View>
            <TouchableOpacity className="p-3 absolute top-64 right-8 bg-white rounded-full shadow-lg">
                <AntDesign name="hearto" size={26} color="black" />
            </TouchableOpacity>


            <TouchableOpacity onPress={navigation.goBack} className="p-2 absolute left-8 top-8 bg-green-900 rounded-full">
                <Ionicons name="chevron-back" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 absolute right-8 top-10  bg-green-900 rounded-full">
                <Ionicons name="share-social-outline" size={24} color="white" />
            </TouchableOpacity>
            <ScrollView className="px-5 pb-5">
                <View className="mb-2">
                    <Text className="font-bold text-lg pt-6">Doggo <Text className="font-thin text-sm text-gray-500 pt-6">3 years old</Text></Text>
                </View>

                <View className="flex-row items-center ">
                    <Ionicons name="location-outline" size={16} color="gray" />
                    <Text className="text-xs text-gray-400">15 km away</Text>
                </View>
                <View className="flex-row mt-2 mb-5 space-x-5">
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
                <View className="mb-8">
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae illum itaque dicta libero nam exercitationem reiciendis dolorum, nisi voluptatibus! Explicabo minus similique, nostrum dolore dolorum blanditiis atque ullam dignissimos. Nostrum, laborum doloremque? Est neque sunt praesentium quia, cum dolore incidunt enim dolorum fuga qui, blanditiis, aliquam quaerat adipisci. Officiis, suscipit!</Text>
                </View>
                <View className="flex space-y-3 mb-8">
                    <View className="flex-row items-center">
                        <Ionicons name="home-outline" size={28} color="#166534" />
                        <View className="pl-4">
                            <Text className="text-green-900 font-bold text-md">House with a garden</Text>
                            <Text className="text-xs text-gray-500 ">Not obligatory, but would be awesome</Text>
                        </View>
                    </View>
                    <View className="flex-row items-center">
                        <Ionicons name="people-outline" size={28} color="#166534" />
                        <View className="pl-4">
                            <Text className="text-green-900 font-bold text-md">Without children</Text>
                            <Text className="text-xs text-gray-500 ">Lettle humans scare me...</Text>
                        </View>
                    </View>
                    <View className="flex-row items-center">
                        <AntDesign name="infocirlceo" size={28} color="#166534" />
                        <View className="pl-4">
                            <Text className="text-green-900 font-bold text-md">Regular trainings & long walks</Text>
                            <Text className="text-xs text-gray-500 ">I'm full of energy!</Text>
                        </View>
                    </View>
                </View>

                <View>
                    <Text>I'm here now</Text>
                    <Text>Animal Shelter Name</Text>
                    <Text>Paw Street, 61-700, Poznan Poland</Text>
                </View>

                <View className="bg-slate-500">
                    <Text className="p-30 ">Here is a map</Text>
                </View>
                <View>
                    <Text>Any question?</Text>
                </View>
            </ScrollView>




            <TouchableOpacity className="px-5 pb-5" onPress={() => {
                alert('To animal shelter contact page!')
            }}>
                <Text className="px-5 py-5 bg-green-900 text-white text-center rounded-full text-lg">Adopt Me!</Text>

            </TouchableOpacity>

        </ScrollView >
    )
}

export default PetScreen