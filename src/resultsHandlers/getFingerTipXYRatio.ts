import { ResultsHandler } from '../models/ResultsHandler';

const getFingerTipXYRatio: ResultsHandler = ({ results, acc }) => {
  if (!results.rightHandLandmarks) {
    return;
  }

  const indexFingerTip = results.rightHandLandmarks[8];
  const { x, y } = indexFingerTip;

  return {
    ...(acc as Object),
    xyRatio: {
      x: 1 - x,
      y: y,
    },
  };
};

export default getFingerTipXYRatio;
