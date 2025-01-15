/* eslint-disable react-native/no-inline-styles */
import {Text, View} from 'react-native';
import React from 'react';
import {ArrowLeft} from '../../../assets/svg/arrow-left';
import {styles} from './styles';
import {Coin} from '../../../assets/svg/coin';
import {useBonusStore} from '../../../store/useBonusStore';

type PrimaryHeaderProps = {
  title: string;
  onPress: () => void;
};

export const PrimaryHeader = ({title, onPress}: PrimaryHeaderProps) => {
  const {bonusCount} = useBonusStore();

  return (
    <View style={styles.rowContainer}>
      <View style={styles.backButton}>
        <ArrowLeft onPress={onPress} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={[styles.borderContainer, styles.rowContainer, {gap: 4}]}>
        <Text style={styles.coins}>{bonusCount}</Text>
        <Coin />
      </View>
    </View>
  );
};
