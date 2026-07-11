import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './src/components/MapScreen';
import ChannelsScreen from './src/components/ChannelsScreen';
import PlayerScreen from './src/components/PlayerScreen';

const Stack = createNativeStackNavigator();

const MapNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="MapScreen" component={MapScreen} />
    <Stack.Screen name="Channels" component={ChannelsScreen} />
    <Stack.Screen name="Player" component={PlayerScreen} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <MapNavigator />
    </NavigationContainer>
  );
};

export default App;