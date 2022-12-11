import { StyleSheet } from "react-native";

const button_pagination_style = StyleSheet.create({
  style_button: {
    backgroundColor: "#2BA5F5",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginHorizontal: 10,
    marginVertical: 20,
  },
});

export const home_styles = StyleSheet.create({
  anime_title: {
    width: 120,
    textAlign: "center",
  },
  button_container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: button_pagination_style.style_button,
  text: {
    color: "#fff",
  },
});
