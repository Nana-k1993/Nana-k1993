import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { enqueue } from '../features/queue/queueSlice';
import { v4 as uuidv4 } from 'uuid';

export default function JobPostScreen() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  function postJob() {
    if (!title) return Alert.alert('Title required');
    const item = {
      id: uuidv4(),
      type: 'create_job',
      payload: { title, description, createdAt: new Date().toISOString() },
      status: 'pending',
      createdAt: new Date().toISOString(),
    };
    dispatch(enqueue(item) as any);
    Alert.alert('Job queued', 'Your job is queued and will sync when online.');
    setTitle('');
    setDescription('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Post a Job</Text>
      <TextInput placeholder="Job title" value={title} onChangeText={setTitle} style={styles.input} />
      <TextInput
        placeholder="Describe the task (you can use voice in a full build)"
        value={description}
        onChangeText={setDescription}
        style={[styles.input, { height: 120 }]}
        multiline
      />
      <Button title="Post (Queue)" onPress={postJob} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { fontSize: 22, marginBottom: 12 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 12, marginBottom: 12, borderRadius: 6 },
});
