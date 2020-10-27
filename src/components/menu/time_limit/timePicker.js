import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Modal } from 'react-native';
//Custom components
import NumbersPicker from '../../global_components/numbers_picker/numbersPicker';
import { COLORS } from '../../../constants/constants';
//Redux actions
import { updateTimeLimit } from '../../../store/actions/appActions';

const TimePicker = (props) => {
    const handleTimeChange = (values) => {
        props.updateTimeLimit(values[0] * 60 + values[1]);
        props.onClose(false);
    }

    return (
        <Modal
            visible={props.show}
            transparent={true}
            animationType="fade"
        >
            <NumbersPicker
                pickers={
                    [
                        { from: 0, to: 10, initial: Math.floor(props.timeLimit / 60) },
                        { from: 0, to: 59, initial: props.timeLimit % 60 },
                    ]
                }
                style={styles.timePicker}
                themeColor={COLORS.themeColor}
                buttonsStyles={styles.timePickerButtons}
                size={60}
                onConfirm={handleTimeChange}
                onCancel={props.onClose}
            ></NumbersPicker>
        </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(TimePicker);

const styles = StyleSheet.create({
    timePicker: {
        top: 50,
    },
    timePickerButtons: {
        marginVertical: 5,
    },
});