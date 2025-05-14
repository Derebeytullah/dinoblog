import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/HomeScreen.js';
import Ornithischia from './screens/Ornithischia.js';
import Saurnichia from './screens/Saurnichia.js';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Ornithischia" component={Ornithischia} options={{ headerShown: false }} />
        <Stack.Screen name="Saurnichia" component={Saurnichia} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
