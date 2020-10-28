import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, ScrollView } from 'react-native';
//Components
import PlayerSummary from './player_summary/playerSummary';
//Redux

const PlayersSummary = (props) => {
    const getPlayersSummary = () => {
        let sortedPlayers = [...props.players];
        sortedPlayers.sort((a, b) => {
            return b.score - a.score;
        })

        let previousPlayerScore,
            previousPlayerPlaceText,
            previousPlace

        let playersSummary = sortedPlayers.map((player, index) => {
            const placeTexts = ['1st', '2nd', '3rd', '4th'];
            let place = index + 1;
            let placeText = placeTexts[index];

            if (player.score === previousPlayerScore) {
                placeText = previousPlayerPlaceText;
                place = previousPlace;
            }

            previousPlayerScore = player.score;
            previousPlayerPlaceText = placeText;
            previousPlace = place;

            return <PlayerSummary player={player} placeText={placeText} place={place} key={index} />;
        })
        return playersSummary;
    }

    return (
        <ScrollView style={styles.results} showsVerticalScrollIndicator={false}>
            {getPlayersSummary()}
        </ScrollView>
    )
}

const mapStateToProps = (state) => {
    return {
        players: state.app.players,
    }
}

export default connect(mapStateToProps)(PlayersSummary);

const styles = StyleSheet.create({
    results: {
        width: '100%',
        paddingBottom: 10,
    },
});