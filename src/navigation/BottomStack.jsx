import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import DashboardPage from 'pages/Dashboard'
import MessagePage from 'pages/Message'
import NotificationPage from 'pages/Notification'
import SettingPage from 'pages/Setting'
import React from 'react'
import { Router } from 'utils'

const Tab = createBottomTabNavigator()

const BottomStack = () => {
  return (
    <Tab.Navigator
      initialRouteName={Router.DASHBOARD_TAB}
      position={'bottom'}
      swipeEnabled={true}
      backBehavior={true}
      lazy={true}
    >
      <Tab.Screen
        name={Router.DASHBOARD_TAB}
        component={DashboardPage}
        options={{
          tabBarLabel: 'Dashboard'
        }}
      />
      <Tab.Screen
        name={Router.MESSAGE_TAB}
        component={MessagePage}
        options={{
          tabBarLabel: 'Message'
        }}
      />
      <Tab.Screen
        name={Router.NOTIFICATION_TAB}
        component={NotificationPage}
        options={{
          tabBarLabel: 'Notification'
        }}
      />
      <Tab.Screen
        name={Router.SETTING_TAB}
        component={SettingPage}
        options={{
          tabBarLabel: 'Setting'
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomStack
