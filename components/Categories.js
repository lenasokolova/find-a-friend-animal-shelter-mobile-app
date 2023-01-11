import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryButton from './CategoryButton';

const Categories = () => {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10,
            }}
        >
            <CategoryButton title='Dogs' />
            <CategoryButton title='Cats' />
            <CategoryButton title='Birds' />
            <CategoryButton title='City' />
            <CategoryButton title='New' />


        </ScrollView>
    )
}

export default Categories;

