import { ResultsHandler } from '../models/ResultsHandler';

const sendFingerTipPosition: ResultsHandler = ({ $canvas, acc }) => {
  if (!acc?.['fingerTipPosition']?.x || !acc?.['fingerTipPosition']?.y) {
    return;
  }

  const fingerTipPosition = acc['fingerTipPosition'] as {
    [axis: string]: number;
  };

  return {
    ...(acc as Object),
    messages: {
      x: fingerTipPosition.x,
      y: fingerTipPosition.y,
    },
  };
};

export default sendFingerTipPosition;
