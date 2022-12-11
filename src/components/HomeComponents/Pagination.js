import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "../../styles";

function Pagination({ state, handleLink }) {
  return (
    <View>
      {state?.datas?.length !== 0 && (
        <View style={styles.home_styles.button_container}>
          <TouchableOpacity
            style={styles.home_styles.button}
            onPress={() => handleLink(state?.datas?.links?.first)}
          >
            <Text style={styles.home_styles.text}>First</Text>
          </TouchableOpacity>
          {state?.datas?.links?.prev && (
            <TouchableOpacity
              style={styles.home_styles.button}
              onPress={() => handleLink(state?.datas?.links?.previous)}
            >
              <Text style={styles.home_styles.text}>Previous</Text>
            </TouchableOpacity>
          )}
          {state?.datas?.links?.next && (
            <TouchableOpacity
              style={styles.home_styles.button}
              onPress={() => handleLink(state?.datas?.links?.next)}
            >
              <Text style={styles.home_styles.text}>Next</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity
            style={styles.home_styles.button}
            onPress={() => handleLink(state?.datas?.links?.last)}
          >
            <Text style={styles.home_styles.text}>Last</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

export default Pagination;
