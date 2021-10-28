import { ResultsHandler } from '../models/ResultsHandler';

const replaceXYRatioWithBrightness: ResultsHandler = ({ acc }) => {
  if (!acc?.['messages']?.y) {
    return;
  }

  const messages = acc['messages'] as { [messageId: string]: any };
  const { x: removed1, y: removed2, ...restMessages } = messages;

  const OFFSET = 1.6;
  let brightness =
    messages.y > 0 ? 255 - Math.floor(255 * (messages.y * OFFSET)) : 255;
  brightness = brightness < 0 ? 0 : brightness;

  return {
    ...(acc as Object),
    messages: {
      ...restMessages,
      brightness,
    },
  };
};

export default replaceXYRatioWithBrightness;
