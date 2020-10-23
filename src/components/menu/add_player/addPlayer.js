import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, Keyboard } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { COLORS } from '../../../constants/constants';
//Custom components
import Button from '../../global_components/button/button';
import Input from '../../global_components/input/input';
//Redux actions
import { addPlayer } from '../../../store/actions/appActions';

const AddPlayer = (props) => {
    const [playerName, setPlayerName] = useState(null);
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        setIsValid(validatePlayerName());
    }, [playerName, props.players])

    const handleChange = (playerName) => {
        setPlayerName(playerName);
    }

    const checkPlayers = () => {
        const lowPlayerName = playerName.toLowerCase();
        const playersNames = props.players.map(player => {
            return player.playerName.toLowerCase();
        })
        return playersNames.includes(lowPlayerName);
    }

    const validatePlayerName = () => {
        if (
            playerName === null ||
            playerName === '' ||
            props.players.length >= 4 ||
            checkPlayers()
        ) {
            return false;
        }

        return true;
    }

    const handleSubmit = () => {
        if (props.players.length === 3) {
            Keyboard.dismiss();
        }
        props.addPlayer(playerName);
        setPlayerName(null);
    };

    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>Add player</Text>
            <View style={styles.addPlayer}>
                <Input
                    style={[styles.input]}
                    onChangeText={handleChange}
                    value={playerName}
                    autoFocus={true}
                />
                <Button
                    style={styles.button}
                    round={true}
                    disabled={!isValid}
                    onPress={handleSubmit}
                >
                    <FontAwesomeIcon style={styles.plus} icon={faPlus} size={24} />
                </Button>
            </View>
        </View>
    );
}

const mapStateToProps = (state) => {
    return {
        players: state.app.players,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPlayer: (playerName) => dispatch(addPlayer(playerName)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPlayer);

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 10,
    },
    title: {
        fontFamily: 'nunito-bold',
        textAlign: 'center',
        fontSize: 24,
    },
    input: {
        textAlign: 'center',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.grey,
        minWidth: 250,
        maxWidth: 280,
        overflow: 'hidden',
        marginRight: 5,
        height: 40,
        fontSize: 26,
        color: COLORS.themeColor,
    },
    addPlayer: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        marginLeft: 5,
    },
    plus: {
        color: '#fff',
    }
});