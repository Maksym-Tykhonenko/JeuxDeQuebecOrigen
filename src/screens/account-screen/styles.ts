import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import {FONTS} from '../../constants/fonts';

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
  header: {
    alignItems: 'center',
    gap: 24,
    marginVertical: 20,
  },
  title: {
    fontSize: 28,
    fontFamily: FONTS.PoppinsMedium,
  },
  avatar: {
    borderRadius: 60,
    width: 120,
    height: 120,
  },
  inputContainer: {
    gap: 10,
  },
  label: {
    fontSize: 12,
  },
  input: {
    height: 41,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: COLORS.grey,
    paddingHorizontal: 20,
  },
});
