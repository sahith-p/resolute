import React from 'react';
import { Text, View, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { NavigationContext } from '@react-navigation/native';
import { TouchableWithoutFeedback } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const showBar = (active, page) => {
    if (active==page) {
        return 'bg-amber-400 h-[4px] rounded-b w-[44px] top-0';
    } else 
        return 'bg-stone-800 h-[4px] rounded-b w-[44px] top-0';
}
const color = (active, page) => {
    if (active==page) {
        return 'white';
    } else 
        return '#78716c';
}
const colorText = (active, page) => {
    if (active==page) {
        return 'text-white';
    } else 
        return 'text-stone-500';
}
export default function Navigation(props) {
    const navigation = React.useContext(NavigationContext);
  return (
      <View className='bottom-0 w-[100%] h-[85px] rounded-t rounded-t-3xl flex-row items-center justify-between px-10 pb-5 bg-stone-800'>
        <TouchableWithoutFeedback  onPress={() => navigation.navigate('Journal')}>
            <View className='justify-between items-center top-0 gap-1'>
                <View className={showBar(props.active, 'Journal') + " -translate-y-[8.25px]"}></View>
                <Entypo name="book" size={20} color={color(props.active, 'Journal')} />
                <Text className={"text-xs font-semibold "+colorText(props.active, 'Journal')}>Journal</Text>    
            </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback  onPress={() => navigation.navigate('Gallery')}>
            <View className='flex-col items-center gap-1'>
                <View className={showBar(props.active, 'Gallery') + ' -translate-y-[8.25px]'}></View>
                <MaterialIcons name="grid-on" size={20} color={color(props.active, 'Gallery')} />
                <Text className={"text-xs font-semibold "+colorText(props.active, 'Gallery')}>Gallery</Text>   
            </View> 
        </TouchableWithoutFeedback>
        <View className='items-center p-1 bg-amber-400 justify-center rounded rounded-full -translate-y-[18px] drop-shadow-lg'>
            <Feather name="plus" size={45} color="white" />
        </View>
        <TouchableWithoutFeedback  onPress={() => navigation.navigate('Mood')}>
            <View className='flex-col items-center gap-1'>
                <View className={showBar(props.active, 'Mood') + ' -translate-y-[8.25px]'}></View>
                <Entypo name="progress-two" size={20} color={color(props.active, 'Mood')} />
                <Text className={"text-xs font-semibold "+colorText(props.active, 'Mood')}>Mood</Text>    
            </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback  onPress={() => navigation.navigate('Settings')}>
        <View className='flex-col items-center gap-1'>
            <View className={showBar(props.active, 'Settings') + ' -translate-y-[8.25px]'}></View>
            <MaterialCommunityIcons name="account-settings" size={20} color={color(props.active, 'Settings')} />
            <Text className={"text-xs font-semibold "+colorText(props.active, 'Settings')}>Settings</Text>    
        </View>
        </TouchableWithoutFeedback>
      </View>
  );
}

