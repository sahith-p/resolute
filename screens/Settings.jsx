import React from 'react';
import { Text, View } from 'react-native';
import Navigation from '../components/navigation';

export default function SettingsScreen({navigation}) {
  return (
      <View className="w-screen h-screen items-center justify-between bg-stone-900">
        <View>
        <View className='mt-[120px] w-screen px-5  py-3 bg-stone-800'>
          <Text className='text-red-500 text-left text-md font-semibold'>Delete all journal entries</Text>
        </View>
        <View className='w-screen px-5 mt-4 py-3 bg-stone-800'>
          <Text className='text-red-500 text-left text-md font-semibold'>Delete all gallery items</Text>
        </View>
        <View className='w-screen px-5 mt-4 py-3 bg-stone-800'>
          <Text className='text-red-500 text-left text-md font-semibold'>Delete mood insights</Text>
        </View>
        </View>
        <Navigation active="Settings"></Navigation>
      </View>
  );
}

