import { ResultsHandler } from '../models/ResultsHandler';

const getFingerTipXYRatio: ResultsHandler = ({ results, acc }) => {
  if (!results.rightHandLandmarks) {
    return;
  }

  const indexFingerTip = results.rightHandLandmarks[8];
  const { x, y } = indexFingerTip;

  const result = {
    x: 1 - x,
    y: y,
  };

  return {
    ...(acc as Object),
    messages: result,
  };
};

export default getFingerTipXYRatio;
