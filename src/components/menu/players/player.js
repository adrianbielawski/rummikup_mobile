import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
//Constants
import { COLORS } from '../../../constants/constants';
//Custom components
import Button from '../../global_components/button/button';
import PlayerColor from './playerColor/playerColor';
import ColorPicker from './playerColor/colorPicker/colorPicker';

export const Player = (props) => {
    const [elementH, setElementH] = useState(null);
    const [touchStart, setTouchStart] = useState(null);
    const [top, setTop] = useState(0);
    const [showColorPicker, setShowColorPicker] = useState(false);

    const toggleColorPicker = () => {
        setShowColorPicker(!showColorPicker);
    };

    const handleGrab = (e) => {
        props.onGrab(props.index, elementH);
        setTouchStart(e.nativeEvent.pageY);
    };

    const move = (e) => {
        const moveDistance = e.nativeEvent.pageY - touchStart;

        let newDistance = moveDistance / elementH;
        newDistance = Math.round(newDistance);
        if (newDistance === -0) {
            newDistance = 0;
        }

        props.onMove(newDistance);
        setTop(moveDistance)
    }

    const handleDrop = () => {
        props.onDrop(props.index);
        setTop(0);
        setTouchStart(null);
    };

    const removePlayer = () => {
        props.onRemove(props.index);
    }

    const getElementStyle = () => {
        let style = [styles.wrapper];

        if (props.move) {
            style = [styles.wrapper, { top: props.move }];
        }
        if (props.isGrabbed) {
            style = [styles.wrapper, styles.grabbed, { top: top }];
        }

        return style;
    };

    const getElementH = (e) => {
        setElementH(e.nativeEvent.layout.height);
    }

    return (
        <View
            style={getElementStyle()}
            onLayout={getElementH}
        >
            <PlayerColor
                color={props.player.color[0]}
                onTouchStart={toggleColorPicker}
            />
            <View
                style={styles.player}
                onStartShouldSetResponder={() => true}
                onTouchStart={handleGrab}
                onTouchEnd={handleDrop}
                onResponderMove={move}
            >
                <Text style={styles.playerNum}>{props.index + 1}: </Text>
                <Text style={styles.playerName}>{props.player.playerName}</Text>
            </View>
            <Button style={styles.button} round onPress={removePlayer}>
                <FontAwesomeIcon style={styles.faTimes} icon={faTimes} size={24} />
            </Button>
            {showColorPicker &&
                <ColorPicker
                    index={props.index}
                    onClose={toggleColorPicker}
                />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        paddingVertical: 5,
        width: '100%',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.grey,
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    player: {
        marginLeft: 7,
        flexDirection: 'row',
        alignItems: 'center',
        overflow: "hidden",
        flex: -1,
    },
    playerNum: {
        fontSize: 20,
    },
    playerName: {
        fontFamily: 'nunito-extraBold',
        fontSize: 26,
        minWidth: '300%',
    },
    faTimes: {
        color: '#fff'
    },
    grabbed: {
        zIndex: 10,
        elevation: 10,
    },
    button: {
        marginLeft: 2,
    },
    color: {
        width: 25,
        height: 25,
    },
});
