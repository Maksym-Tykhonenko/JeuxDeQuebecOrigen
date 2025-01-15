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
    gap: 24,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    height: 180,
    resizeMode: 'contain',
  },
  borderContainer: {
    borderWidth: 1,
    borderColor: COLORS.grey,
    borderRadius: 24,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  flatListContainer: {
    gap: 12,
  },
  card: {
    width: 165.5,
    height: 120,
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
