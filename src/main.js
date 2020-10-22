import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Main = (props) => {
    return (
        <View style={styles.container}>
            {getContent()}
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
