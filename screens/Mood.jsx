import React, {useState} from 'react';
import { Text, View, ScrollView } from 'react-native';
import Navigation from '../components/navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as db from 'expo-secure-store';
import dayjs from 'dayjs';

const dbKey = () => {return "journal-" + dayjs().format("YYYYMMDD")};
export default function MoodScreen({navigation}) {
  const [mood, setMood] = React.useState("");
  const [apiresponse, setapiresponse] = React.useState("");
  const getDayMood = async () => {
    const dayMood = JSON.parse(await db.getItemAsync(dbKey()));
    if (dayMood) return dayMood.q5;
    else return "No mood record today."
  }
  fetch(process.env.API_URI+"/chat?="+JSON.stringify(getDayMood())).then((response) => {setapiresponse(response.json())});
  getDayMood().then((dayMood) => {setMood(dayMood)});
  return (
      <View className="w-screen h-screen items-center justify-between bg-stone-900">
        <ScrollView className='mt-[90px] w-full'>
          <View className='items-center'>
          <MaterialCommunityIcons name="google-circles" size={50} color="white" />
          <Text className="text-3xl text-white font-semibold">Mood</Text>
          </View>
          <View className='w-full pt-5 px-5'>
            <View className='bg-stone-800  w-max rounded-xl p-3 px-4 flex'>
              <Text className='font-bold text-stone-500 text-xs '>TODAY'S MOOD</Text>
              <Text className='font-bold text-white text-lg '>{mood}</Text>
            </View>
          </View>
          <View className='w-full pt-5 px-5'>
            <View className='bg-stone-800  w-max rounded-xl p-3 px-4 flex'>
              <Text className='font-bold text-stone-500 text-xs '>JOURNAL MOOD ANALYSIS</Text>
              <Text className='font-bold text-white text-lg '>{apiresponse}</Text>
              
            </View>
          </View>
        </ScrollView>
        <Navigation active="Mood"></Navigation>
      </View>
  );
}

