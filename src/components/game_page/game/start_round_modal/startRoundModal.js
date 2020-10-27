import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Modal, View } from 'react-native';
//Custom components
import Button from '../../../global_components/button/button';
//Redux
import { startGame } from '../../../../store/actions/appActions';

const StartRoundModal = (props) => {
    return (
        <Modal
            visible={props.visible}
            animationType="fade"
        >
            <View style={styles.modal}>
                <Button onPress={props.startGame}>
                    {`Start round ${props.roundCount}`}
                </Button>
            </View>
        </Modal>
    );
};

const mapStateToProps = (state) => {
    return {
        players: state.app.players,
        currentPlayer: state.app.currentPlayer,
        roundCount: state.app.roundCount,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startGame: () => dispatch(startGame()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StartRoundModal);

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'center',
    },
});