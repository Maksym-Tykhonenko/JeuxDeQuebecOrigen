import {StyleSheet} from 'react-native';
import {FONTS} from '../../../constants/fonts';
import {COLORS} from '../../../constants/colors';

export const styles = StyleSheet.create({
  rowContainer: {
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24,
  },
  title: {
    fontSize: 19,
    fontFamily: FONTS.PoppinsRegular,
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
