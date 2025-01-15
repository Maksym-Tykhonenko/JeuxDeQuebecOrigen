import {Text, View} from 'react-native';
import React from 'react';
import {Coin} from '../../assets/svg/coin';
import {styles} from './styles';

export const CoinImg = () => {
  return (
    <View style={styles.container}>
      <Coin width={60} height={60} />
      <Text style={styles.text}>+100</Text>
    </View>
  );
};
