import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { COLORS } from '../../../constants/constants';

const Input = (props) => {
    const { style, ...rest } = props;

    return (
        <TextInput
            style={[styles.input, style]}
            { ...rest }
        />
    );
}

export default Input;

const styles = StyleSheet.create({
    input: {
        textAlign: 'center',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.grey,
        height: 40,
        fontSize: 26,
        fontFamily: 'nunito-bold',
        color: COLORS.themeColor,
    },
});