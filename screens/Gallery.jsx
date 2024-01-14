import React, {useState, useEffect} from 'react';
import { Text, View, Button, Image, TouchableWithoutFeedback } from 'react-native';
import Navigation from '../components/navigation';
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons } from '@expo/vector-icons';
import * as db from 'expo-secure-store';
import ImagePopup from '../components/imagePopup';
export default function GalleryScreen({navigation}) {
  const [images, setImages] = useState([]);
  const [remounter, force] = useState(true);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      let arr = images;
      arr.push(result.assets[0].uri);
      setImages(arr);
      db.setItemAsync("images", JSON.stringify(arr));
      force(!remounter);
    }
  }
  useEffect(() => {
    async function a() {
      const get = await db.getItemAsync("images");
      if (get) setImages(JSON.parse(get));
    }
    a();
  }, [])
  const [modalVisible, setModalVisible] = useState(false);
  const [activeImage, setActive] = useState();
  const handleClick = (image) => {
    setActive(image);
    setModalVisible(true);
  }
  return (
      <View key={remounter.toString()} className="w-screen h-screen items-center justify-between bg-stone-900">
        <View className="mt-[90px]">
         <TouchableWithoutFeedback onPress={pickImage}>
                <View className='flex-row self-center items-center bg-amber-400 justify-center p-3 rounded-xl'>
                <MaterialIcons name="add-to-photos" size={20} color="white" />
                <Text className='text-white text-md font-bold'>  Add an image</Text>
                </View>
            </TouchableWithoutFeedback>
            <View className='flex-row flex-wrap pt-5'>
            <>{images.map((image, index) => {
              return <TouchableWithoutFeedback onPress={()=>handleClick(image)}><Image key={image} source={{ uri: image }} style={{ width: 196, height: 196 }} /></TouchableWithoutFeedback>
            })}</>
            </View>
        </View>
        <Navigation active="Gallery"></Navigation>
        <ImagePopup visible={modalVisible} setModalVisible={setModalVisible} image={activeImage}></ImagePopup>
      </View>
  );
}

