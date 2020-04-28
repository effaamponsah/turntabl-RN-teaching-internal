import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';
import { Provider as PaperProvider } from 'react-native-paper';
import theme from './src/helpers/theme';
export default function App() {
  return (
    <PaperProvider>
      <RootNavigator />
    </PaperProvider>
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
