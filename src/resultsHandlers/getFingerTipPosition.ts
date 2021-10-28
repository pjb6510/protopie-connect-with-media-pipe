import { ResultsHandler } from '../models/ResultsHandler';

const getFingerTipPosition: ResultsHandler = ({ $canvas, acc }) => {
  if (!acc?.['messages']?.x || !acc?.['messages']?.y) {
    return;
  }

  const messages = acc['messages'] as { [messageId: string]: any };

  return {
    ...(acc as Object),
    messages: {
      ...messages,
      x: $canvas.width * messages.x,
      y: $canvas.height * messages.y,
    },
  };
};

export default getFingerTipPosition;
