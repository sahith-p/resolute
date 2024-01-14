import React from 'react';
import { Text, View, Button } from 'react-native';
import Navigation from '../components/navigation';

export default function JournalScreen({navigation}) {
  return (
      <View className="w-screen h-screen flex justify-between bg-stone-900 pt-20">
        <View className="px-5">
          <Text className='text-white font-noto text-3xl'>Welcome.</Text>
        </View>
        <Navigation active="Journal"></Navigation>
      </View>
  );
}

