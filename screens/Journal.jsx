import React, {useEffect, useState} from 'react';
import { Text, View, Image, ScrollView, TouchableWithoutFeedback, TextInput, Modal } from 'react-native';
import Navigation from '../components/navigation';
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import CreateJournal from '../components/createJournal';
import dayjs from 'dayjs';
import * as db from 'expo-secure-store';
const getMonth=()=>{
  const month = new Date().getMonth();
  const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  return months[month];
}
const getMonthDate=(date)=>{
  const month = new Date(date).getMonth();
  const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  return months[month];
}
const getDayDate = (date) => { 
  return new Date(date).getDate();
}
const getMonthLong=()=>{
  const month = new Date().getMonth();
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return months[month];
}
const getYear = () => {  return new Date().getFullYear(); }
const getDay = () => { 
  return new Date().getDate();
}
async function findEntries() {
  let entries=[];
  for (let i = 0; i <= getDay(); i++) {
    const date = dayjs(new Date().setDate(i));
    const trial = await db.getItemAsync("journal-" + date.format("YYYYMMDD"))
      if (trial) {
        entries.push({date: date, data: JSON.parse(trial)})
      }
    }
    return entries
  }

  const sleep = (ms) => {   return new Promise((resolve) => setTimeout(resolve, ms)); };
export default function JournalScreen({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [entries, setEntries] = useState([]);
  useEffect(() => {
    async function a() {setEntries(await findEntries());}
    a();
  }, [])
  return (
      <View className="w-screen h-screen flex justify-between bg-stone-900 pt-[65px]">
        <View className='flex-row bg-stone-900 justify-between items-center pb-5 px-5 '>
          <TouchableWithoutFeedback>
            <EvilIcons name="calendar" size={35} color="#fbbf24" />
          </TouchableWithoutFeedback>
          <Text className='text-white text-2xl font-light text-amber-400'>resolute.</Text>
          <TouchableWithoutFeedback onPress={()=>setModalVisible(!modalVisible)}>
            <AntDesign name="plus" size={28} color="#fbbf24" />
          </TouchableWithoutFeedback>
        </View>
        <ScrollView className="pt-5 flex gap-3">
          <View className="items-center px-5 flex-row justify-between">
            <Text className='text-white text-3xl font-noto text-white items-center'>Today <AntDesign name="arrowright" size={15} color="white" /></Text>
            <View className='items-center p-1 px-4 bg-stone-800 rounded-xl'>
              <Text className='text-sm font-semibold text-stone-500'>{getMonth()}</Text>
              <Text className='text-white text-xl font-semibold text-white'>{getDay()}</Text>
            </View>
          </View>
          <View className="px-5">
            <TextInput numberOfLines={1} placeholder='⌕ Search' returnKeyLabel='search' placeholderTextColor='#78716c'  enterKeyHint='search' keyboardAppearance='dark' className='h-10 text-white rounded-xl bg-stone-800 px-3'></TextInput>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className='className="items-center flex-row px-3 bg-stone-800 '>
            <View className='className="items-center flex-row py-1 justify-between bg-stone-800 gap-x-4'>
            <View className='gap-2 py-2 w-[100px] items-center'>
              <Image className=' aspect-square h-[100px] rounded rounded-full' source={{
              uri: 'https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
               }}></Image>
              <Text className='text-white font-semibold text-center'>Daily Quote</Text>
            </View>
            <View className='gap-2 py-2 w-[100px] items-center'>
              <Image className='aspect-square h-[100px] rounded rounded-full' source={{
              uri: 'https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
               }}></Image>
              <Text className='text-white font-semibold text-center'>Benefits of Journaling</Text>
            </View>
            <View className='gap-2 py-2 w-[100px]  items-center'>
              <Image className=' aspect-square h-[100px] rounded rounded-full' source={{
              uri: 'https://images.unsplash.com/photo-1593664028538-b8c65d4e2a91?q=80&w=2502&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
               }}></Image>
              <Text className='text-white font-semibold text-center'>Night & Rest</Text>
            </View>
            <View className='gap-2 py-2 w-[100px] items-center'>
              <Image className=' aspect-square h-[100px] rounded rounded-full' source={{
              uri: 'https://images.unsplash.com/photo-1536954480657-e7e726f2dd90?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
               }}></Image>
              <Text className='text-white font-semibold text-center'>Self Care</Text>
            </View>
            <View className='gap-2 py-2 w-[100px] items-center'>
              <Image className='aspect-square h-[100px] rounded rounded-full' source={{
              uri: 'https://images.unsplash.com/photo-1580261450046-d0a30080dc9b?q=80&w=2509&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
               }}></Image>
              <Text className='text-white font-semibold text-center'>Habits</Text>
            </View>
            </View>
          </ScrollView>
          <View className="items-center px-5 flex-row justify-between">
            <Text className='text-white text-2xl bordertext-white'>{getMonthLong()}</Text>
              <Text className='text-2xl font-semibold text-stone-500'>{getYear()}</Text>
          </View>
          <View className='px-5 gap-y-3'>
          <>{
          entries.map((journal, index) => {
        return(<View key={journal.date} className='bg-stone-800 p-5 rounded-xl flex-row justify-between'>
            <View className='items-center p-1 px-4 bg-stone-800 rounded-xl'>
              <Text className='text-sm font-semibold text-stone-500'>{getMonthDate(journal.date)}</Text>
              <Text className='text-white text-xl font-semibold text-white'>{getDayDate(journal.date)}</Text>
            </View>
            <View className="w-full px-6">
              <Text className='text-white text-xs text-white'>{journal.data.q1}</Text>
              <Text className='text-white text-xs text-white'>{journal.data.q2}</Text>
              <Text className='text-white text-xs text-white'>{journal.data.q3}</Text>
              <Text className='text-white text-xs text-white'>{journal.data.q4}</Text>
              <Text className='text-white text-xs text-white'>{journal.data.q5}</Text>
            </View>
          </View>)
        })
        }</>
        </View>
        </ScrollView>
        <Navigation active="Journal"></Navigation>
        <CreateJournal visible={modalVisible} setModalVisible={setModalVisible}></CreateJournal>
      </View>
  );
}

