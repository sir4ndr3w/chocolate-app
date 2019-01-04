import React from 'react';
import { createAppContainer, createStackNavigator} from 'react-navigation'; // Version can be specified in package.json
import HomeScreen from "../screens/HomeScreen";

const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
    }
}, {
    initialRouteName: 'Home',
    headerMode: 'none',
//    mode: 'modal',
});

export default createAppContainer(AppNavigator);
