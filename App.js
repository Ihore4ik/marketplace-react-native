import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./components/Home";
import ItemInfo from "./components/ItemInfo";

const Stack = createNativeStackNavigator();


const App = () =>  {
  return (
      <NavigationContainer>
         <Stack.Navigator>
          <Stack.Screen
              name="Marketplace"
              component={Home}
          />
           <Stack.Screen name="ItemInfo" component={ItemInfo} />
        </Stack.Navigator>
      </NavigationContainer>

  );

};


export default App;
