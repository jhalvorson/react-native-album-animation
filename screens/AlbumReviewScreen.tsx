import { RouteProp } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import { bg, type } from "../theme";
import { TabOneParamList } from "../types";

interface AlbumReviewScreenProps {
  route: RouteProp<TabOneParamList, "AlbumReview">;
}

const AlbumReviewScreen = ({ route }: AlbumReviewScreenProps) => (
  <View style={styles.container}>
    <SharedElement id={route.params.album.id}>
      <Image style={styles.image} source={route.params.album.image} />
    </SharedElement>
    <View style={styles.titleWrapper}>
      <View>
        <Text style={styles.title}>{route.params.album.title}</Text>
        <Text style={[styles.text, styles.textLarge]}>Album review</Text>
      </View>
    </View>
    <Text style={styles.text}>Lorem ipsum</Text>
  </View>
);

const size = Dimensions.get("window").width - 40;

const styles = StyleSheet.create({
  image: {
    borderRadius: 20,
    width: size,
    height: size,
  },
  container: {
    paddingTop: 60,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: bg.black,
  },
  titleWrapper: {
    paddingVertical: 40,
  },
  title: {
    fontSize: 36,
    fontWeight: "800",
    color: type.white,
  },
  textLarge: {
    fontSize: 20,
  },
  text: {
    color: type.grey,
    fontSize: 18,
  },
});

export default AlbumReviewScreen;
