import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { useLayoutEffect, useState, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Categories from './../components/Categories';
import PetCard from '../components/PetCard';
import client from '../petClient';

const ShelterScreen = () => {

    const [petData, setPetData] = useState([]);
    const navigation = useNavigation();

    const { params: {
        title
    } } = useRoute();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    })

    useEffect(() => {
        async function fetchData() {
            await client.animal.search({
                // type: 'Cat',
            }).then((data) => setPetData(data?.data.animals))
        }
        fetchData();
        console.log(petData);
    }, [])

    const showPets = petData.map(pet => (
        <PetCard
            key={pet?.id}
            name={pet?.name}
            age={pet?.age}
            img={pet?.photos[0]?.large}
            gender={pet?.gender}
            size={pet?.size}
            tag={pet?.tags[0]}
            info={pet?.description}
            species={pet?.species}
            city={pet?.contact.address.city}
            state={pet?.contact.address.state}
            postcode={pet?.contact.address.postcode}
            country={pet?.contact.address.country}
        />
    ))

    console.log(showPets);

    return (
        <ScrollView className='bg-white relative'>
            <View>
                <Image source={{
                    uri: "https://media.istockphoto.com/id/94328901/photo/young-woman-with-dog-and-cat.jpg?s=170667a&w=0&k=20&c=l3faNbWec9tEExKlfgDE5vg6EwiUUNnSCKdImfZlJKk="
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

            <View className="p-5">
                <Text className="font-bold text-2xl">{title}</Text>
                <Text className="font-bold text-lg">Description</Text>
                <Text className="text-s text-gray-600 font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, fuga! Quod in accusamus labore dolores quo voluptas, accusantium saepe eius quas, nam quae! Assumenda ullam dignissimos temporibus. </Text>
            </View>
            <View className="pl-5">
                <Categories />
            </View>
            <ScrollView className="p-5">

                {showPets}


            </ScrollView>

        </ScrollView>
    )
}

export default ShelterScreen