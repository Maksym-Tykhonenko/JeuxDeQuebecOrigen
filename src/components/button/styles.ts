import {StyleSheet} from 'react-native';
import {FONTS} from '../../constants/fonts';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    height: 50,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: FONTS.Lobster,
    fontSize: 18,
    color: COLORS.white,
    paddingHorizontal: 24,
  },
  border: {
    borderColor: COLORS.white,
    borderWidth: 2,
  },
});
