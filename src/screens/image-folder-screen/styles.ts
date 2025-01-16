import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 24,
    marginTop: 30,
    paddingBottom: 20,
    gap: 24,
  },
  grid: {
    justifyContent: 'space-between',
  },
  photoContainer: {
    position: 'relative',
    borderRadius: 8,
    overflow: 'hidden',
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  deleteButton: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
});
