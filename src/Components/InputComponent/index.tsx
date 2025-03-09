import React, {ReactNode, useState} from 'react';
import {
  KeyboardTypeOptions,
  TextInput,
  View,
  Text,
  I18nManager,
  SafeAreaView,
  StyleProp,
  TextStyle,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {COLORS} from '../../Utils/Colors';
import {FONT, useFont, useTheme} from '../../Utils/Globals';
import {inputFieldsFonts, styles} from './styles';
import {TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
// import IconI from 'react-native-vector-icons/Ionicons';

export const InputField = ({
  headerString,
  inputValue,
  setInputValue,
  placeholder = '',
  keyboardType,
  isMandatory,
  isNotFilled = false,
  readOnly = false,
  multiline,
  numberOfLines,
  leftLabel,
  rightLabel,
  autoFocus = false,
  onEndEdit,
  errorText,
  onClearValue,
}: {
  headerString: string;
  inputValue: string;
  setInputValue?:
    | React.Dispatch<React.SetStateAction<string>>
    | ((value: string) => void);
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  isMandatory?: boolean;
  isNotFilled?: boolean;
  readOnly?: boolean;
  multiline?: boolean;
  numberOfLines?: number | undefined;
  leftLabel?: string;
  rightLabel?: string;
  autoFocus?: boolean;
  onClearValue?: boolean;
  /**
   * this will execute when focus out from the Input.
   * @returns function
   */
  onEndEdit?: () => void;
  errorText?: string;
}) => {
  const language = !I18nManager.isRTL ? 'EN' : 'AR';
  const {themeColors} = useTheme();
  const {FONT_SIZE} = useFont();
  const isDarkMode = themeColors.isDarkMode;

  return (
    <View style={styles.fieldContainer}>
      <Text
        style={[
          {
            fontSize: FONT_SIZE?.[inputFieldsFonts.inputHeader],
            color: themeColors.textColor,
          },
          styles.fieldHeader,
        ]}>
        {headerString}
        {isMandatory && <Text style={{color: COLORS.Tomato}}>{' *'}</Text>}
      </Text>
      <View
        style={[
          styles.inputFieldContainer,
          {flexDirection: 'row'},
          {borderColor: isNotFilled ? COLORS.Tomato : themeColors.themeColor},
          isDarkMode ? {backgroundColor: themeColors.themeColor} : {},
          multiline ? styles.multiLineInput : {},
        ]}>
        {leftLabel && (
          <View style={[styles.labelContainer]}>
            <Text
              style={[
                styles.leftLabel,
                {
                  fontSize: FONT_SIZE?.[inputFieldsFonts.inputValue],
                },
              ]}>
              {leftLabel || ''}
            </Text>
          </View>
        )}
        <TextInput
          readOnly={readOnly}
          keyboardType={keyboardType}
          value={inputValue}
          multiline={multiline}
          onEndEditing={onEndEdit}
          numberOfLines={numberOfLines}
          autoFocus={autoFocus}
          onChangeText={(text: string) => {
            if (setInputValue) {
              setInputValue(text);
            }
          }}
          placeholderTextColor={COLORS.Silver}
          placeholder={`${placeholder || ''}`}
          style={[
            {
              fontSize: FONT_SIZE?.[inputFieldsFonts.inputValue],
              color: themeColors.textColor,
            },
            {
              textAlign: language == 'AR' ? 'right' : 'left',
              flex: 1,
              fontFamily: FONT.REGULAR,
              textAlignVertical: multiline ? 'top' : 'center',
            },
          ]}
        />

        {rightLabel && (
          <View style={[styles.labelContainer]}>
            <Text
              style={[
                styles.rightLabel,
                {
                  fontSize: FONT_SIZE?.[inputFieldsFonts.inputRightLabel],
                },
              ]}>
              {rightLabel || ''}
            </Text>
          </View>
        )}

        {onClearValue && inputValue?.length >= 1 && (
          <TouchableOpacity
            style={styles.labelContainer}
            onPress={() => {
              setInputValue?.('');
            }}>
            {/* <IconI name="close" size={hp('2.5%')} color={COLORS.AzureBlue} /> */}
            <Text>Close</Text>
          </TouchableOpacity>
        )}
      </View>
      {isNotFilled && errorText ? (
        <Text
          style={{
            color: COLORS.Tomato,
            fontSize: FONT_SIZE?.[inputFieldsFonts.inputRightLabel],
          }}>
          {' '}
          Error: {errorText || ''}
        </Text>
      ) : null}
    </View>
  );
};

export const ReadOnlyField = ({
  headerString,
  value = '',
  numberOfLines,
  valueStyles,
  rightIcon,
  previousValue,
}: {
  headerString: string;
  value: string;
  numberOfLines?: number;
  valueStyles?: StyleProp<TextStyle> | undefined;
  rightIcon?: React.ReactNode;
  previousValue?: string;
}) => {
  const language = !I18nManager.isRTL ? 'EN' : 'AR';
  const [showAllText, setShowAllText] = useState(false);
  const {themeColors} = useTheme();
  const {FONT_SIZE} = useFont();

  return (
    <View style={[styles.container]}>
      <View style={[styles.readOnlyContainer]}>
        <View style={[styles.maxWidth]}>
          <Text
            style={[
              {fontSize: FONT_SIZE?.[inputFieldsFonts.readOnlyHeader]},
              styles.readOnlyChildHeader,
            ]}>
            {headerString}
          </Text>
          <Text
            disabled={value?.length < 100}
            onPress={() => setShowAllText(true)}
            numberOfLines={
              numberOfLines
                ? numberOfLines
                : value?.length > 100
                ? 2
                : undefined
            }
            style={[
              {
                fontSize: FONT_SIZE?.[inputFieldsFonts.readOnlyValue],
                color: themeColors.textColor,
              },
              styles.readOnlyChildText,
              valueStyles ? valueStyles : {},
            ]}>
            {`${value || '-'} ` || '-'} {rightIcon ? rightIcon : null}
          </Text>
          {value?.length > 100 ? (
            <Text
              onPress={() => setShowAllText(true)}
              style={[
                {
                  fontSize: FONT_SIZE?.['F_15'],
                  color: themeColors.isDarkMode
                    ? COLORS.ExtLIGHT_GRAY
                    : COLORS?.SteelGray,
                },
                styles.readOnlyChildText,
                {
                  fontFamily: FONT.MEDIUM,
                  width: '100%',
                  textAlign: 'center',
                  paddingTop: 5,
                },
              ]}>
              {`${'showMore'}`}
            </Text>
          ) : null}
        </View>
      </View>

      {/* Previous Value */}
      <>
        {previousValue && (
          <View
            style={[
              styles.previousTextContainer,
              {
                backgroundColor: themeColors.isDarkMode
                  ? themeColors.backGroundColor
                  : COLORS.SoftYellow,
              },
            ]}>
            <Text
              style={[
                styles.previousText,
                {color: themeColors.isDarkMode ? COLORS.WHITE : COLORS.RedRose},
              ]}>
              {previousValue || ''}
            </Text>
          </View>
        )}
      </>
    </View>
  );
};
