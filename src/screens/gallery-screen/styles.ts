import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import {FONTS} from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
    paddingHorizontal: 24,
    marginTop: 30,
    paddingBottom: 20,
    gap: 24,
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
  folder: {
    height: 160,
    width: 160,
    overflow: 'hidden',
    borderRadius: 15,
  },
  textContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 38,
    backgroundColor: COLORS.black74,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    color: COLORS.white,
    fontFamily: FONTS.Lobster,
  },
  deleteButton: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  emptyList: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 130,
    gap: 30,
  },
});
