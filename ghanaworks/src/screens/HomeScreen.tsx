import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>GhanaWorks</Text>
      <Button title="Register as Artisan" onPress={() => navigation.navigate('Register' as any)} />
      <View style={{ height: 12 }} />
      <Button title="Post a Job" onPress={() => navigation.navigate('JobPost' as any)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 16 },
  title: { fontSize: 28, fontWeight: '700', marginBottom: 24 },
});
