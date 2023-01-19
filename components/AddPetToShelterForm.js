import { View, Text, Button, ScrollView, Image } from 'react-native'
import React from 'react';
import { useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../components/CustomInput';
import validationSchema from '../components/validationSchema';
import { useRef } from 'react';
import { Formik, Field } from 'formik';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SelectList } from 'react-native-dropdown-select-list';
import { MultipleSelectList } from 'react-native-dropdown-select-list';
import ImgPicker from './ImgPicker';


const AddPetToShelterForm = () => {
    const navigation = useNavigation();
    const [selectedGender, setSelectedGender] = useState("");
    const [selectedAge, setSelectedAge] = useState("");
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedTag, setSelectedTag] = useState("");
    const [selectedSpecies, setSelectedSpecies] = useState("");

    const selectedFieldStyles = { borderRadius: 6, marginBottom: 12, color: 'red' }

    const gender = [{ key: '1', value: 'Male' },
    { key: '2', value: 'Female' }];

    const age = [{ key: '3', value: 'Baby' },
    { key: '4', value: 'Young' }, { key: '5', value: 'Adult' }, { key: '6', value: 'Senior' },];

    const size = [{ key: '7', value: 'Small' },
    { key: '8', value: 'Medium' }, { key: '9', value: 'Large' },];

    const tag = [{ key: '13', value: 'Sensetive' },
    { key: '14', value: 'Playfull' }, { key: '15', value: 'Anxious' }, { key: '16', value: 'Calm' }, { key: '17', value: 'Stubborn' },];

    const species = [{ key: '10', value: 'Dog' },
    { key: '11', value: 'Cat' }, { key: '12', value: 'Other' },];

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);

    const ref = useRef(null);

    return (
        <SafeAreaView className='bg-white my-5 p-5'>

            <View className="w-full">
                <View className="flex-row items-center">

                    <Image source={{
                        uri: 'https://media.istockphoto.com/id/1357723739/photo/studio-portrait-of-a-smiling-young-latin-woman.jpg?b=1&s=170667a&w=0&k=20&c=RIMvJI9S1mZytKJydukxUF4hRoyVbR1W3ix6gsdo72I='
                    }}
                        className='h-7 w-7 p-5 rounded-full'
                    />

                    <View>
                        <Text className="font-bold text-lg">Add new pet to your Shelter </Text>
                    </View>

                </View>

                <Formik
                    initialValues={{
                        fullName: '',
                        email: '',
                        phoneNumber: '',
                        password: '',
                        confirmPassword: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => console.log(values)}
                    innerRef={ref}
                >
                    {({ handleSubmit, isValid }) => (
                        <>
                            <Field
                                component={CustomInput}
                                name="name"
                                placeholder="Name of the pet"
                            />

                            <SelectList
                                setSelected={(val) => setSelectedGender(val)}
                                data={gender}
                                save="value"
                                boxStyles={selectedFieldStyles}
                            />

                            <SelectList
                                setSelected={(val) => setSelectedAge(val)}
                                data={age}
                                save="value"
                                boxStyles={selectedFieldStyles}
                            />

                            <SelectList
                                setSelected={(val) => setSelectedSize(val)}
                                data={size}
                                save="value"
                                boxStyles={selectedFieldStyles}
                            />

                            <SelectList
                                setSelected={(val) => setSelectedSpecies(val)}
                                data={species}
                                save="value"
                                boxStyles={selectedFieldStyles}
                            />

                            <MultipleSelectList
                                setSelected={(val) => setSelectedTag(val)}
                                data={tag}
                                save="value"
                                label="Short Description"
                                boxStyles={{ borderRadius: 6, marginBottom: 0 }}
                            />

                            <Field
                                component={CustomInput}
                                name="phoneNumber"
                                placeholder="Current phone number from DB"
                                keyboardType="numeric"
                            />

                            <Field
                                component={CustomInput}
                                name="password"
                                placeholder="Current password from DB"
                                secureTextEntry
                            />


                            <Field
                                component={CustomInput}
                                name="confirmPassword"
                                placeholder="Confirm New Password"
                                secureTextEntry
                            />

                            <Field
                                component={CustomInput}
                                name="description"
                                placeholder="Describe pet..."
                                multiline
                                numberOfLines={3}
                            />
                            <Field
                                component={CustomInput}
                                name="photoUrl"
                                placeholder="Add photo url here..."
                            />
                            <ImgPicker />

                            <View className="flex-row justify-end space-x-5">
                                <View>
                                    <Button
                                        onPress={navigation.goBack}
                                        title="Back"
                                        disabled={!isValid}
                                        color="grey"
                                    />
                                </View>
                                <View>
                                    <Button
                                        onPress={() => alert('New settings have been saved')}
                                        // onPress={() => { handleSubmit(); addUserToDb(); navigation.navigate('Home', { ref }); }}
                                        title="Save new info"
                                        disabled={!isValid}
                                        color="green"
                                        type="submit"
                                    />
                                </View>

                            </View>


                        </>
                    )}
                </Formik>
            </View>
        </SafeAreaView>
    )
}

export default AddPetToShelterForm