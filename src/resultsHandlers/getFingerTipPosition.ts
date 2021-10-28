import { ResultsHandler } from '../models/ResultsHandler';

const getFingerTipPosition: ResultsHandler = ({ $canvas, acc }) => {
  if (!acc?.['xyRatio']?.x || !acc?.['xyRatio']?.y) {
    return;
  }

  const xyRatio = acc['xyRatio'] as { [axis: string]: number };

  return {
    ...(acc as Object),
    fingerTipPosition: {
      x: $canvas.width * xyRatio.x,
      y: $canvas.height * xyRatio.y,
    },
  };
};

export default getFingerTipPosition;
