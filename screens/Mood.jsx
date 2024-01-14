import React from 'react';
import { Text, View } from 'react-native';
import Navigation from '../components/navigation';

export default function MoodScreen({navigation}) {
  return (
      <View className="w-screen h-screen items-center justify-between bg-stone-900">
        <Text className="text-white font-noto"></Text>
        <Navigation active="Mood"></Navigation>
      </View>
  );
}

