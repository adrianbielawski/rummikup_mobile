import React from 'react';
import { StyleSheet, View } from 'react-native';
//Constants
import { COLORS } from '../../../../constants/constants';

const PlayerColor = (props) => {
    return (
        <View
            style={styles.playerColor}
            onTouchStart={props.onTouchStart}
        >
            <View style={[styles.color, {backgroundColor: props.color}]} />
        </View>
    );
}

const styles = StyleSheet.create({
    playerColor: {
        borderWidth: 1,
        padding: 2,
        borderColor: COLORS.grey,
        elevation: 10,
        flexDirection: 'row',
    },
    color: {
        width: 25,
        height:25,
    }
});

export default PlayerColor;