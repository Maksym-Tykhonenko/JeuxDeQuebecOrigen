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
  flatListContainer: {
    gap: 20,
  },
  card: {
    width: 160,
    height: 209,
    borderRadius: 15,
    overflow: 'hidden',
    position: 'relative',
  },
  cardImage: {
    width: '100%',
    height: '100%',
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
});
