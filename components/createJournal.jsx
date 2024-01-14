import React, {useState} from 'react';
import { Text, View, Button, Modal, TouchableWithoutFeedback, TextInput, ScrollView } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import dayjs from 'dayjs';
import { MaterialIcons } from '@expo/vector-icons';
import * as db from 'expo-secure-store';

const getMonthLong=()=>{
    const month = new Date().getMonth();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[month];
  }
  const getYear = () => {  return new Date().getFullYear(); }
  const getDay = () => { 
    return new Date().getDate();
  }

const getDateString = () => {return getMonthLong() + " " + getDay() + ", " + getYear()};
const dbKey = () => {return "journal-" + dayjs().format("YYYYMMDD")};
export default function CreateJournal(props) {
    const [q1, setQ1] = useState("");
    const [q2, setQ2] = useState("");
    const [q3, setQ3] = useState("");
    const [q4, setQ4] = useState("");
    const [q5, setQ5] = useState("");

    const handleSubmit = async () => { 
        props.setModalVisible(false);
        await db.setItemAsync(dbKey(), JSON.stringify({q1, q2, q3, q4, q5}));
    };
    async function fetch() {
    const tryEntry = await db.getItemAsync(dbKey());
    if (tryEntry) {
        const entry = JSON.parse(tryEntry);
        setQ1(entry.q1);
        setQ2(entry.q2);
        setQ3(entry.q3);
        setQ4(entry.q4);
        setQ5(entry.q5);
    }
    }
    fetch();
  return (
    <Modal animationType='slide' visible={props.visible} presentationStyle='formSheet'>
        <ScrollView className='bg-stone-900 h-full flex'>
            <View className='flex-row justify-between items-center p-5'>
            <Text className='text-white font-semibold text-xl'>{getDateString()}</Text>
            <TouchableWithoutFeedback onPress={() => props.setModalVisible(false)} className='flex-row justify-end'>
                <MaterialIcons name="close" size={30} color="white" /> 
            </TouchableWithoutFeedback>
            </View>
            <View className='mx-5 border-2 border-amber-400 rounded-xl box-shadow-lg bg-stone-800'>
                <Text className='font-noto text-white p-4 text-lg text'>Get specific! Use details to descibe how your day went.</Text>
            </View>
            <Text className='mx-5 pt-5 font-bold text-stone-500 text-xs'>3 THINGS I AM GRATEFUL FOR...</Text>
            <TextInput
            numberOfLines={5} multiline={true} autoFocus={true} selectionColor={'#fbbf24'}
            returnKeyLabel='next' placeholderTextColor='#78716c'  
            enterKeyHint='next' keyboardAppearance='dark' className='h-20 text-sm text-white px-5'
            onChangeText={(text) => setQ1(text)} defaultValue={q1}
            />
            <Text className='mx-5 pt-5 font-bold text-stone-500 text-xs'>WHAT WILL I DO TO MAKE TODAY GREAT?</Text>
            <TextInput
            numberOfLines={5} multiline={true} selectionColor={'#fbbf24'}
            returnKeyLabel='next' placeholderTextColor='#78716c'  
            enterKeyHint='next' keyboardAppearance='dark' className='h-20 text-sm text-white px-5'
            onChangeText={(text) => setQ2(text)} defaultValue={q2}
            />
            <Text className='mx-5 pt-5 font-bold text-stone-500 text-xs'>DAILY AFFIRMATIONS</Text>
            <TextInput
            numberOfLines={5} multiline={true} selectionColor={'#fbbf24'}
            returnKeyLabel='next' placeholderTextColor='#78716c'  
            enterKeyHint='next' keyboardAppearance='dark' className='h-20 text-sm text-white px-5'
            onChangeText={(text) => setQ3(text)} defaultValue={q3}
            />
            <Text className='mx-5 pt-5 font-bold text-stone-500 text-xs'>HIGHLIGHTS OF THE DAY</Text>
            <TextInput
            numberOfLines={5} multiline={true} selectionColor={'#fbbf24'}
            returnKeyLabel='done' placeholderTextColor='#78716c'  
            enterKeyHint='done' keyboardAppearance='dark' className='h-20 text-sm text-white px-5'
            onChangeText={(text) => setQ4(text)} defaultValue={q4}
            />
            <Text className='mx-5 pt-5 font-bold text-stone-500 text-xs'>OVERALL MOOD</Text>
            <TextInput
            numberOfLines={5} multiline={true} selectionColor={'#fbbf24'}
            returnKeyLabel='done' placeholderTextColor='#78716c'  
            enterKeyHint='done' keyboardAppearance='dark' className='h-20 text-sm text-white px-5'
            onChangeText={(text) => setQ5(text)} defaultValue={q5}
            />
            <View className='pt-[90px] pb-[350px]'>
            <TouchableWithoutFeedback onPress={async ()=>handleSubmit()}>
                <View className='flex-row self-center items-center bg-amber-400 justify-center gap-2 p-2 pt-0 rounded-xl'>
                <Octicons name="pencil" size={20} color="white" />
                <Text className='text-white text-md font-bold'>Journal  </Text>
                </View>
            </TouchableWithoutFeedback>
            </View>
        </ScrollView>
    </Modal>
  );

}

