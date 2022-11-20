import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import AppButton from '../components/AppButton';
import SOURCE from '../database.json';
import {
  ITEM_COLOR,
  ITEM_BACKGROUND_COLOR,
  ITEM_COLOR_CORRECT,
  ITEM_BACKGROUND_CORRECT,
  ITEM_COLOR_WRONG,
  ITEM_BACKGROUND_WRONG
} from '../common/theme';
import * as Storage from '../common/storage';

const NUMBER_OF_QUESTIONS = 300;

export function QuestionScreen() {
  const [index, setIndex] = useState(0);
  const item = SOURCE[index];
  const { question, answers, metadata } = item;
  const { rightAnswer } = metadata;
  const [status, setStatus] = useState('blank'); // blank, wrong, correct
  const shouldRenderStatus = status !== 'blank';

  const onItemPress = (index: any) => {
    if (index === rightAnswer) {
      setStatus('correct');
    } else {
      setStatus('wrong');
    }
  };

  const onPressNextQuestion = () => {
    const randomIndex = Math.floor(Math.random() * NUMBER_OF_QUESTIONS);
    setIndex(randomIndex);
    setStatus('blank');
  };

  const getStyle = (index: any) => {
    if (status === 'blank') {
      return [ITEM_COLOR, ITEM_BACKGROUND_COLOR];
    }

    if (index === rightAnswer) {
      return [ITEM_COLOR_CORRECT, ITEM_BACKGROUND_CORRECT];
    } else {
      return [ITEM_COLOR_WRONG, ITEM_BACKGROUND_WRONG];
    }
  };

  const onPressSet = async () => {
    await Storage.setItem('t1', 'first value');
  };

  const onPressGet = async () => {
    const data = await Storage.getItem('t1');
    console.log(data);
  };

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
          );
        })}
      </View>
      <View>
        <Button
          onPress={onPressSet}
          title="Set Item"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />

        <Button
          onPress={onPressGet}
          title="Get Item"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
      <AppButton title="Next Question" onPress={onPressNextQuestion} style={styles.button} />
      {shouldRenderStatus && (
        <View>
          <Text>{status}</Text>
        </View>
      )}
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
    borderColor: '#627b8d',
    margin: 20
  },
  question: {
    color: '#371a13',
    padding: 20,
    fontSize: 24
  },
  item: {
    margin: 5
  },
  itemList: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginStart: 10
  }
});
