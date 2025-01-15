import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 24,
  },
  content: {
    marginTop: 30,
    paddingBottom: 20,
    gap: 24,
  },
  image: {
    width: '100%',
    height: 225,
    borderRadius: 25,
  },
});
