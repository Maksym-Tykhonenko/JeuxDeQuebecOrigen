import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
  },
  label: {
    color: COLORS.grey,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.grey,
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  placeholderText: {
    fontSize: 14,
  },
});
