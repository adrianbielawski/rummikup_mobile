import React from 'react';
import { StyleSheet, View } from 'react-native';
//Constants
import { COLORS } from '../../../../../../constants/constants';

const Color = (props) => {
    return (
        <View
            onStartShouldSetResponder={() => true}
            style={[styles.color, { backgroundColor: props.color }]}
            onTouchStart={props.onTouchStart}
        />
    );
}

const styles = StyleSheet.create({
    color: {
        width: 30,
        height: 30,
        margin: 2,
        borderWidth: 1,
        borderColor: COLORS.grey,
    }
});

export default Color;