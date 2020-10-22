import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo';
import { StyleSheet } from 'react-native';
import Main from './src/main';
function App() {

    return (
        <Provider store={store}>
            {fontsLoaded ?
                <Main style={styles.container} />
                :
                <AppLoading />
            }
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default App;
