import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import {FONTS} from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.purple,
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: COLORS.grey,
    gap: 12,
  },
  text: {
    fontSize: 12,
    fontFamily: FONTS.Lato,
    flexShrink: 1,
  },
});
