import { Album } from "./models/album";

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Browse: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  Browse: undefined;
  AlbumReview: {
    album: Album;
  };
  AlbumSongs: {
    album: Album;
  };
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};
