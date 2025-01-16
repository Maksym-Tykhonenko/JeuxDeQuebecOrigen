/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {PrimaryHeader} from '../../components/headers/primary-header';
import {useAppNavigation} from '../../hooks/useAppNavigation';
import {Button} from '../../components/button';
import {IMAGES} from '../../constants/images';
import {FONTS} from '../../constants/fonts';
import {styles} from './styles';
import {XClose} from '../../assets/svg/x-close';
import {Img} from '../../assets/svg/img';
import {Screens} from '../../navigation/screens';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';

export type Folder = {
  id: string;
  title: string;
  photos: string[];
};

export const GalleryScreen = () => {
  const [folders, setFolders] = useState<Folder[]>([]);
  const [newFolderName, setNewFolderName] = useState('');
  const {goBack, navigate} = useAppNavigation();

  const STORAGE_KEY = '@folders';

  useFocusEffect(
    useCallback(() => {
      const loadFolders = async () => {
        try {
          const storedFolders = await AsyncStorage.getItem(STORAGE_KEY);
          if (storedFolders) {
            setFolders(JSON.parse(storedFolders));
          }
        } catch (error) {
          console.error('Failed to load folders', error);
        }
      };

      loadFolders();
    }, []),
  );

  const saveFolders = async (folder: Folder[]) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(folder));
    } catch (error) {
      console.error('Failed to save folders', error);
    }
  };

  const createFolder = () => {
    if (!newFolderName.trim()) {
      return;
    }
    const newFolders = [
      ...folders,
      {id: Date.now().toString(), title: newFolderName, photos: []},
    ];
    setFolders(newFolders);
    saveFolders(newFolders);
    setNewFolderName('');
  };

  const handleDeleteFolder = (id: string) => {
    const updatedFolders = folders.filter(folder => folder.id !== id);
    setFolders(updatedFolders);
    saveFolders(updatedFolders);
  };

  const renderItem = ({item}: {item: Folder}) => {
    const backgroundSource =
      item.photos.length > 0 ? {uri: item.photos[0]} : IMAGES.placeholder;

    return (
      <TouchableOpacity
        onPress={() => navigate(Screens.ImageFolder, {folder: item})}>
        <ImageBackground style={styles.folder} source={backgroundSource}>
          <View style={styles.textContainer}>
            <Text style={styles.cardText}>{item.title}</Text>
          </View>
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => handleDeleteFolder(item.id)}>
            <XClose width={40} height={40} />
          </TouchableOpacity>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  const renderEmptyComponent = () => (
    <View style={styles.emptyList}>
      <Img height={50} width={50} />
      <Text style={{fontSize: 20, fontFamily: FONTS.PoppinsMedium}}>
        No folders yet.
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <PrimaryHeader title="Event Gallery" onPress={goBack} />
      <FlatList
        data={folders}
        keyExtractor={item => item.id}
        numColumns={2}
        style={{flexGrow: 1}}
        contentContainerStyle={{gap: 20}}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        renderItem={renderItem}
        ListEmptyComponent={renderEmptyComponent}
        showsVerticalScrollIndicator={false}
      />
      <View style={{gap: 24}}>
        <TextInput
          style={styles.input}
          placeholder="Enter Folder Name"
          value={newFolderName}
          onChangeText={setNewFolderName}
        />
        <Button title="Create Folder" onPress={createFolder} />
      </View>
    </SafeAreaView>
  );
};
