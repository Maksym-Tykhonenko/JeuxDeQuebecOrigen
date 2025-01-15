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
  input: {
    borderWidth: 1,
    borderColor: COLORS.grey,
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 24,
    fontSize: 14,
  },
  label: {
    color: COLORS.grey,
  },
  rowInputs: {
    flexDirection: 'row',
    gap: 21,
  },
  peopleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  peopleButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: COLORS.grey,
    borderRadius: 10,
  },
  selectedButton: {
    borderColor: COLORS.gradientStart,
  },
  peopleButtonText: {
    fontSize: 14,
    color: COLORS.grey,
  },
  selectedButtonText: {
    color: COLORS.black,
  },
  uploadButtonText: {
    fontSize: 14,
  },
  uploadedImage: {
    width: 37,
    height: 37,
    borderRadius: 18,
  },
});
