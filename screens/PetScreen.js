import { View, Text, ScrollView, Image, TouchableOpacity, Button } from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PetCard from '../components/PetCard';
import ToPetLocation from '../components/ToPetLocation';


const PetScreen = () => {
    const navigation = useNavigation();

    const { params: {
        name, age, img, city, gender, size, tag, info, species, postcode, state, country, addressFirst, addressSecond
    } } = useRoute();

    const url = `https://www.google.com/maps/place/${city},+${state}+${postcode},+${country}`

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);
    return (
        <ScrollView className='bg-white relative'>
            <PetCard
                name={name}
                age={age}
                img={img}
                gender={gender}
                size={size}
                tag={tag}
                species={species}
                addressFirst={addressFirst}
                addressSecond={addressSecond}
                country={country}
                city={city}
                info={info}
                state={state}
                postcode={postcode}
            />


            <TouchableOpacity onPress={navigation.goBack} className="p-2 absolute left-8 top-8 bg-green-900 rounded-full">
                <Ionicons name="chevron-back" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 absolute right-8 top-10  bg-green-900 rounded-full">
                <Ionicons name="share-social-outline" size={24} color="white" />
            </TouchableOpacity>
            <ScrollView className="px-5 pb-5">

                <View className="mb-8">
                    {!info ? <Text>Lovely friend!</Text> : <Text>{info}</Text>}
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

                <View className="mb-8">
                    <Text className="text-xl">I'm here now</Text>
                    <Text className="text-xl font-bold">Animal Shelter Name</Text>
                    <Text>{addressFirst || addressSecond || "Ask about address"}, {city}, {postcode}, {state}, {country} </Text>
                </View>

                <ToPetLocation url={url} children="FIND ME ON A MAP!" img={img} />



            </ScrollView>

            <TouchableOpacity className="px-5 pb-5" onPress={() => {
                alert('To animal shelter contact page!')
            }}>
                {!addressFirst && !addressSecond ? <Text className="px-5 py-5 bg-green-900 text-white text-center rounded-full text-lg">Ask about address!</Text> : <Text className="px-5 py-5 bg-green-900 text-white text-center rounded-full text-lg">Contact & Adopt!</Text>}


            </TouchableOpacity>



        </ScrollView >
    )
}

export default PetScreen