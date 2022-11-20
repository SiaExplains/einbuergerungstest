import { AsyncStorage } from 'react-native';

const getItem = async (key: string) => {
  console.log('getItem()');

  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // We have data!!
      console.log('value is not null');
      return value;
    }
  } catch (error) {
    // Error retrieving data
  }
};

const setItem = async (key: string, value: string) => {
  console.log('setItem()');
  try {
    await AsyncStorage.setItem(key, value);
    console.log('data has been stored successfully!');
  } catch (error) {
    // Error saving data
  }
};

const clearItems = async () => {
  console.log('clearItems()');
};

export { getItem, setItem, clearItems };
