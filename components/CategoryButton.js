import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CategoryButton = ({ title }) => {
    return (
        <TouchableOpacity className="bg-green-800 w-20 h-9 flex justify-center mr-2 rounded-full">
            <Text className='text-center text-white font-bold'>{title}</Text>
        </TouchableOpacity>
    )
}

export default CategoryButton;