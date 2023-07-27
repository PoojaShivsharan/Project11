import React from 'react';
import { TouchableOpacity, Text, StyleSheet,ScrollView } from 'react-native';

const Card = ({ alphabet, onPress, disabled }) => {
  return (
    <ScrollView>
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
    >
      <Text style={styles.cardText}>{alphabet}</Text>
    </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    width:90,
    height:90,
    borderRadius: 8,
  },
  cardText: {
    fontSize: 24,
  },
  disabled: {
    backgroundColor: '#dcdcdc',
  },
});

export default Card;