import React from "react";
import Home from "./src/pages/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Detail from "./src/pages/Detail";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Settings from "./src/pages/Settings";
import Login from "./src/pages/Login";
// import "ui-neumorphism/dist/index.css";

export default function App() {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  const [states, setStates] = React.useState({
    datas: [],
    loading: true,
    username: "",
  });

  const DrawerRouting = () => {
    return (
      <Drawer.Navigator>
        <Drawer.Screen component={Home} name="Home" />
        <Drawer.Screen
          component={Settings}
          name="Settings"
          options={{ headerShown: false }}
        />
        <Drawer.Screen name="Login" component={Login} />
      </Drawer.Navigator>
    );
  };
  return (
    // <View style={styles.container}>
    <NavigationContainer
      onStateChange={(state) => console.log("sss : ", state)}
    >
      <Stack.Navigator>
        <Stack.Screen
          name="DrawerRouting"
          component={DrawerRouting}
          options={{ headerShown: false }}
        />
        <Stack.Screen component={Home} name="Home" />
        <Stack.Group screenOptions={{ presentation: "modal" }}>
          <Stack.Screen
            component={Detail}
            name="Detail"
            initialParams={{ states, setStates }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
    // </View>
  );
}
