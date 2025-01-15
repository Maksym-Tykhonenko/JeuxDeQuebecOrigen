import {create} from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface BonusStore {
  bonusCount: number;
  incrementBonus: (amount: number) => void;
  initializeBonus: () => Promise<void>;
}

export const useBonusStore = create<BonusStore>(set => ({
  bonusCount: 0,
  incrementBonus: async amount => {
    try {
      const currentCount = await AsyncStorage.getItem('bonusCount');
      const newCount = (currentCount ? parseInt(currentCount, 10) : 0) + amount;

      await AsyncStorage.setItem('bonusCount', newCount.toString());
      set({bonusCount: newCount});
    } catch (error) {
      console.error('Error updating bonus count:', error);
    }
  },
  initializeBonus: async () => {
    try {
      const storedBonus = await AsyncStorage.getItem('bonusCount');
      set({bonusCount: storedBonus ? parseInt(storedBonus, 10) : 0});
    } catch (error) {
      console.error('Error initializing bonus count:', error);
    }
  },
}));
