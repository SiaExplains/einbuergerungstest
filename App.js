import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import AppButton from './components/AppButton';
import SOURCE from './questions.json';
import {
  ITEM_COLOR,
  ITEM_BACKGROUND_COLOR,
  ITEM_COLOR_CORRECT,
  ITEM_BACKGROUND_CORRECT,
  ITEM_COLOR_WRONG,
  ITEM_BACKGROUND_WRONG
} from "./common/theme";

const NUMBER_OF_QUESTIONS = 300;

export default function App() {
  const [index, setIndex] = useState(0);
  const item = SOURCE[index];
  const { question, qid, answers, metadata } = item;
  const { rightAnswer } = metadata;
  const [status, setStatus] = useState('blank'); // blank, wrong, correct
  const shouldRenderStatus = status !== "blank";

  const onItemPress = (index) => {
    if(index === rightAnswer) {
      setStatus('correct');
    }
    else {
      setStatus('wrong');
    }
  };

  const onPressNextQuestion =() => {
    const randomIndex = Math.floor(Math.random()* NUMBER_OF_QUESTIONS);
    setIndex(randomIndex);
    setStatus('blank');
  };

  const getStyle = (index) => {
    if(status === 'blank') {
      return [ITEM_COLOR, ITEM_BACKGROUND_COLOR];
    }
    
    if(index === rightAnswer) {
      return [ITEM_COLOR_CORRECT, ITEM_BACKGROUND_CORRECT];
    }
    else{
      return [ITEM_COLOR_WRONG, ITEM_BACKGROUND_WRONG];
    }

  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question.text}</Text>
      <View style={styles.itemList}>
          {answers.map((answer, index) => {
            return (
              <AppButton 
                color={getStyle(index)[0]}
                backgroundColor={getStyle(index)[1]}
                key={index}
                title={answer}
                style={styles.item}
                onPress={() => onItemPress(index)}
                />
            )
          })}  
      </View>

        <AppButton title="Next Question" onPress={onPressNextQuestion} style={styles.button} />
        {shouldRenderStatus && <View><Text>{status}</Text></View>}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b7c072',
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
    color: "#371a13",
    padding: "20",
    fontSize: "24px"
  },
  item: {
    margin: 5
  },
  itemList: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginStart: 10

  }
});
