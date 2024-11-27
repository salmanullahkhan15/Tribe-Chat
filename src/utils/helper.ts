export const messagesWithParticipant = (
  messages: TMessage[],
  participants: TParticipant[]
): TMessageWithParticipantsGroup[] => {
  const findParticipantByUuid = (uuid: string) =>
    participants.find((p) => p.uuid === uuid);

  const groupedMessages: TMessageWithParticipantsGroup[] = [];
  let currentGroup: TMessageWithParticipantsGroup | null = null;

  messages.forEach((message) => {
    const author = findParticipantByUuid(message.authorUuid);
    const isEdited = message.updatedAt > message.sentAt;

    if (!currentGroup || currentGroup?.author?.uuid !== message.authorUuid) {
      if (currentGroup) groupedMessages.push(currentGroup);

      currentGroup = {
        udid: message.uuid + "-" + message.sentAt,
        authorUuid: message.authorUuid,
        author,
        messages: [],
      };
    }

    currentGroup.messages.push({
      ...message,
      isEdited,
      author,
    });
  });

  if (currentGroup) groupedMessages.push(currentGroup);

  return groupedMessages;
};

export const isLastItem = (index: number, arrayLength: number) => {
  return index === arrayLength - 1;
};
