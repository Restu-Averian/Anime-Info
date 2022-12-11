import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Text, FlatList, View, Image, TouchableOpacity } from "react-native";
import Pagination from "../components/HomeComponents/Pagination";
import { BASE_URL } from "../helpers/utilites";
import styles from "../styles";

// function Home({ navigation }) {
function Home(props) {
  const [state, setState] = useState({
    datas: [],
    loading: true,
    username: "",
  });
  const fetchData = async (url) => {
    setState((prevState) => ({ ...prevState, loading: true }));
    await axios
      .get(url ? url : BASE_URL)
      .then((res) => {
        const datas = res?.data;

        setState((prevState) => ({ ...prevState, datas }));
      })
      .finally(() => {
        setState((prevState) => ({ ...prevState, loading: false }));
      });
  };

  const handleLink = (url) => {
    fetchData(url);
  };

  const openDetailsPage = (id) => {
    props.navigation.navigate("Detail", { id });
  };

  const gettingUsername = async () => {
    try {
      const data = await AsyncStorage.getItem("login"); // data masi string

      setState((prevState) => ({
        ...prevState,
        username: data !== null ? JSON.parse(data)?.username : "Asep", // dijadikan object
      }));
    } catch (e) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    gettingUsername();
  }, [state.username]);

  return (
    <View style={styles.container}>
      <Text>Login as : {state.username}</Text>
      {state.loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          numColumns={2}
          data={state.datas?.data}
          keyExtractor={(item) => item?.id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => openDetailsPage(item?.id)}
                style={{ marginHorizontal: 20, marginVertical: 30 }}
              >
                <Image
                  source={{
                    uri: item?.attributes?.posterImage?.original,
                    width: 120,
                    height: 120,
                  }}
                />
                <Text numberOfLines={2} style={styles.home_styles.anime_title}>
                  {item?.attributes?.titles?.en
                    ? item?.attributes?.titles?.en
                    : item?.attributes?.titles?.en_jp}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      )}

      <Pagination state={state} handleLink={handleLink} />
    </View>
  );
}
export default Home;
