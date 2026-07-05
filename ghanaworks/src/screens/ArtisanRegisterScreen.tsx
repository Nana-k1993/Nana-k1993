import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/auth/authSlice';
import { v4 as uuidv4 } from 'uuid';

export default function ArtisanRegisterScreen() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [trade, setTrade] = useState('');

  function submit() {
    if (!phone) return Alert.alert('Phone is required');
    const id = uuidv4();
    dispatch(
      setUser({
        userId: id,
        phone,
        role: 'artisan',
        verified: false,
      }) as any
    );
    Alert.alert('Registered locally', 'You are registered in the app (local only)');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Artisan Registration</Text>
      <TextInput placeholder="Full name" value={name} onChangeText={setName} style={styles.input} />
      <TextInput placeholder="Phone" value={phone} onChangeText={setPhone} style={styles.input} keyboardType="phone-pad" />
      <TextInput placeholder="Trade (e.g., Electrician)" value={trade} onChangeText={setTrade} style={styles.input} />
      <Button title="Register" onPress={submit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { fontSize: 22, marginBottom: 12 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 12, marginBottom: 12, borderRadius: 6 },
});
