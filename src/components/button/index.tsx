import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/colors';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';

type ButtonProps = {
  title: string;
  onPress: () => void;
  border?: boolean;
};

export const Button = ({title, onPress, border = false}: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={[COLORS.gradientStart, COLORS.gradientEnd]}
        style={[styles.container, border && styles.border]}>
        <Text style={styles.title}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
