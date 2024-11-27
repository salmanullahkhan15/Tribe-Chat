export const messagesWithParticipant = (
  messages: TMessage[],
  participants: TParticipant[]
): TMessageWithParticipants[] => {
  const findParticipantByUuid = (uuid: string) =>
    participants.find((p) => p.uuid === uuid);

  return messages.map((message) => {
    const author = findParticipantByUuid(message.authorUuid);
    const isEdited = message.updatedAt > message.sentAt;
    return {
      ...message,
      author,
      isEdited
    };
  });
};
