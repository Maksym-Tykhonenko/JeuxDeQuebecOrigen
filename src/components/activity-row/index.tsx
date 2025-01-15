import {Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';

type ActivityRowProps = {
  text: string;
  icon: any;
};

export const ActivityRow = ({text, icon}: ActivityRowProps) => {
  return (
    <View style={styles.container}>
      {icon}
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};
