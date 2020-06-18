import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Button, Appbar } from 'react-native-paper';
import Popular from '../components/Popular';
import Category from '../components/Category';
import CommonService from '../components/CommonService';
const SCREEN = Dimensions.get('window')
const Explore = ({ navigation, ...props }) => {

    const _handleSearch = () => alert('To search')
    return (
        <View  style={styles.container}>
            <View style={{ marginBottom: SCREEN.height / 40 }}>
                <Appbar.Header dark={true}>
                    <Appbar.Content
                        title="Explore"
                    />
                    <Appbar.Action icon="magnify" onPress={_handleSearch} />
                </Appbar.Header>
            </View>
            <ScrollView>


                <View style={styles.content}>
                    <Popular />

                    <View style={{ marginTop: SCREEN.height / 15 }}>
                        <Category />
                    </View>

                    <CommonService />
                    
                </View>
            </ScrollView>
        </View>

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