/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Alert,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {Button} from '../../components/button';
import {LogoHeader} from '../../components/headers/logo-header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {IMAGES} from '../../constants/images';
import {Img} from '../../assets/svg/img';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {styles} from './styles';

const PROFILE_STORAGE_KEY = 'user_profile';

export const AccountScreen = () => {
  const [name, setName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [localAvatarUri, setLocalAvatarUri] = useState<string | null>(null);

  useEffect(() => {
    const loadProfileData = async () => {
      try {
        const savedProfile = await AsyncStorage.getItem(PROFILE_STORAGE_KEY);
        if (savedProfile) {
          const profile = JSON.parse(savedProfile);
          setName(profile.name || '');
          setLastName(profile.lastName || '');
          setNickname(profile.nickname || '');
          setLocalAvatarUri(profile.avatarUri || null);
        }
      } catch (error) {
        console.error('Failed to load profile data from storage', error);
      }
    };
    loadProfileData();
  }, []);

  const selectImage = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (response.assets && response.assets.length > 0) {
        const newUri: string | null = response.assets[0].uri ?? null;
        setLocalAvatarUri(newUri);
      } else if (response.didCancel) {
        Alert.alert('Cancelled image selection');
      } else {
        Alert.alert('Error', 'Something went wrong');
      }
    });
  };

  const handleSave = async () => {
    if (name.trim() || lastName.trim() || nickname.trim() || localAvatarUri) {
      try {
        const profile = {
          name: name.trim(),
          lastName: lastName.trim(),
          nickname: nickname.trim(),
          avatarUri: localAvatarUri,
        };
        await AsyncStorage.setItem(
          PROFILE_STORAGE_KEY,
          JSON.stringify(profile),
        );
        Alert.alert('Profile Updated');
      } catch (error) {
        Alert.alert('Error', 'Failed to save profile data');
        console.error('Failed to save profile data to storage', error);
      }
    } else {
      Alert.alert('Error', 'Please enter valid data');
    }
  };

  const isAllFieldsEmpty =
    !name.trim() && !lastName.trim() && !nickname.trim() && !localAvatarUri;

  const buttonTitle = isAllFieldsEmpty ? 'Save' : 'Change data';

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        <LogoHeader />
        <View style={styles.header}>
          <Text style={styles.title}>My account</Text>
          <Image
            source={localAvatarUri ? {uri: localAvatarUri} : IMAGES.avatar}
            style={styles.avatar}
            resizeMode="cover"
          />
          <TouchableOpacity
            onPress={selectImage}
            style={{position: 'absolute', top: 150, right: 100}}>
            <Img />
          </TouchableOpacity>
        </View>
        <View style={{gap: 24}}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Your name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your name"
              value={name}
              onChangeText={setName}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Your last name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your last name"
              value={lastName}
              onChangeText={setLastName}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>It's your nickname</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your nickname"
              value={nickname}
              onChangeText={setNickname}
            />
          </View>
        </View>
        <Button title={buttonTitle} onPress={handleSave} />
      </ScrollView>
    </SafeAreaView>
  );
};
