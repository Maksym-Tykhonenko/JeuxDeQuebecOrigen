import React from 'react';
import {Modal, View, Text, ImageBackground, Image} from 'react-native';
import {styles} from './styles';
import {IMAGES} from '../../constants/images';
import {Button} from '../button';

export const BonusModal = ({
  visible,
  onClose,
  source,
  isCoin = false,
}: {
  visible: boolean;
  onClose: () => void;
  source: any;
  isCoin?: boolean;
}) => {
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <ImageBackground
          source={IMAGES.modal}
          resizeMode="contain"
          style={styles.modalContent}>
          <Text style={styles.title}>Bonuses</Text>
          {isCoin ? source : <Image source={source} style={styles.image} />}
          <View style={styles.button}>
            <Button onPress={onClose} title="Continue" border={true} />
          </View>
        </ImageBackground>
      </View>
    </Modal>
  );
};
