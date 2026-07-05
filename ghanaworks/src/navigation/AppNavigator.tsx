import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ArtisanRegisterScreen from '../screens/ArtisanRegisterScreen';
import JobPostScreen from '../screens/JobPostScreen';

export type RootStackParamList = {
  Home: undefined;
  Register: undefined;
  JobPost: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Register" component={ArtisanRegisterScreen} />
      <Stack.Screen name="JobPost" component={JobPostScreen} />
    </Stack.Navigator>
  );
}
