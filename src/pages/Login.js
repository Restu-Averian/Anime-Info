import React from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
function Login() {
  const [username, setUsername] = React.useState("");
  const navigation = useNavigation();

  const submitHandler = async () => {
    const data = {
      username,
    };

    try {
      AsyncStorage.setItem("login", JSON.stringify(data));
      navigation.navigate("Home");
    } catch (e) {}
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="User name"
        value={username}
        onChangeText={(val) => setUsername(val)}
      />
      <Button title="Login" onPress={() => submitHandler()} />
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
export default Login;
