import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import GestureRecognizer from 'react-native-swipe-gestures';
import { layout } from '../constants/Constants';


// 'x-api-key': '3f7747b2-1ad1-489a-bdec-e39741f3a67c'

class HomeScreen extends Component {

    constructor(props) {
        super(props);
        // initialize state
    }

    // onSwipeLeft

    // onSwipeRight

    // makeCatImageRequest

    // componentDidMount

    render() {
        let img;

        return (
            <View style={[styles.container, {backgroundColor: 'purple'}]}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}> The REAL Catbook </Text>
                </View>
                <View style={styles.imageContainer}>
                    {img}
                </View>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        height: layout.height,
        width: layout.width,
        flex: 1,
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    imageContainer: {
        flex: 2,
        justifyContent: 'flex-start',
    },
    titleText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
    imageStyle: {
        flex: 1,
        height: undefined,
        width: 300,
        resizeMode: 'contain',
    },
});


export default HomeScreen;