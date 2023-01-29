import { View, Text, TextInput } from 'react-native';
import React from 'react';

const CustomInput = (props) => {

    const { label, placeholder, error } = props;

    return (
        <View className="mb-1/2">
            <View>
                <Text className="text-xs mt-1 mb-1">{label}</Text>
            </View>
            <TextInput placeholder={placeholder}
                className="border py-0.5 px-2 rounded-sm border-gray-500 mb-1" />
            <Text className="text-red-500 text-sm">Some error</Text>
            {error && <Text>{error}</Text>}
            {/* <TextInput
                style={[props.multiline && { height: props.numberOfLines * 40, textAlignVertical: 'top', paddingTop: 12 }]}
                className={`w-full h-12 my-2 pl-5 bg-white border rounded-md
                ${errorBorder}`}

                value={value}
                onChangeText={(text) => onChange(name)(text)}
                onBlur={() => {
                    setFieldTouched(name)
                    onBlur(name)
                }}
                {...inputProps}
            />
            {hasError && <Text className="text-md text-red-700 font-semibold">{errors[name]}</Text>} */}
        </View>
    )
}

export default CustomInput