import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import AppButton from './components/AppButton';
import SOURCE from './questions.json';
import {
  ITEM_COLOR,
  ITEM_BACKGROUND_COLOR
} from "./common/theme";

const NUMBER_OF_QUESTIONS = 300;

export default function App() {
  const [index, setIndex] = useState(0);
  const item = SOURCE[index];
  const {question, qid, answers, metadata } = item;


  const onPressNextQuestion =() => {
    const randomIndex = Math.floor(Math.random()* NUMBER_OF_QUESTIONS);
    setIndex(randomIndex);
  };

  
  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question.text}</Text>
      <View style={styles.itemList}>
          {answers.map((answer, index) => {
            return (
              <AppButton 
                color={ITEM_COLOR}
                backgroundColor={ITEM_BACKGROUND_COLOR}
                key={index}
                title={answer}
                style={styles.item}
                />
            )
          })}
      </View>

      <AppButton title="Next Question" onPress={onPressNextQuestion} style={styles.button} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#990017',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50

  },
  button: {
    elevation: 3,
    borderColor: "#627b8d",
    margin: 20
  },
  question : {
    color: "#e3e334",
    padding: "20",
    fontSize: "24px"
  },
  item: {
    margin: 5
  },
  itemList: {
    alignItems: "flex-start",
    justifyContent: "flex-start",

  }
});
