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
    gap: 24,
    paddingBottom: 20,
  },
  image: {
    width: '100%',
    height: 285,
  },
  text: {
    paddingHorizontal: 27,
    textAlign: 'center',
  },
});
