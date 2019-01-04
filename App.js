import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {store} from "./global/store";
import { Provider } from 'react-redux';
import RootNavigation from './navigation/RootNavigation';

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
               <RootNavigation />
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});