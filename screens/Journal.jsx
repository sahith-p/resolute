import React from 'react';
import { Text, View, Button } from 'react-native';
import Navigation from '../components/navigation';

export default function JournalScreen({navigation}) {
  return (
      <View className="w-screen h-screen flex items-center justify-between bg-stone-900">
        <Text></Text>
        <Navigation active="Journal"></Navigation>
      </View>
  );
}

