import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
} from 'react-native-reanimated';
import styles from './SettingItemStyle';

interface SettingItemProps {
  label: string;
  icon: string;
  children?: React.ReactNode;
}

export const SettingItem: React.FC<SettingItemProps> = ({
  label,
  icon,
  children,
}) => {
  const [expanded, setExpanded] = useState(false);
  const animationController = useSharedValue(0);

  const toggleExpand = () => {
    if (expanded) {
      animationController.value = withTiming(0, {duration: 150});
    } else {
      animationController.value = withTiming(1, {duration: 150});
    }
    setExpanded(!expanded);
  };

  const arrowRotation = useAnimatedStyle(() => {
    const rotate = interpolate(animationController.value, [0, 1], [0, 90]);
    return {
      transform: [{rotate: `${rotate}deg`}],
    };
  });

  const contentHeight = useAnimatedStyle(() => {
    const height = interpolate(animationController.value, [0, 1], [0, 200]);
    return {
      height: withTiming(height),
    };
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleExpand} style={styles.header}>
        <View style={styles.headerContent}>
          <Icon name={icon} size={24} color="#FFFFFF" />
          <Text style={styles.label}>{label}</Text>
        </View>
        <Animated.View style={arrowRotation}>
          <Icon name="keyboard-arrow-right" size={24} color="#FFFFFF" />
        </Animated.View>
      </TouchableOpacity>
      <Animated.View style={[styles.content, contentHeight]}>
        {expanded && (
          <View>
            <View style={styles.bottomLine} />
            {children}
          </View>
        )}
      </Animated.View>
    </View>
  );
};
