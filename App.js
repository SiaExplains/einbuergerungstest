import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from './screens/home.screen';
import { QuestionScreen } from './screens/questions.screen';
import { AboutScreen } from './screens/about.screen';
import { HelpScreen } from './screens/help.screen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }} />
        <Stack.Screen
          name="Questions"
          component={QuestionScreen}
          options={{ title: 'Random Questions' }}
        />
        <Stack.Screen name="About" component={AboutScreen} options={{ title: 'About ME' }} />
        <Stack.Screen name="Help" component={HelpScreen} options={{ title: 'Help and Contact' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
