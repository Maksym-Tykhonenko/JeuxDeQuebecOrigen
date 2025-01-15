import {StyleSheet} from 'react-native';
import {FONTS} from '../../../constants/fonts';

export const styles = StyleSheet.create({
  rowContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    left: 0,
  },
  title: {
    fontSize: 28,
    fontFamily: FONTS.PoppinsMedium,
  },
});
