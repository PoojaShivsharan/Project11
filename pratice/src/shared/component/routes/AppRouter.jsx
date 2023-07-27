import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../View/SignInScreen';
import DashboradScreen from '../View/DashboradScreen';

const Stack = createNativeStackNavigator();

const AppRouter = () => {
  
  return (
    <Stack.Navigator>
       <Stack.Screen
         options={{ headerShown: false }}
        name="SignIn"
        component={SignInScreen}
        />
    </Stack.Navigator>
  );
};

export default AppRouter;
