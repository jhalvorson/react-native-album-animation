import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, Image, Text, View, StyleSheet } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import { Album } from "../models/album";
import { type } from "../theme";

interface AlbumLargeProps {
  album: Album;
}

const AlbumLarge = ({ album }: AlbumLargeProps) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate("AlbumReview", { album })}>
      <View>
        <SharedElement id={album.id}>
          <Image style={styles.image} source={album.image} />
        </SharedElement>
        <Text style={styles.title}>{album.title}</Text>
        <Text style={styles.text}>{album.artist}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    borderRadius: 20,
  },
  title: {
    color: type.white,
    fontWeight: "600",
    fontSize: 18,
    marginTop: 8,
    marginBottom: 2,
  },
  text: {
    color: type.grey,
  },
});

export default AlbumLarge;
