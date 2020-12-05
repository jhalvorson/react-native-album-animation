import * as React from "react";
import { ScrollView, StyleSheet } from "react-native";
import AlbumLarge from "../components/AlbumLarge";

import { Text, View } from "../components/Themed";
import { Album } from "../models/album";
import { bg, type } from "../theme";

const facesImage = require("../assets/images/faces.jpg");

const albums: Album[] = [
  {
    id: "1",
    image: facesImage,
    title: "Faces",
    artist: "Mac Miller",
  },
  {
    id: "2",
    image: facesImage,
    title: "Something",
    artist: "Mac Miller",
  },
];

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Browse</Text>

      <View style={styles.reviews}>
        <Text style={styles.subtitle}>Reviews</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {albums.map((album) => (
            <>
              <View style={{ marginRight: 20 }} />
              <AlbumLarge album={album} />
              <View style={{ marginRight: 10 }} />
            </>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  reviews: {
    backgroundColor: bg.black,
    marginTop: 100,
  },
  subtitle: {
    fontSize: 22,
    color: type.white,
    fontWeight: "700",
    marginBottom: 20,
    paddingLeft: 20,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: bg.black,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: type.white,
    textAlign: "center",
    paddingTop: 140,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
