import {StyleSheet} from 'react-native';
import {FONTS} from '../../../constants/fonts';
import {COLORS} from '../../../constants/colors';

export const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontFamily: FONTS.Orbitron,
  },
  coins: {
    fontSize: 20,
    fontFamily: FONTS.Lobster,
  },
  borderContainer: {
    borderWidth: 1,
    borderColor: COLORS.grey,
    borderRadius: 24,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
});
