import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screens} from './screens';
import {StackParams} from './types';
import {ActivitiesScreen} from '../screens/activities-screen';
import {HomeScreen} from '../screens/home-screen';
import {CreateEventScreen} from '../screens/create-event-screen';
import {RatingScreen} from '../screens/rating-screen';

const Stack = createNativeStackNavigator<StackParams.HomeStack>();

export const HomeStack = (): React.JSX.Element => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name={Screens.Home} component={HomeScreen} />
    <Stack.Screen name={Screens.Activities} component={ActivitiesScreen} />
    <Stack.Screen name={Screens.CreateEvent} component={CreateEventScreen} />
    <Stack.Screen name={Screens.Rating} component={RatingScreen} />
  </Stack.Navigator>
);
