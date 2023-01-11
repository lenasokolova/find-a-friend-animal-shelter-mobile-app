import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const SectionCard = ({ title, imgUrl }) => {
    return (
        <TouchableOpacity
            className="bg-white mr-3 shadow-xl flex-col"
        >
            <Image source={{
                uri: 'https://media.istockphoto.com/id/94328901/photo/young-woman-with-dog-and-cat.jpg?s=170667a&w=0&k=20&c=l3faNbWec9tEExKlfgDE5vg6EwiUUNnSCKdImfZlJKk='
            }}
                className="w-50 h-20 rounded-xl object-contain"
            />
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}

export default SectionCard