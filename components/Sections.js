import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import SectionCard from './SectionCard';

const Sections = ({ section, description }) => {
    return (
        <View>
            <View className="mt-4 ">
                <Text className="font-bold text-lg">{section}</Text>
                {/* <Text className="font-bold text-lg">Shelters near you</Text> */}

            </View>
            <Text className="text-xs text-gray-500 py-1">{description}</Text>
            {/* <Text className="text-xs text-gray-500 py-1">Here you can find animal shelters in your area</Text> */}

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingTop: 10,
                }}
                classname="flex-1"
            >
                <SectionCard title="Wiskers Heaven Shelter" />
                <SectionCard title="Find-a-Fren Shelter" />
                <SectionCard title="Paws'n'Claws Shelter" />
                <SectionCard title="Wiskers Heaven Shelter" />

            </ScrollView>
        </View>
    )
}

export default Sections