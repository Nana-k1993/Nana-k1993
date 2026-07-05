import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function QueuedBadge({ count = 0 }: { count?: number }) {
  if (!count) return null;
  return (
    <View style={styles.badge}>
      <Text style={styles.text}>{count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    backgroundColor: '#ff5a5f',
    minWidth: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
  },
  text: { color: 'white', fontWeight: '700' },
});
