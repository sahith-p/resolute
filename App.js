import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import JournalScreen from './screens/Journal';
import GalleryScreen from './screens/Gallery';
import MoodScreen from './screens/Mood';
import SettingsScreen from './screens/Settings';
import { useFonts, NotoSerifDisplay_400Regular } from '@expo-google-fonts/noto-serif-display';

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    NotoSerifDisplay_400Regular,
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Journal' screenOptions={{headerShown:false, animation:'none'}}>
        <Stack.Screen name="Journal" component={JournalScreen} />
        <Stack.Screen name="Gallery" component={GalleryScreen} />
        <Stack.Screen name="Mood" component={MoodScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


