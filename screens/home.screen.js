import { View, Button } from 'react-native';

export function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
            title="Random Questions"
            onPress={() => navigation.navigate('Questions')}
          />
        <Button
            title="About ME"
            onPress={() => navigation.navigate('About')}
            />
          <Button
            title="Help & Contact"
            onPress={() => navigation.navigate('Help')}
            />
      </View>
    );
}