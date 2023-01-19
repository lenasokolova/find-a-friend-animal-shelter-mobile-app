import { Text, TextInput } from 'react-native';
import React from 'react';

const CustomInput = (props) => {


    const {
        field: { name, onBlur, onChange, value },
        form: { errors, touched, setFieldTouched },
        ...inputProps
    } = props;

    const hasError = errors[name] && touched[name];
    const errorBorder = hasError ? 'border-red-700' : 'border-gray-500'

    return (
        <>
            <TextInput
                style={[props.multiline && { height: props.numberOfLines * 40, textAlignVertical: 'top', paddingTop: 12 }]}
                className={`w-full h-12 my-3 pl-5 bg-white border rounded-md
                ${errorBorder}`}

                value={value}
                onChangeText={(text) => onChange(name)(text)}
                onBlur={() => {
                    setFieldTouched(name)
                    onBlur(name)
                }}
                {...inputProps}
            />
            {hasError && <Text className="text-md text-red-700 font-semibold">{errors[name]}</Text>}
        </>
    )
}

export default CustomInput