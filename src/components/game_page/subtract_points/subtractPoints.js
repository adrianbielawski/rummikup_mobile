import React, { useState } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';
//Custom components
import Button from '../../../components/global_components/button/button';
import PlayerSubPoints from './player_subtract_points/playerSubtractPoints';
//Redux actions
import { handleNextRound, handleFinishGame } from '../../../store/actions/appActions';

const SubtractPoints = (props) => {
    const [points, setPoints] = useState({})

    const handleNextRound = () => {
        props.handleNextRound(props.players, points);
    }

    const handleFinishGame = () => {
        props.handleFinishGame(props.players, points);
    }

    const getPlayers = () => {
        return props.players.map((player, i) => {
            const onChange = val => 
                setPoints({
                    ...points,
                    [i]: parseInt(val) || 0,
                });

            return (
                <PlayerSubPoints
                    playerName={player.playerName}
                    key={i}
                    onChangeText={onChange}
                />
            );
        });
    }

    const pointsValues = Object.values(points);
    const isValid = pointsValues.filter(val => val > 0).length === props.players.length - 1;

    return (
        <View style={styles.subtractPoints}>
            <Text style={styles.title}>Subtract points</Text>
            <View style={styles.players}>
                {getPlayers()}
            </View>
            <View>
                <Button style={styles.button} onPress={handleNextRound} disabled={!isValid}>
                    <Text>Next round</Text>
                </Button>
                <Button style={styles.button} onPress={handleFinishGame} disabled={!isValid}>
                    <Text>Finish game</Text>
                </Button>
            </View>
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        players: state.app.players,
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        handleNextRound: (players, points) => dispatch(handleNextRound(players, points)),
        handleFinishGame: (players, points) => dispatch(handleFinishGame(players, points)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubtractPoints);

const styles = StyleSheet.create({
    subtractPoints: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    title: {
        fontSize: 40,
        fontFamily: 'nunito-bold',
        paddingTop: 20,
    },
    players: {
        width: '100%',
        maxWidth: 400,
    },
    button: {
        marginVertical: 10,
    },
});