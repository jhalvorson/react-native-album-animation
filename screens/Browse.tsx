import * as React from "react";
import { ScrollView, StyleSheet } from "react-native";
import AlbumLarge from "../components/AlbumLarge";

import { Text, View } from "../components/Themed";
import { Album } from "../models/album";

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
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {albums.map((album) => (
          <>
            <AlbumLarge album={album} />
            <View style={{ marginRight: 30 }} />
          </>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
