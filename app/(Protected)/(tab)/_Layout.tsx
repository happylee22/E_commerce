import { AntDesign } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

import { colors } from '@/Constant';
import TabsIcon from '@/components/Ui/TabsIcon';
import { StatusBar } from 'react-native';
import CatIcon from '@/components/Ui/CatIcon';

export default function TabsLayout() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Tabs
        screenOptions={{
          tabBarInactiveTintColor: colors.dark,
          tabBarActiveTintColor: colors.yellow,
          headerTintColor: colors.dark,
          headerStyle: { backgroundColor: colors.dark },
          headerRight: () => <CatIcon />,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: '',
            tabBarLabel: 'Home',
            tabBarIcon: ({ focused, size }) => (
              <TabsIcon focused={focused} name="home" size={size} />
            ),
          }}
        />

        <Tabs.Screen
          name="menu"
          options={{
            title: '',
            tabBarLabel: 'Menu',
            tabBarIcon: ({ focused, size }) => (
              <TabsIcon focused={focused} name="bars" size={size} />
            ),
          }}
        />

        <Tabs.Screen
          name="more"
          options={{
            title: '',
            tabBarLabel: 'More',
            tabBarIcon: ({ focused, size }) => (
              <TabsIcon focused={focused} name="amazon" size={size} />
            ),
          }}
        />

        <Tabs.Screen
          name="account"
          options={{
            title: '',
            tabBarLabel: 'Account',
            tabBarIcon: ({ focused, size }) => (
              <TabsIcon focused={focused} name="user" size={size} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
