import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, Image, Text, View, StyleSheet } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import { Album } from "../models/album";

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
        <Text>{album.title}</Text>
        <Text>{album.artist}</Text>
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
});

export default AlbumLarge;
