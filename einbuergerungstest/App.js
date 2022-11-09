import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import AppButton from './components/AppButton';
import SOURCE from './questions.json';

const NUMBER_OF_QUESTIONS = 300;

export default function App() {
  const [index, setIndex] = useState(0);
  const item = SOURCE[index];
  const {question, qid, answers, metadata } = item;


  const onPressNextQuestion =() => {
    const randomIndex = Math.floor(Math.random()* NUMBER_OF_QUESTIONS);
    setIndex(randomIndex);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question.text}</Text>
      <View style={styles.itemList}>
          {answers.map((answer, index) => {
            return (
              <Button 
                color="#5e5e5e"
                key={index}
                style={styles.item}
                title={answer} />
            )
          })}
      </View>

      <AppButton title="Next Question" onPress={onPressNextQuestion} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'

  },
  button: {
    elevation: 3,
    color: "#dd0e79",
    backgroundColor: '#627b8d',
    borderColor: "#627b8d",
    margin: "20px"
  },
  question : {
    color: "#163d45",
    padding: "20",
    fontSize: "24px"
  },
  item: {
    color: "#b40edd",
    backgroundColor: "#060708",
    margin: "20px"
  },
  itemList: {
    alignItems: "center",
    justifyContent: "start"
  }
});
