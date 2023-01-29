import {
	View,
	Text,
	SafeAreaView,
	Button,
	TouchableOpacity,
	TextInput,
} from 'react-native';
import React from 'react';
import { Formik, Field } from 'formik';
import CustomInput from './CustomInput';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import ImgPicker from './ImgPicker';

import validationSchema from './validationSchema';
import { useRef } from 'react';

const SignUpForm = (props) => {
	const { GoTotitle, onPress, question, label, placeholderName } = props;

	return (
		<Formik
			initialValues={{
				fullName: '',
				email: '',
				phoneNumber: '',
				password: '',
				confirmPassword: '',
				photoUrl: '',
			}}
			validationSchema={validationSchema}
			onSubmit={(values, { resetForm }) => {
				console.log(values);
				resetForm({ values: '' });
			}}
			// innerRef={ref}
		>
			{({ handleSubmit, isValid }) => (
				<>
					<CustomInput
						label={label}
						placeholder={placeholderName}
					/>
					<CustomInput
						label="Email address"
						placeholder="example@mail.com"
					/>
					<CustomInput
						label="Phone"
						placeholder="+48000000000"
					/>
					<CustomInput
						label="Password"
						placeholder="********"
					/>
					<CustomInput
						label="Confirm Password"
						placeholder="********"
					/>
					<CustomInput
						label="Profile picture Url"
						placeholder="http://image.com"
					/>
					<View className="mt-5">
						<ImgPicker />
					</View>

					<View className="justify-between w-full items-center">
						<View className="mt-1 mb-4">
							<Text>{question}</Text>
							<TouchableOpacity
								onPress={onPress}
								className="bg-green-300 p-1 rounded-sm"
							>
								<Text>Go to {GoTotitle} form</Text>
							</TouchableOpacity>
						</View>

						<View>
							<Button
								title="SIGN UP"
								color="green"
								type="submit"
							/>
						</View>
					</View>
				</>
			)}
		</Formik>

		// </SafeAreaView>
	);
};

export default SignUpForm;
