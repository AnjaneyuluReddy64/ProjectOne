import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {FONT} from '../../Utils/Globals';
import {COLORS} from '../../Utils/Colors';

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingRight: wp('3%'),
  },
  maxWidth: {
    width: '100%',
  },
  fieldContainer: {
    marginVertical: hp('0.5%'),
  },
  fieldHeader: {
    fontFamily: FONT.REGULAR,
    textAlign: 'left',
  },
  inputFieldContainer: {
    width: '100%',
    height: hp('5.5%'),
    borderRadius: hp('1%'),
    marginVertical: hp('1%'),
    borderWidth: wp('0.3%'),
    justifyContent: 'center',
    paddingHorizontal: hp('1%'),
    paddingVertical: hp('0.5%'),
  },
  multiLineInput: {
    height: hp('16%'),
    justifyContent: 'flex-start',
  },
  labelContainer: {
    height: '100%',
    justifyContent: 'center',
  },
  rightLabel: {
    verticalAlign: 'middle',
    color: COLORS.GRAY,
    textAlign: 'right',
    paddingRight: 8,
  },
  leftLabel: {
    verticalAlign: 'middle',
    color: COLORS.GRAY,
    textAlign: 'left',
    paddingRight: 8,
  },
  readOnlyContainer: {
    flexDirection: 'row',
    marginBottom: hp('1%'),
  },
  readOnlyChildHeader: {
    color: COLORS.DarkGray,
    fontFamily: FONT.MEDIUM,
    marginVertical: hp('0.5%'),
    textAlign: 'left',
  },
  readOnlyChildText: {
    fontFamily: FONT.MEDIUM,
    textAlign: 'left',
  },
  previousTextContainer: {
    borderRadius: hp('0.5%'),
  },
  previousText: {
    fontFamily: FONT.REGULAR,
    paddingVertical: hp('0.5%'),
    paddingHorizontal: hp('1%'),
    textAlign: 'left',
  },

  //CheckBox
  checkboxContainer: {
    flexDirection: 'row',
    marginRight: hp('3%'),
    paddingVertical: hp('1%'),
  },
  checkBoxLabel: {
    marginLeft: hp('1%'),
    textAlign: 'justify',
    paddingTop: hp('0.4%'),
  },
  location: {
    width: '100%',
    // height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateInputContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },

  //Multople select
  checkboxMultibleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: hp('2%'),
  },
  checkboxMultibleFieldsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
    marginVertical: 5,
    width: '100%',
  },
  checkboxMultibleTextContainer: {
    width: hp('2.5%'),
    height: hp('2.5%'),
    borderRadius: hp('2%'),
    marginRight: hp('1%'),
    backgroundColor: COLORS.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notEligibleContainer: {
    width: '100%',
    minHeight: 200,
    borderRadius: 15,
    padding: hp('2%'),
  },
  notEligibleHeaderContainer: {
    width: '100%',
    marginTop: hp('1%'),
  },
  notEligibleHeaderText: {
    fontFamily: FONT.REGULAR,
    marginTop: hp('1%'),
  },
  notEligibleOkBtn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: hp('5%'),
  },
  notEligibleBtnText: {
    fontFamily: FONT.SEMI_BOLD,
    color: 'white',
  },
});

export const inputFieldsFonts = {
  readOnlyHeader: 'F_16',
  readOnlyValue: 'F_16',
  inputHeader: 'F_16',
  inputLeftLabel: 'F_13',
  inputRightLabel: 'F_13',
  inputValue: 'F_16',
  checkbox: 'F_16',
};
