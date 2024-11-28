import { StyleSheet, View } from "react-native";
import React from "react";
import ExpoImage from "./ExpoImage";
import { calculateResponsiveDimensions } from "../utils/helper";

interface AttachmentsProps {
  attachments: TMessageAttachment[];
}

const Attachments = ({ attachments }: AttachmentsProps) => {
  return (
    <>
      {attachments.map((attachment) => {
        const { width, height } = calculateResponsiveDimensions(
          attachment.width,
          attachment.height
        );
        return (
          <View key={attachment.uuid} style={[styles.attachmentContainer]}>
            <ExpoImage
              style={[
                styles.attachment,
                {
                  width,
                  height,
                },
              ]}
              source={attachment.url}
            />
          </View>
        );
      })}
    </>
  );
};

export default Attachments;

const styles = StyleSheet.create({
  attachmentContainer: { marginBottom: 10 },
  attachment: { borderRadius: 5 },
});
