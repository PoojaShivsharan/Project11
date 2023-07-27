import React from 'react';
import { View, StyleSheet } from 'react-native';
import Card from './Card';

const GameGrid = ({ cards, onCardPress }) => {
  return (
    <View style={styles.grid}>
      {cards.map((card, index) => (
        <Card
          key={index}
          alphabet={card.showAlphabet ? card.alphabet : ''}
          onPress={() => onCardPress(index)}
          disabled={card.disabled || card.matched}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 8,
  },
});

export default GameGrid;