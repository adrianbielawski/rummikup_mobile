import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';
//Custom components
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
        </View>
    );
};

const mapStateToProps = (state) => {
    return {
        players: state.app.players,
        currentPlayer: state.app.currentPlayer,
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
        paddingTop: 30,
    },
    playerName: {
        fontSize: 50,
        fontFamily: 'nunito-extraBold',
    }
});