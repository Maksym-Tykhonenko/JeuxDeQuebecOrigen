import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParams} from '../navigation/types';

export type CombinedStacks = StackParams.Tabs &
  StackParams.ActivitiesStack &
  StackParams.HomeStack;

export const useAppNavigation = useNavigation<
  NativeStackNavigationProp<CombinedStacks>
>;
