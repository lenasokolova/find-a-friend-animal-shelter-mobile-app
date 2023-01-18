import { View, Text, Button, ScrollView, Image } from 'react-native'
import React from 'react';
import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../components/CustomInput';
import validationSchema from '../components/validationSchema';
import { useRef } from 'react';
import { Formik, Field } from 'formik';
import { SafeAreaView } from 'react-native-safe-area-context';

const SettingsForm = () => {
    const navigation = useNavigation();

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
                        <Text className="font-bold text-lg">Your Settings </Text>
                    </View>

                </View>

                <View className="w-full flex-row items-center justify-start space-x-3 mb-3">



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
                                name="fullName"
                                placeholder="  Current name from DB"
                            />


                            <Field
                                component={CustomInput}
                                name="email"
                                placeholder="  Current email from DB"
                                keyboardType="email-address"
                            />


                            <Field
                                component={CustomInput}
                                name="phoneNumber"
                                placeholder="  Current phone number from DB"
                                keyboardType="numeric"
                            />

                            <Field
                                component={CustomInput}
                                name="password"
                                placeholder="  Current password from DB"
                                secureTextEntry
                            />


                            <Field
                                component={CustomInput}
                                name="confirmPassword"
                                placeholder="  Confirm New Password"
                                secureTextEntry
                            />

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

export default SettingsForm