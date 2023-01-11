import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import SectionCard from './SectionCard';

const Sections = () => {
    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10,
            }}
        >
            <SectionCard />
            <SectionCard />

        </ScrollView>
    )
}

export default Sections