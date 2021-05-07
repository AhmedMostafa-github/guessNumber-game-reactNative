import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

import BodyText from "../commponents/BodyText";
import MainButtom from "../commponents/MainButton";
import colors from "../constants/colors";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <BodyText style={styles.resultText}>The Game is Over!</BodyText>
      <View style={styles.imageContanier}>
        <Image
          fadeDuration={5000}
          style={styles.image}
          source={require("../assets/success.png")}
          resizeMode="cover"
        />
      </View>
      <View style={styles.resultContanier}>
        <BodyText style={styles.resultText}>
          Your Phone needed{" "}
          <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
          guess the number
          <Text style={styles.highlight}>{props.userNumber}</Text>{" "}
        </BodyText>
      </View>
      <MainButtom onPress={props.onRestart}>New Game</MainButtom>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContanier: {
    borderRadius: 200,
    borderWidth: 3,
    borderColor: "black",
    width: 300,
    height: 300,
    overflow: "hidden",
    marginVertical: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  resultContanier: {
    marginHorizontal: 30,
    marginVertical: 15,
  },
  resultText: {
    textAlign: "center",
    fontSize: 20,
  },
  highlight: {
    color: colors.primary,
    fontFamily: "open-sans-bold",
  },
});
export default GameOverScreen;
