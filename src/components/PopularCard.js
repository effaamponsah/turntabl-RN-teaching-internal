import React from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Text, Surface } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const SCREEN = Dimensions.get('window')
const PopularCard = ({ text, icon, bgColor, ...props }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{
                height: SCREEN.height / 5.5,
                width: SCREEN.width / 3.5,
                backgroundColor: bgColor,
                marginTop: 10,
                borderRadius: 10,
                padding: 10,
                elevation: 4,
            }}>
                    <MaterialCommunityIcons name={icon} color='#fff' size={20} />
                    <View style={styles.lowerText}>
                        <Text style={{ color: '#fff', fontSize: 13 }}>{text}</Text>
                    </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginRight: 15
    },
    card:
    {
        height: SCREEN.height / 5.5,
        width: SCREEN.width / 3.5,
        backgroundColor: 'red',
        marginTop: 10,
        borderRadius: 10,
        padding: 10
    },
    lowerText: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 5,
        padding: 10
    }
})

export default PopularCard;