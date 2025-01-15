/* eslint-disable react-native/no-inline-styles */
import {FlatList, Image, ScrollView, TouchableOpacity} from 'react-native';
import React, {useCallback, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {LogoHeader} from '../../components/headers/logo-header';
import {SecondaryHeader} from '../../components/headers/secondary-header';
import {useAppNavigation} from '../../hooks/useAppNavigation';
import {FRUITS} from '../../constants/images';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import {styles} from './styles';
import {fruits} from '../../data/fruits';

export const AlbumScreen = () => {
  const {goBack} = useAppNavigation();
  const [unlockedFruits, setUnlockedFruits] = useState<string[]>([]);

  useFocusEffect(
    useCallback(() => {
      const fetchUnlockedFruits = async () => {
        const unlockedString = await AsyncStorage.getItem('unlockedFruits');
        const unlocked = unlockedString ? JSON.parse(unlockedString) : [];
        setUnlockedFruits(unlocked);
      };
      fetchUnlockedFruits();
    }, []),
  );

  const renderItem = ({item}: {item: {key: string; name: string}}) => {
    const isUnlocked = unlockedFruits.includes(item.key);
    return (
      <TouchableOpacity disabled={!isUnlocked}>
        <Image
          source={isUnlocked ? FRUITS[`${item.key}_active`] : FRUITS[item.key]}
          style={styles.image}
        />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        <LogoHeader />
        <SecondaryHeader onPress={goBack} title="Your Album" />
        <FlatList
          data={fruits}
          renderItem={renderItem}
          numColumns={3}
          keyExtractor={item => item.key}
          columnWrapperStyle={styles.grid}
          contentContainerStyle={{gap: 15}}
          scrollEnabled={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
