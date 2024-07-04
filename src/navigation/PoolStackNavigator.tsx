/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GridScreen, SetupPoolScreen} from '../screens';
import {CustomHeader} from '../components';

const PoolStack = createNativeStackNavigator();

export default function PoolStackNavigator() {
  return (
    <PoolStack.Navigator>
      <PoolStack.Screen
        name="SetupPool"
        component={SetupPoolScreen}
        options={({navigation}) => ({
          // headerLeft: () => <CustomHeader navigation={navigation} />,
          headerTitle: 'Setup Your Pool',
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: '#1E1E1E'},
          headerTitleStyle: styles.headerTitle,
        })}
      />
      <PoolStack.Screen
        name="Grid"
        component={GridScreen}
        options={({navigation}) => ({
          headerLeft: () => <CustomHeader navigation={navigation} />,
          headerTitle: 'March Madness Square',
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: '#1E1E1E'},
          headerTitleStyle: styles.headerTitle,
        })}
      />
    </PoolStack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
