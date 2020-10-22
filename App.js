import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { StyleSheet } from 'react-native';
import Main from './src/main';
function App() {
    let [fontsLoaded] = useFonts({
        'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
        'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
        'nunito-extraBold': require('./assets/fonts/Nunito-ExtraBold.ttf'),
    });

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
