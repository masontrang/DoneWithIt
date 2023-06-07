import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  Button,
  Alert,
  Platform,
  StatusBar,
} from 'react-native';

export default function App() {
  const handlePress = () =>
    Alert.prompt('Title', 'message', (text) => console.log(text));
  return (
    <SafeAreaView style={styles.container}>
      <Button
        color="orange"
        title="Click Me"
        onPress={() =>
          Alert.alert('My title', 'My message', [
            {
              text: 'Yes',
              onPress: () => console.log('yes', StatusBar.currentHeight),
            },
            { text: 'No', onPress: () => console.log('no') },
          ])
        }
      />
      <Text onPress={handlePress}>Hello World {StatusBar.currentHeight}</Text>
      <TouchableNativeFeedback onPress={handlePress}>
        {/* <Image
          blurRadius={1}
          fadeDuration={1000}
          source={{
            width: 200,
            height: 300,
            uri: 'http://picsum.photos/200/300',
          }}
        /> */}
        <View
          style={{ width: 200, height: 70, backgroundColor: 'dodgerblue' }}
        ></View>
      </TouchableNativeFeedback>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    paddingTop: Platform.OS === 'android' ? 0 : 0,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
