import { ImageProps } from "react-native";

export interface Album {
  image: ImageProps["source"];
  id: string;
  artist: string;
  title: string;
}