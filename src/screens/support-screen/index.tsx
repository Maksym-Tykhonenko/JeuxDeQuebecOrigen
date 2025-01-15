import {Image, ScrollView, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {LogoHeader} from '../../components/headers/logo-header';
import {IMAGES} from '../../constants/images';
import {Button} from '../../components/button';
import {SecondaryHeader} from '../../components/headers/secondary-header';
import {styles} from './styles';
import {useAppNavigation} from '../../hooks/useAppNavigation';

export const SupportScreen = () => {
  const {goBack} = useAppNavigation();

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        <LogoHeader />
        <SecondaryHeader onPress={goBack} title="Support" />
        <Image source={IMAGES.support} style={styles.image} />
        <Text style={styles.text}>
          Do you have any questions? Click the button below to contact technical
          support via email
        </Text>
        <Button onPress={() => null} title="Support" />
      </ScrollView>
    </SafeAreaView>
  );
};
