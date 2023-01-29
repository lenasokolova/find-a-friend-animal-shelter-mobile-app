import React from 'react';
import { useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import SignUpForm from './../components/SignUpForm';
import SignInForm from './../components/SignInForm';

const FormsScreen = () => {
	const navigation = useNavigation();
	const [isSignIn, setIsSignIn] = useState(true);
	const [isShelter, setIsShelter] = useState(true);
	const [isUser, setIsUser] = useState(false);

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);

	const toggleForm = () => {
		setIsSignIn(!isSignIn);
		setIsUser(!isUser);
	};

	const toggleUserType = () => {
		setIsShelter(!isShelter);
		setIsUser(!isUser);
	};

	const bgShelter = isShelter ? 'bg-green-900' : 'bg-gray-300';
	const bgUser = isUser ? 'bg-gray-300' : 'bg-green-900';

	return (
		<SafeAreaView className="bg-white h-full">
			<ScrollView className="my-5 p-5">
				<View>
					<Text className="text-2xl text-center font-bold mb-4">
						{isSignIn ? 'Sign In' : 'Sign Up'} form
					</Text>
					{!isSignIn && (
						<View className="flex-row justify-center space-x-5 mb-2 items-center">
							<TouchableOpacity
								onPress={() => toggleUserType()}
								className={`${bgShelter} rounded-md`}
							>
								<Text className="text-xs px-2 py-1 text-white">
									Animal Shelter
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								onPress={() => toggleUserType()}
								className={`${bgUser} rounded-md`}
							>
								<Text className="text-xs px-2 py-1 text-white">
									Regular User
								</Text>
							</TouchableOpacity>
						</View>
					)}
					<View>
						{isSignIn ? (
							<SignInForm
								onPress={() => toggleForm()}
								GoTotitle="Sign Up"
								question="Do not have an account?"
							/>
						) : (
							<SignUpForm
								label={isShelter ? 'Shelter Name' : 'Full Name'}
								placeholderName={
									isShelter
										? 'Shelter Name Example'
										: 'Jane Doe example'
								}
								onPress={() => toggleForm()}
								GoTotitle="Sign In"
								question="Have an account?"
							/>
						)}
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default FormsScreen;
