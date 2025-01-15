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
  title: {
    fontSize: 24,
    fontFamily: FONTS.PoppinsMedium,
  },
  image: {
    width: '100%',
    height: 201,
    borderRadius: 25,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {fontWeight: '600'},
  map: {
    width: 330,
    height: 300,
    borderRadius: 25,
    alignSelf: 'center',
    marginVertical: 10,
  },
});
