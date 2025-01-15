import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screens} from './screens';
import {EventsScreen} from '../screens/events-screen';
import {EventDetailScreen} from '../screens/event-detail-screen';
import {StackParams} from './types';

const Stack = createNativeStackNavigator<StackParams.ActivitiesStack>();

export const ActivitiesStack = (): React.JSX.Element => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name={Screens.Events} component={EventsScreen} />
    <Stack.Screen name={Screens.EventDetail} component={EventDetailScreen} />
  </Stack.Navigator>
);
