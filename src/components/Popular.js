import React from 'react';
import PopularCard from './PopularCard';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Subheading, Text, Caption } from 'react-native-paper';
import theme from '../theme/theme';
const fakeData = [
    {
        id: 1,
        text: 'Phone or Tablet Repair',
        icon: 'settings',
        color: '#818aff'
    },
    {
        id: 2,
        text: 'House cleaning',
        icon: 'home',
        color: '#f1575f'
    },
    {
        id: 3,
        text: 'Massage Therapy',
        icon: 'leaf',
        color: '#46d18d'
    },
    {
        id: 4,
        text: 'Photography',
        icon: 'camera',
        color: '#006fd6'
    }
]
const Popular = () => {
    return (
        <View>
            <View style={styles.title}>
                <Subheading>Popular Services</Subheading>
                <Caption onPress={() => alert('Something')} style={{ color: theme.colors.primary }}>See all</Caption>
            </View>
            <View>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {
                        fakeData.map(data => (
                            <View
                                key={data.id}
                            >
                                <PopularCard

                                    text={data.text}
                                    icon={data.icon}
                                    bgColor={data.color}
                                />
                            </View>
                        ))
                    }
                </ScrollView>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    title: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    }
})
export default Popular;