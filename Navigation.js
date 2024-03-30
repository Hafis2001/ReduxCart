import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import App from "./App";
import Cart from "./Cart";

const stack=createStackNavigator()

function Mystack(){
    return(
        <stack.Navigator>
            <stack.Screen
            name="App"
            component={App}/>
            <stack.Screen
            name="Cart"
            component={Cart}/>
        </stack.Navigator>
    )
}

export default function Navigation(){
    return(
        <NavigationContainer>
            <Mystack/>
        </NavigationContainer>
    )
}