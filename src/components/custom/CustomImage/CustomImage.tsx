import React from "react";
import { Image } from "expo-image";
import { View } from "react-native";

type CustomImageProps = {
  altText?: string;
  style?: any;
  source?: string;
};

const CustomImage: React.FC<CustomImageProps> = ({ source, style }) => {
  return <View>{source && <Image source={source} style={style} />}</View>;
};

export default CustomImage;
