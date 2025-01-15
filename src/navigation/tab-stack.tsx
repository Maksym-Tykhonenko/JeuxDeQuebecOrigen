import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StackParams} from './types';
import {Screens} from './screens';
import {AccountScreen} from '../screens/account-screen';
import {AlbumScreen} from '../screens/album-screen';
import {SupportScreen} from '../screens/support-screen';
import {COLORS} from '../constants/colors';
import {Home} from '../assets/svg/home';
import {HomeActive} from '../assets/svg/home-active';
import {Activities} from '../assets/svg/activities';
import {ActivitiesActive} from '../assets/svg/activities-active';
import {Album} from '../assets/svg/album';
import {AlbumActive} from '../assets/svg/album-active';
import {Profile} from '../assets/svg/profile';
import {ProfileActive} from '../assets/svg/profile-active';
import {SupportActive} from '../assets/svg/support-active';
import {Support} from '../assets/svg/support';
import {HomeStack} from './home-stack';
import {ActivitiesStack} from './activities-stack';

const Tab = createBottomTabNavigator<StackParams.Tabs>();

const getTabBarIcon = (
  focused: boolean,
  IconInactive: React.ReactNode,
  IconActive: React.ReactNode,
) => {
  return focused ? IconActive : IconInactive;
};

export const TabStack = (): React.JSX.Element => (
  <Tab.Navigator
    initialRouteName={Screens.HomeStack}
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: COLORS.tabBarBackground,
        borderTopWidth: 0,
        height: 70,
        paddingTop: 15,
      },
    }}>
    <Tab.Screen
      name={Screens.HomeStack}
      component={HomeStack}
      options={{
        tabBarIcon: ({focused}) =>
          getTabBarIcon(focused, <Home />, <HomeActive />),
      }}
    />
    <Tab.Screen
      name={Screens.ActivitiesStack}
      component={ActivitiesStack}
      options={{
        tabBarIcon: ({focused}) =>
          getTabBarIcon(focused, <Activities />, <ActivitiesActive />),
      }}
    />
    <Tab.Screen
      name={Screens.Album}
      component={AlbumScreen}
      options={{
        tabBarIcon: ({focused}) =>
          getTabBarIcon(focused, <Album />, <AlbumActive />),
      }}
    />
    <Tab.Screen
      name={Screens.Support}
      component={SupportScreen}
      options={{
        tabBarIcon: ({focused}) =>
          getTabBarIcon(focused, <Support />, <SupportActive />),
      }}
    />
    <Tab.Screen
      name={Screens.Account}
      component={AccountScreen}
      options={{
        tabBarIcon: ({focused}) =>
          getTabBarIcon(focused, <Profile />, <ProfileActive />),
      }}
    />
  </Tab.Navigator>
);
