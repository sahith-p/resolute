import React, {useState, useEffect} from 'react';
import { Text, View, Image, Modal, TouchableWithoutFeedback, TextInput, ScrollView } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import dayjs from 'dayjs';
import { MaterialIcons } from '@expo/vector-icons';
import * as db from 'expo-secure-store';

export default function ImagePopup(props) {
    const [text, setText] = useState("");
    if (!props.image) return;
    const handleSubmit = async () => { 
        props.setModalVisible(false);
        await db.setItemAsync("image-"+props.image.split("/")[14], text);
    };
    async function fetch() {
        const tryEntry = await db.getItemAsync("image-"+props.image.split("/")[14]);
        if (tryEntry) {
            setText(tryEntry);
        }
    }
    fetch();

  return (
    <Modal animationType='slide' visible={props.visible} presentationStyle='formSheet'>
        <ScrollView className='bg-stone-900 h-full flex'>
            <View className='flex-row justify-between items-center p-5'>
                <View></View>
                <TouchableWithoutFeedback onPress={async () => handleSubmit()} className='flex-row justify-end'>
                    <MaterialIcons name="close" size={30} color="white" /> 
                </TouchableWithoutFeedback>
            </View>
            <View className='items-center'>
                <Image className='border border-2 border-amber-400 rounded-lg' key={props.image} source={{ uri: props.image }} style={{ width: 320, height: 320 }} />
                <TextInput
            numberOfLines={5} multiline={true} selectionColor={'#fbbf24'} autoFocus={true}
            returnKeyLabel='done' placeholderTextColor='#78716c'  
            enterKeyHint='done' keyboardAppearance='dark' className='h-20 text-sm text-white pt-5 px-5'
            onChangeText={(text) => setText(text)} placeholder={text}
            />
            </View>
        </ScrollView>
    </Modal>
  );

}

