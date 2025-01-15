import {StyleSheet} from 'react-native';
import {FONTS} from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
    backgroundColor: '#6088FF',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontFamily: FONTS.Lobster,
    position: 'absolute',
    bottom: 15,
    right: 10,
  },
});
