import { ResultsHandler } from '../models/ResultsHandler';

const getFingerTipXYRatio: ResultsHandler = ({ results, acc }) => {
  if (!results.rightHandLandmarks) {
    return;
  }

  const indexFingerTip = results.rightHandLandmarks[8];
  const { x, y } = indexFingerTip;

  const result = [
    ['x', 1 - x],
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

export default getFingerTipXYRatio;
