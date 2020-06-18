import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Surface, Card, Subheading, Caption } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import theme from '../theme/theme';
const CategoryCard = () => {
    return (
        <View style={styles.container}>
            <Card elevation={10}>
                <Card.Cover source={{ uri: 'https://ocdn.eu/pulscms-transforms/1/WJpk9kqTURBXy81YmQ0NjE1NzMyN2YwNTE2ZmQ3YWUxNGVkMWEzY2RhYS5qcGVnkZMFzQMUzQG8gaEwAQ' }} />
                <Card.Content>
                    <Subheading style={{ marginTop: 5 }}>Home Improvement</Subheading>
                    <Surface style={styles.inline}>
                        <MaterialCommunityIcons name='crosshairs-gps' color={theme.colors.primary} />
                        <Caption style={{ marginLeft: 5 }}>56623 Pros near you</Caption>
                    </Surface>
                </Card.Content>
            </Card>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10
    },
    inline: {
        flexDirection: "row",
        alignItems: "center",
    }
})

export default CategoryCard;