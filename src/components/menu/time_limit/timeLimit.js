import React, { useState } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import cn from 'react-native-classnames';
//Custom components
import NumbersPicker from '../../global_components/numbers_picker/numbersPicker';
import { colors } from '../../../constants/constants';
//Redux actions
import { updateTimeLimit } from '../../../store/actions/appActions';

const Menu = (props) => {
    const [showTimePicker, setShowTimePicker] = useState(false);

    const getMinutes = () => {
        let min = Math.floor(props.timeLimit / 60);
        if (min < 10) {
            min = `0${min}`;
        }
        return min;
    }

    const getSeconds = () => {
        let sec = props.timeLimit % 60;
        if (sec < 10) {
            sec = `0${sec}`;
        }
        return sec;
    }

    const handleTimerPress = () => {
        setShowTimePicker(true);
    }
    const handleTimeChange = (values) => {
        props.updateTimeLimit(values[0] * 60 + values[1]);
        setShowTimePicker(false);
    }

    const handleCancelPicker = () => {
        setShowTimePicker(false);
    }

    const colonStyles = cn(styles, 'text', 'colon')

    return (
        <View style={styles.timeLimit}>
            <Text style={styles.title}>Time limit</Text>
            <TouchableOpacity style={styles.time} onPress={handleTimerPress}>
                <Text style={styles.text}>{getMinutes()}</Text>
                <Text style={colonStyles}>:</Text>
                <Text style={styles.text}>{getSeconds()}</Text>
            </TouchableOpacity>
            {showTimePicker &&
                <NumbersPicker
                    pickers={
                        [
                            { from: 0, to: 10, initial: Math.floor(props.timeLimit / 60) },
                            { from: 0, to: 59, initial: props.timeLimit % 60 },
                        ]
                    }
                    style={styles.timePicker}
                    themeColor={colors.themeColor}
                    buttonsStyles={styles.timePickerButtons}
                    size={60}
                    onConfirm={handleTimeChange}
                    onCancel={handleCancelPicker}
                ></NumbersPicker>
            }
        </View>
    );
}

const mapStateToProps = (state) => {
    return {
        timeLimit: state.app.timeLimit,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateTimeLimit: (timeLimit) => dispatch(updateTimeLimit(timeLimit)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

const styles = StyleSheet.create({
    menu: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 24,
        paddingHorizontal: 10,
    },
    timeLimit: {
        marginVertical: 20,
    },
    title: {
        fontFamily: 'nunito-bold',
        textAlign: 'center',
        fontSize: 24,
    },
    time: {
        flexDirection: 'row',
        marginTop: -10,
    },
    text: {
        fontSize: 50,
        fontFamily: 'nunito-extraBold',
        color: colors.themeColor,
    },
    colon: {
        top: -5,
    },
    timePicker: {
        top: 30,
    },
    timePickerButtons: {
        marginVertical: 5,
    },
});