import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
//Constants
import { COLORS, PLAYERS_COLORS } from '../../../../../constants/constants';
//Custom components
import Color from './color/color';
//Redux Actions
import { changePlayerColor } from '../../../../../store/actions/appActions';

const ColorPicker = (props) => {
    const getColors = () => {
        return Object.entries(PLAYERS_COLORS).map((color, i) => {
            const changePlayerColor = () => {
                props.changePlayerColor(props.index, color);
                props.onClose();
            };
            return <Color key={i} color={color[0]} onTouchStart={changePlayerColor} />;
        });
    };

    return (
        <View style={styles.colorPicker}>
            {getColors()}
        </View>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        changePlayerColor: (index, color) => dispatch(changePlayerColor(index, color)),
    }
}

export default connect(null, mapDispatchToProps)(ColorPicker);

const styles = StyleSheet.create({
    colorPicker: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: COLORS.grey,
        elevation: 10,
        position: 'absolute',
        top: 5,
    }
});