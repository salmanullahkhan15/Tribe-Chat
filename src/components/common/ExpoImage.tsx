import React from "react";
import { Image } from "expo-image";
import { View } from "react-native";

type ExpoImageProps = {
  altText?: string;
  style?: any;
  source?: string;
};

const ExpoImage: React.FC<ExpoImageProps> = ({ source, style }) => {
  return <View>{source && <Image source={source} style={style} />}</View>;
};

export default ExpoImage;
