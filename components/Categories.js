import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryButton from './CategoryButton';

const Categories = () => {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingTop: 10,
            }}
        >
            <CategoryButton title='Dogs' />
            <CategoryButton title='Cats' />
            <CategoryButton title='Birds' />
            <CategoryButton title='Retirees' />
            <CategoryButton title='New' />


        </ScrollView>
    )
}

export default Categories;

