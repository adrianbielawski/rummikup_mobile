import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
//Constants
import { COLORS } from '../../../../../constants/constants';
//Custom Components
import place1st from '../../../../../../assets/images/1st-place.png';
import place2nd from '../../../../../../assets/images/2nd-place.png';
import place3rd from '../../../../../../assets/images/3rd-place.png';
//Redux

const PlayerSummary = (props) => {
    const getImg = () => {
        const images = {
            1: place1st,
            2: place2nd,
            3: place3rd,
        };

        return images[props.place];
    };

    const player = props.player;

    return (
        <View style={styles.playerSummary}>
            <View style={styles.place}>
                <Text style={styles.placeText}>{props.placeText} place</Text>
                <Image source={getImg()} />
            </View>
            <Text style={styles.playerName}>{player.playerName}</Text>
            <Text style={styles.points}>{player.score} points</Text>
        </View>
    );
}

export default PlayerSummary;

const styles = StyleSheet.create({
    playerSummary: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.grey,
    },
    place: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: 100
    },
    placeText: {
        fontFamily: 'nunito-bold',
        fontSize: 35,
        marginRight: 10,
    },
    playerName: {
        marginTop: -20,
        fontFamily: 'nunito-bold',
        fontSize: 50,
        textAlign: 'center',
    },
    points: {
        fontFamily: 'nunito-bold',
        fontSize: 35,
    }
});