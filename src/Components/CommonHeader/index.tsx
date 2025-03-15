import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React from 'react';
import {COLORS} from '../../Utils/Colors';
import {useNavigation} from '@react-navigation/native';

const CommonHeader = ({
  title,
  disableBack,
  rightTitle,
  onRightPress,
}: {
  title: string;
  disableBack?: boolean;
  rightTitle?: string;
  onRightPress?: () => void;
}) => {
  const navigation = useNavigation();
  return (
    <View>
      <StatusBar backgroundColor={COLORS.VividSkyBlue} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: hp('1%'),
          paddingVertical: hp('0.5%'),
          marginBottom: hp('1%'),
          backgroundColor: COLORS.VividSkyBlue,
        }}>
        <>
          {disableBack ? (
            <View />
          ) : (
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Text>Back</Text>
            </TouchableOpacity>
          )}
        </>

        <Text>{title ? title : ''}</Text>

        <TouchableOpacity onPress={onRightPress}>
          <Text> {rightTitle ? rightTitle : ''}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CommonHeader;

const styles = StyleSheet.create({});
