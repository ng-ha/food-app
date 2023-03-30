import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider, StatusBar } from 'native-base';
import { Provider } from 'react-redux';
import Colors from './src/color';
import BottomNav from './src/navigations/BottomNav';
import LoginScreen from './src/screens/LoginScreen';
import OrderScreen from './src/screens/OrderScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import store from './src/store';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <StatusBar barStyle="light-content" backgroundColor="#434DB5" animated />
          <Stack.Navigator
            initialRouteName="login"
            screenOptions={{ headerShown: false, autoHideHomeIndicator: true }}
          >
            <Stack.Screen
              name="login"
              component={LoginScreen}
              options={{ autoHideHomeIndicator: true }}
            />
            <Stack.Screen name="register" component={RegisterScreen} />

            <Stack.Screen name="order" component={OrderScreen} />
            <Stack.Screen name="bottom" component={BottomNav} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}
