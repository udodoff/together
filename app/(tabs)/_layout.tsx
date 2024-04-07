import React from 'react';
import { Tabs } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Rooms',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="play-box-multiple-outline"
              size={28}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="friends"
        options={{
          title: 'Friends',
          tabBarIcon: ({ color }) => (
            <AntDesign name="team" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
