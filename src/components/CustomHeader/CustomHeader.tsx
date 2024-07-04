import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './CustomHeaderStyle';

type CustomHeaderProps = {
  navigation: any;
};

export const CustomHeader: React.FC<CustomHeaderProps> = ({navigation}) => (
  <View style={styles.header}>
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.backButton}>
      <Icon name="arrow-back" size={24} color="#FFFFFF" />
    </TouchableOpacity>
  </View>
);
