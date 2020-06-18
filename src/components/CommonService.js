import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { Subheading, Caption } from 'react-native-paper';
import CommonServiceCard from './CommonServiceCard';

const CommonService = ({ title, data, ...props }) => {
    return (
        <View>
            <View style={styles.title}>
                <Subheading>Starting a New Business</Subheading>
            </View>
            <View>
                <CommonServiceCard />
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    title: {

    }
})

export default CommonService;