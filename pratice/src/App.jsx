import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import GameGrid from './shared/component/View/GameGrid';


const ALPHABETS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

const App = () => {
  const [cards, setCards] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [matches, setMatches] = useState(0);

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    const shuffledAlphabets = shuffle([...ALPHABETS, ...ALPHABETS]);
    const initialCards = shuffledAlphabets.map((alphabet, index) => ({
      id: index,
      alphabet,
      disabled: false,
      matched: false,
      showAlphabet: false, // New property to hide the alphabet initially
    }));
    setCards(initialCards);
    setAttempts(0);
    setMatches(0);
  };

  const shuffle = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const handleCardPress = (index) => {
    const updatedCards = [...cards];
    const selectedCard = updatedCards[index];

    // Ignore clicks on already matched or disabled cards
    if (selectedCard.matched || selectedCard.disabled) {
      return;
    }

    const openedCards = updatedCards.filter((card) => card.disabled);
    if (openedCards.length < 2) {
      selectedCard.disabled = true;
      selectedCard.showAlphabet = true; // Display the alphabet on card press
      setCards(updatedCards);

      if (openedCards.length === 1) {
        const matchingCard = openedCards[0];
        if (matchingCard.alphabet === selectedCard.alphabet) {
          setMatches((prevMatches) => prevMatches + 1);
          selectedCard.matched = true;
          matchingCard.matched = true;
        } else {
          setTimeout(() => {
            selectedCard.disabled = false;
            selectedCard.showAlphabet = false; // Hide the alphabet again
            matchingCard.disabled = false;
            matchingCard.showAlphabet = false; // Hide the alphabet again
            setCards(updatedCards);
          }, 1000);
        }
        setAttempts((prevAttempts) => prevAttempts + 1);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Attempts: {attempts}</Text>
      <Text style={styles.text}>Matches: {matches}</Text>
      <GameGrid cards={cards} onCardPress={handleCardPress} />
      {matches === ALPHABETS.length && (
        <View>
          <Text style={styles.text}>Congratulations! You completed the game.</Text>
          <Button title="Restart" onPress={initializeGame} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default App;