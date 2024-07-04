import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface TabIconProps {
  name: string;
  color: string;
  size?: number;
}

export const TabIcon: React.FC<TabIconProps> = ({name, color, size = 26}) => {
  return <Icon name={name} color={color} size={size} />;
};
