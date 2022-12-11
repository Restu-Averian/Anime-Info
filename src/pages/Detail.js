import axios from "axios";
import React from "react";
import { Text, View } from "react-native";
import { BASE_URL } from "../helpers/utilites";

function Detail(props) {
  console.log("props : ", props);
  const [state, setState] = React.useState({
    datas: {},
    loading: true,
  });

  const fetchDataDetails = async () => {
    setState((prevState) => ({ ...prevState, loading: true }));

    await axios
      .get(`${BASE_URL}/${props.route?.params?.id}`)
      .then((res) => {
        const datas = res?.data;
        setState((prevState) => ({ ...prevState, datas }));
      })
      .finally(() => {
        setState((prevState) => ({ ...prevState, loading: false }));
      });
  };

  React.useEffect(() => {
    fetchDataDetails();
  }, []);
  return (
    <View>
      {state?.loading ? (
        <Text>Loading ...</Text>
      ) : (
        <View>
          <Text>{state.datas?.data?.attributes?.titles?.en_jp}</Text>
        </View>
      )}
    </View>
  );
}

export default Detail;
