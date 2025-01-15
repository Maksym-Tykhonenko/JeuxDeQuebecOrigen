import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../../constants/colors';
import {styles} from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ToggleOption = () => {
  const [selected, setSelected] = useState(false);

  const TOGGLE_STORAGE_KEY = 'toggleOptionSelected';

  useEffect(() => {
    const loadToggleState = async () => {
      try {
        const storedState = await AsyncStorage.getItem(TOGGLE_STORAGE_KEY);
        if (storedState !== null) {
          setSelected(JSON.parse(storedState));
        }
      } catch (error) {
        console.error('Failed to load toggle state:', error);
      }
    };

    loadToggleState();
  }, []);

  const toggleSelection = async () => {
    try {
      const newState = !selected;
      setSelected(newState);
      await AsyncStorage.setItem(TOGGLE_STORAGE_KEY, JSON.stringify(newState));
    } catch (error) {
      console.error('Failed to save toggle state:', error);
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={toggleSelection}>
      {selected ? (
        <LinearGradient
          colors={[COLORS.gradientStart, COLORS.gradientEnd]}
          style={styles.circle}
        />
      ) : (
        <View style={[styles.circle]} />
      )}
      <Text style={styles.text}>I was here</Text>
    </TouchableOpacity>
  );
};
