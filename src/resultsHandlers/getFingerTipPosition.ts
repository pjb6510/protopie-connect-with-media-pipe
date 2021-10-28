import { ResultsHandler } from '../models/ResultsHandler';

const getFingerTipPosition: ResultsHandler = ({ results, $canvas, acc }) => {
  if (!results.rightHandLandmarks) {
    return;
  }

  const indexFingerTip = results.rightHandLandmarks[8];

  const { x: xRatio, y: yRatio } = indexFingerTip;
  const x = $canvas.width - $canvas.width * xRatio;
  const y = $canvas.height * yRatio;

  const result = [
    ['x', x],
    ['y', y],
  ];

  if (acc && typeof acc === 'object') {
    return {
      ...acc,
      messages: result,
    };
  }

  return { messages: result };
};

export default getFingerTipPosition;
