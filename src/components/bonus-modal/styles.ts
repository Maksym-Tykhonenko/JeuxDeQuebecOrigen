import {StyleSheet} from 'react-native';
import {FONTS} from '../../constants/fonts';

export const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContent: {
    width: 312,
    height: 295,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 30,
  },
  title: {
    textAlign: 'center',
    fontSize: 32,
    fontFamily: FONTS.Lobster,
    color: 'white',
  },
  button: {
    width: 140,
  },
  image: {
    width: 100,
    height: 100,
  },
});
