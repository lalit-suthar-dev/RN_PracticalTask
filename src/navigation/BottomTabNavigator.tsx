/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import PoolStackNavigator from './PoolStackNavigator';
import {HomeScreen, ScoreScreen, ChatScreen} from '../screens';
import {TabIcon} from '../components';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 12,
            width: '100%',
          },
        }}
        initialRouteName="Pool">
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <TabIcon name="home-minus-outline" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Score"
          component={ScoreScreen}
          options={{
            tabBarLabel: 'Score',
            tabBarIcon: ({color}) => (
              <TabIcon name="scoreboard-outline" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Pool"
          component={PoolStackNavigator}
          options={{
            tabBarLabel: 'Pool',
            tabBarIcon: ({color}) => (
              <TabIcon name="trophy-outline" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            tabBarLabel: 'Chat',
            tabBarIcon: ({color}) => (
              <TabIcon name="chat-processing-outline" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default BottomTabNavigator;
