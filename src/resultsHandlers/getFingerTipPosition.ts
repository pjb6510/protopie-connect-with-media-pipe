import { ResultsHandler } from '../models/ResultsHandler';

const getFingerTipPosition: ResultsHandler = ({ $canvas, acc }) => {
  if (!acc || !acc['messages']) {
    return;
  }

  const result = [];

  for (const [axis, xyRatio] of acc['messages']) {
    if (axis === 'x') {
      result.push(['x', $canvas.width * xyRatio]);
    } else {
      result.push(['y', $canvas.height * xyRatio]);
    }
  }

  return { messages: result };
};

export default getFingerTipPosition;
