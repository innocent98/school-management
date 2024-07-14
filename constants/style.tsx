import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, SIZES, SHADOWS, FONTS} from './theme';

const itemWidth = Dimensions.get('window').width;
const itemHeight = Dimensions.get('window').height;

export const style = StyleSheet.create({
  safeArea: {flex: 1},

  container: {
    padding: itemWidth * 0.035,
  },

  column: {alignItems: 'center', gap: SIZES.large, flexDirection: 'column'},

  card: {
    width: '100%',
    backgroundColor: COLORS.light.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.font,
    padding: SIZES.l,
    gap: SIZES.font,
    ...SHADOWS.dark,
  },

  outlineCard: {
    width: '100%',
    borderRadius: SIZES.base,
    padding: SIZES.small,
    borderWidth: 1,
    borderColor: COLORS.light.gray,
    gap: SIZES.base,
  },

  bgImg: {height: '100%'},

  input: {width: itemWidth * 0.9, borderRadius: 20},

  button: {
    height: itemHeight * 0.06,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },

  smallText: {
    color: COLORS.light.white,
    fontFamily: FONTS.regular,
    fontSize: SIZES.font,
  },

  mediumText: {
    color: COLORS.light.white,
    fontFamily: FONTS.bold,
    fontSize: SIZES.medium,
  },

  bigText: {
    color: COLORS.light.white,
    fontFamily: FONTS.bold,
    fontSize: SIZES.extraLarge,
  },

  logoBanner: {height: itemHeight * 0.1, width: '100%'},

  rowSpace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  drawer: {
    height: itemHeight,
    backgroundColor: COLORS.light.white,
    width: itemWidth * 0.7,
    position: 'absolute',
    top: 0,
    zIndex: 9,
    ...SHADOWS.dark,
  },

  row: {flexDirection: 'row', alignItems: 'center', gap: SIZES.large},

  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SIZES.large,
    backgroundColor: COLORS.light.soft,
    width: '100%',
    padding: SIZES.medium,
  },

  table: {
    flexDirection: 'column',
  },

  tableHead: {
    flexDirection: 'row',
    backgroundColor: COLORS.light.tableHead,
  },

  tableBody: {
    flexDirection: 'row',
  },

  tableItem: {
    color: COLORS.light.black,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: FONTS.regular,
    padding: SIZES.small,
    borderWidth: 1,
    borderColor: COLORS.light.tableBorder,
    width: itemWidth * 0.3,
    fontSize: SIZES.font,
  },

  closeIcon: {
    backgroundColor: COLORS.light.white,
    borderRadius: SIZES.extraLarge,
    ...SHADOWS.dark,
    padding: 8,
    marginBottom: 15,
    marginTop: -35,
  },

  dropdown: {borderColor: COLORS.light.lightgray, color: COLORS.light.black},
  displayPic: {
    width: itemWidth * 0.25,
    height: itemWidth * 0.25,
    borderRadius: 100
  },
});
