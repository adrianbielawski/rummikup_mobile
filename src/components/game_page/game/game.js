import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';
//Custom components
import StartRoundModal from './start_round_modal/startRoundModal';
//Redux

const Game = (props) => {
    const currentPlayer = props.players[props.currentPlayer];

    const playerNameStyle = [styles.playerName, { color: currentPlayer.color[1] }];

    return (
        <View style={[styles.game, { backgroundColor: currentPlayer.color[0] }]}>
            <Text
                style={playerNameStyle}>
                {currentPlayer.playerName}
            </Text>
            <StartRoundModal visible={!props.gameStarted} /> 
        </View>
    );
};

const mapStateToProps = (state) => {
    return {
        players: state.app.players,
        currentPlayer: state.app.currentPlayer,
        gameStarted: state.app.gameStarted,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);

const styles = StyleSheet.create({
    game: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        marginTop: 30,
    },
    playerName: {
        fontSize: 50,
        fontFamily: 'nunito-extraBold',
    }
});