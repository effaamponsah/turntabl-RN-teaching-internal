import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Subheading, Caption } from 'react-native-paper';
import theme from '../theme/theme';
import CategoryCard from './CategoryCard';
const Category = () => {
    return (
        <View>
            <View style={styles.title}>
                <Subheading>Category</Subheading>
                <Caption onPress={() => alert('Something')} style={{ color: theme.colors.primary }}>See all</Caption>
            </View>
            <View>
                <CategoryCard />
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
export default Category;