import { Image, ImageSourcePropType, View } from "react-native";
import React from "react";

type CustomImageProps = {
  altText?: string;
  style?: any;
  source?: ImageSourcePropType;
};

const CustomImage: React.FC<CustomImageProps> = ({ source, style }) => {
  return <View>{source && <Image source={source} style={style} />}</View>;
};

export default CustomImage;
