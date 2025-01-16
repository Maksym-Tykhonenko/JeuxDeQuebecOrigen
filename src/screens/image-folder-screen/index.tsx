/* eslint-disable react-native/no-inline-styles */
import {FlatList, Image, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {LogoHeader} from '../../components/headers/logo-header';
import {SecondaryHeader} from '../../components/headers/secondary-header';
import {useAppNavigation} from '../../hooks/useAppNavigation';
import {styles} from './styles';
import {useAppRoute} from '../../hooks/useAppRoute';
import {Screens} from '../../navigation/screens';
import {Button} from '../../components/button';
import {launchImageLibrary} from 'react-native-image-picker';
import {XClose} from '../../assets/svg/x-close';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {IMAGES} from '../../constants/images';

export const ImageFolderScreen = () => {
  const {goBack} = useAppNavigation();
  const {params} = useAppRoute<Screens.ImageFolder>();
  const {id, title, photos: initialPhotos} = params.folder;
  const [photos, setPhotos] = useState<string[]>(initialPhotos);

  const STORAGE_KEY = '@folders';

  const saveFolder = async (updatedPhotos: string[]) => {
    try {
      const storedFolders = await AsyncStorage.getItem(STORAGE_KEY);
      if (storedFolders) {
        const folders = JSON.parse(storedFolders);
        const updatedFolders = folders.map((folder: any) =>
          folder.id === id ? {...folder, photos: updatedPhotos} : folder,
        );
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedFolders));
      }
    } catch (error) {
      console.error('Failed to save folder', error);
    }
  };

  const handleAddPhoto = async () => {
    try {
      const result = await launchImageLibrary({mediaType: 'photo'});
      if (result.assets) {
        const newPhotos = result.assets.map(asset => asset.uri || '');
        const updatedPhotos = [...photos, ...newPhotos];
        setPhotos(updatedPhotos);
        saveFolder(updatedPhotos);
      }
    } catch (error) {
      console.error('Failed to add photos', error);
    }
  };

  const handleRemovePhoto = (photoUri: string) => {
    const updatedPhotos = photos.filter(uri => uri !== photoUri);
    setPhotos(updatedPhotos);
    saveFolder(updatedPhotos);
  };
  const renderItem = ({item}: {item: string}) => (
    <View style={styles.photoContainer}>
      <Image source={{uri: item}} style={styles.photo} />
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => handleRemovePhoto(item)}>
        <XClose />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <LogoHeader />
      <SecondaryHeader onPress={goBack} title={title} />
      <FlatList
        data={photos}
        keyExtractor={(item, index) => `${item}-${index}`}
        numColumns={3}
        renderItem={renderItem}
        columnWrapperStyle={{gap: 10}}
        contentContainerStyle={{gap: 10}}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Image source={IMAGES.placeholder} style={{alignSelf: 'center'}} />
        }
      />
      <Button title="Add photo" onPress={handleAddPhoto} />
    </SafeAreaView>
  );
};
