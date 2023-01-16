import { View, Text, TextInput, Image, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Categories from '../components/Categories';
import Sections from '../components/Sections';

const HomeScreen = () => {

    const navigation = useNavigation();

    // useLayoutEffect for UI to be loaded
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);


    return (
        <SafeAreaView className='bg-white my-5 p-5'>
            <ScrollView>
                <View className='flex-row items-center space-x-2 pb-2'>
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
                    <Sections
                        section="Shelters near you"
                        description="Here you can find animal shelters in your area"
                    />
                    <Sections
                        section="Newcommers in your area"
                        description="Here you can find new came animals nearby"
                    />
                </View>



            </ScrollView>

        </SafeAreaView>

    )
}

export default HomeScreen;