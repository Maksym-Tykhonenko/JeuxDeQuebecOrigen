import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import {TabStack} from './navigation/tab-stack';
import {NavigationContainer} from '@react-navigation/native';
import {useBonusStore} from './store/useBonusStore';

function App(): React.JSX.Element {
  const initializeBonus = useBonusStore(state => state.initializeBonus);

  useEffect(() => {
    SplashScreen.hide();
    initializeBonus();
  }, [initializeBonus]);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <TabStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
export default App;
