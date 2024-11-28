import { Dimensions } from "react-native";

export const formatMessage = (
  messages: TMessage[],
  participants: TParticipant[]
): TMessageGroup[] => {
  const findParticipantByUuid = (uuid: string) =>
    participants.find((p) => p.uuid === uuid);

  const groupedMessages: TMessageGroup[] = [];
  let currentGroup: TMessageGroup | null = null;

  messages.forEach((message) => {
    const author = findParticipantByUuid(message.authorUuid);
    const isEdited = message.updatedAt > message.sentAt;

    if (!currentGroup || currentGroup?.author?.uuid !== message.authorUuid) {
      if (currentGroup) groupedMessages.push(currentGroup);

      currentGroup = {
        udid: message.uuid + "-" + message.sentAt + "-" + message.updatedAt,
        authorUuid: message.authorUuid,
        author,
        messages: [],
      };
    }

    currentGroup.messages.push({
      ...message,
      isEdited,
    });
  });

  if (currentGroup) groupedMessages.push(currentGroup);

  return groupedMessages;
};

export const isLastItem = (index: number, arrayLength: number) => {
  return index === arrayLength - 1;
};

export const calculateResponsiveDimensions = (
  width: number,
  height: number
) => {
  const { width: screenWidth } = Dimensions.get("window");

  const MAX_ATTACHMENT_WIDTH = screenWidth * 0.6;

  if (!width || !height)
    return { width: MAX_ATTACHMENT_WIDTH, height: MAX_ATTACHMENT_WIDTH * 0.75 };

  const aspectRatio = width / height;

  if (width > MAX_ATTACHMENT_WIDTH) {
    return {
      width: MAX_ATTACHMENT_WIDTH,
      height: MAX_ATTACHMENT_WIDTH / aspectRatio,
    };
  }

  return { width, height };
};
