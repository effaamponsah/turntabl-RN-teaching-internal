import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Avatar, Surface, Card, Subheading, Caption } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import theme from '../theme/theme';
const SCREEN = Dimensions.get('window')
const CommonServiceCard = ({ projectName, numberOfPros, ...props }) => {

    return (
        <Card>
            <Card.Cover source={{ uri: 'https://ocdn.eu/pulscms-transforms/1/WJpk9kqTURBXy81YmQ0NjE1NzMyN2YwNTE2ZmQ3YWUxNGVkMWEzY2RhYS5qcGVnkZMFzQMUzQG8gaEwAQ' }} />
            <Card.Content>
                <Subheading style={{ marginTop: 5 }}>Graphic Designer</Subheading>
                <Surface style={styles.inline}>
                    <MaterialCommunityIcons name='crosshairs-gps' color={theme.colors.primary} />
                    <Caption style={{ marginLeft: 5 }}>23 Pros near you</Caption>
                </Surface>
            </Card.Content>
        </Card>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    inline: {
        flexDirection: "row",
        alignItems: "center",
    },
    card: {
        marginRight: 15,
    }
})

export default CommonServiceCard;