import { View, Text, TextInput, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Categories from '../components/Categories';
import Sections from '../components/Sections';

const HomeScreen = () => {

    const navigation = useNavigation();

    // useLayoutEffect for UI to be loaded
    useLayoutEffect(() => {
        // setOptions allows us to change a navigation options like headerTitle on navbar et.
        navigation.setOptions({
            // headerTitle: "TESTING",
            headerShown: false,
        })
    }, []);
    return (
        <SafeAreaView className='bg-white my-5 pb-5'>
            <View className='flex-row items-center space-x-2 pb-2 mx-4'>
                <Image source={{
                    uri: 'https://media.istockphoto.com/id/1357723739/photo/studio-portrait-of-a-smiling-young-latin-woman.jpg?b=1&s=170667a&w=0&k=20&c=RIMvJI9S1mZytKJydukxUF4hRoyVbR1W3ix6gsdo72I='
                }}
                    className='h-7 w-7 bg-gray-300 p-5 rounded-full'
                />
                <TextInput placeholder='Enter your location...' keyboardType='default' />
            </View>
            <View>
                <Categories />
            </View>
            <View>
                <Sections />
            </View>
        </SafeAreaView>

    )
}

export default HomeScreen;