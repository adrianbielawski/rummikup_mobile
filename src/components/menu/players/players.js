import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { cloneDeep } from 'lodash';
; import { COLORS } from '../../../constants/constants';
import { Player } from './player';
//Redux actions
import { playersReordered, playerRemoved } from '../../../store/actions/appActions';

export const Players = (props) => {
    const [grabbedElement, setGrabbedElement] = useState(null);
    const [grabbedElementH, setGrabbedElementH] = useState(null);
    const [distance, setDistance] = useState(0);

    const elementGrabbed = (index, height) => {
        setGrabbedElement(index);
        setGrabbedElementH(height);
    }

    const elementMoved = (newDistance) => {
        setDistance(newDistance);
    }

    const elementDropped = (index) => {
        const newPlayers = props.players;
        let newIndex = index + distance

        if (newIndex < 1) {
            newIndex = 0;
        } else if (newIndex >= props.players.length) {
            newIndex = props.players.length - 1;
        }

        newPlayers.splice(newIndex, 0, props.players.splice(index, 1)[0]);

        props.playersReordered(newPlayers);
        setGrabbedElement(null);
        setGrabbedElementH(null);
        setDistance(0);
    }

    const removePlayer = (index) => {
        let newPlayers = cloneDeep(props.players);
        newPlayers.splice(index, 1);

        props.playerRemoved(newPlayers);
    }

    const getPlaceholder = () => {
        if (grabbedElement === null) {
            return null;
        }
        let placeholder = grabbedElement + distance;

        return placeholder;
    }

    const checkMove = (placeholder, index) => {
        let move = false;
        if (placeholder >= index && distance > 0 && grabbedElement < index) {
            move = -grabbedElementH;
        }
        if (placeholder <= index && distance < 0 && grabbedElement > index) {
            move = grabbedElementH;
        }
        return move;
    }

    const getPlayers = () => {
        const placeholder = getPlaceholder();
        return props.players.map((player, index) => {
            const move = checkMove(placeholder, index);
            return (
                <Player
                    player={player}
                    index={index}
                    key={player.playerName}
                    isGrabbed={grabbedElement === index}
                    move={move}
                    onGrab={elementGrabbed}
                    onRemove={removePlayer}
                    onMove={elementMoved}
                    onDrop={elementDropped}>
                </Player>
            )
        })
    }

    return (
        <View style={styles.wrapper}>
            {getPlayers()}
        </View>
    );
};

const mapStateToProps = (state) => {
    return {
        players: state.app.players,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        playersReordered: (newPlayers) => dispatch(playersReordered(newPlayers)),
        playerRemoved: (newPlayers) => dispatch(playerRemoved(newPlayers)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Players);

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        maxWidth: 400,
        paddingVertical: 5,
    },
    input: {
        textAlign: 'center',
        minWidth: 250,
        marginRight: 5,
        height: 40,
        fontSize: 25,
        color: COLORS.themeColor,
    },
    addPlayer: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center'
    },
    plus: {
        color: '#fff',
    }
});
