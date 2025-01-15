import {Text, View} from 'react-native';
import React from 'react';
import {ArrowLeft} from '../../../assets/svg/arrow-left';
import {styles} from './styles';

type SecondaryHeaderProps = {
  title: string;
  onPress: () => void;
};

export const SecondaryHeader = ({title, onPress}: SecondaryHeaderProps) => {
  return (
    <View style={styles.rowContainer}>
      <ArrowLeft style={styles.backButton} onPress={onPress} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
