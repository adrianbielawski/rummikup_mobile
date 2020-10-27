import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
//Custom Components
import Input from '../../../../components/global_components/input/input';

const PlayerSubPoints = (props) => {
    return (
        <View style={styles.player}>
            <Text style={styles.playerName}>{props.playerName}</Text>
            <Input placeholder='0' keyboardType='numeric' maxLength={3} onChangeText={props.onChangeText} />
        </View>
    )
}
export default PlayerSubPoints;

const styles = StyleSheet.create({
    player: {
        marginVertical: 10,
        width: '97%',
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    playerName: {
        fontSize: 30,
    },
});