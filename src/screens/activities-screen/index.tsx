/* eslint-disable react-native/no-inline-styles */
import {Image, ScrollView, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {PrimaryHeader} from '../../components/headers/primary-header';
import {Time} from '../../assets/svg/time';
import {ActivityRow} from '../../components/activity-row';
import {Star} from '../../assets/svg/star';
import {People} from '../../assets/svg/people';
import {useAppNavigation} from '../../hooks/useAppNavigation';
import {Screens} from '../../navigation/screens';
import {useAppRoute} from '../../hooks/useAppRoute';
import {Button} from '../../components/button';
import {styles} from './styles';

export const ActivitiesScreen = () => {
  const {navigate, goBack} = useAppNavigation();
  const {params} = useAppRoute<Screens.Activities>();

  const {title, image, description, card1, card2, card3, button} = params.data;

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        <PrimaryHeader title={title} onPress={goBack} />
        <Image source={image} style={styles.image} />
        <Text>{description}</Text>
        <View style={{gap: 12}}>
          {card1 && <ActivityRow icon={<Time />} text={card1} />}
          {card2 && <ActivityRow icon={<Star />} text={card2} />}
          {card3 && <ActivityRow icon={<People />} text={card3} />}
        </View>
        {button && (
          <Button
            title="See events"
            onPress={() => navigate(Screens.ActivitiesStack)}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
