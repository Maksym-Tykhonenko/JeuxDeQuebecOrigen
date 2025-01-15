/* eslint-disable react-native/no-inline-styles */
import {Text, View} from 'react-native';
import React from 'react';
import {Logo} from '../../../assets/svg/logo';
import {Coin} from '../../../assets/svg/coin';
import {styles} from './styles';
import {useBonusStore} from '../../../store/useBonusStore';

export const LogoHeader = () => {
  const {bonusCount} = useBonusStore();

  return (
    <View style={styles.rowContainer}>
      <View style={[styles.rowContainer, {gap: 8}]}>
        <Logo />
        <Text style={styles.title}>Jeux de Quebec</Text>
      </View>
      <View style={[styles.borderContainer, styles.rowContainer, {gap: 4}]}>
        <Text style={styles.coins}>{bonusCount}</Text>
        <Coin />
      </View>
    </View>
  );
};
