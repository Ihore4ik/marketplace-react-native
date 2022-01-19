import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GoodsItem from "./components/GoodsItem";
import Home from "./components/Home";

const Stack = createNativeStackNavigator();


const App = () =>  {
  return (
      <NavigationContainer>
         <Stack.Navigator>
          <Stack.Screen
              name="Marketplace"
              component={Home}
          />
           <Stack.Screen name="GoodsItem" component={GoodsItem} />
        </Stack.Navigator>
      </NavigationContainer>

  );

};


export default App;
