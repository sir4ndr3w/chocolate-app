import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {  connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        username: state.name,
    };
};

const mapDispatchToProps = (state) => {
    return {};
};

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <View style={styles.container}>
                    <Text>Open up {this.props.username}</Text>
                </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);