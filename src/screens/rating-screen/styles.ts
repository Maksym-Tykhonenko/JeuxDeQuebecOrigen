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
  renderItem: {
    backgroundColor: COLORS.tabBarBackground,
    borderRadius: 16,
    padding: 12,
  },
  title: {
    fontSize: 28,
    fontFamily: FONTS.PoppinsMedium,
    alignSelf: 'center',
    marginVertical: 20,
  },
  flatListContainer: {
    gap: 20,
  },
  image: {
    width: 80,
    height: 80,
  },
  name: {
    fontSize: 20,
    fontFamily: FONTS.Lobster,
  },
  nickname: {
    fontSize: 12,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  coins: {
    fontSize: 12,
  },
  borderContainer: {
    borderWidth: 1,
    borderColor: COLORS.grey,
    borderRadius: 24,
    paddingHorizontal: 12,
    paddingVertical: 6,
    alignSelf: 'flex-start',
  },
});
