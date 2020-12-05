import { RouteProp } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import { Album } from "../models/album";
import { TabOneParamList } from "../types";

interface AlbumReviewScreenProps {
  route: RouteProp<TabOneParamList, "AlbumReview">;
}

const AlbumReviewScreen = ({ route }: AlbumReviewScreenProps) => (
  <View>
    <SharedElement id={route.params.album.id}>
      <Image style={styles.image} source={route.params.album.image} />
    </SharedElement>
  </View>
);

const styles = StyleSheet.create({
  image: {
    borderRadius: 20,
  },
});

export default AlbumReviewScreen;
