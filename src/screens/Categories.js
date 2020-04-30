import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Categories = () => {
    return (
        <View style={styles.container}>
            <Text>This is the cat screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default Categories;