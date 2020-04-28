import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Button, Appbar } from 'react-native-paper';
import Popular from '../components/Popular';
const SCREEN = Dimensions.get('window')
const Explore = ({ navigation, ...props }) => {
    return (
        <ScrollView style={styles.container}>
            <View >
                <View style={{ marginBottom: SCREEN.height / 40 }}>
                    <Appbar.Header dark={true}>
                        <Appbar.Content
                            title="Explore"
                        />
                    </Appbar.Header>
                </View>


                <View style={styles.content}>
                    <Popular />
                </View>
            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    content: {
        paddingTop: SCREEN.height / 30,
        paddingLeft: SCREEN.width / 25,
        paddingRight: SCREEN.width / 25,

    }
});


export default Explore;