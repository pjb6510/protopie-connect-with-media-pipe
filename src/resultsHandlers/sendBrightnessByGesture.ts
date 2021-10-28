import { ResultsHandler } from '../models/ResultsHandler';
import createPointUpGesture from '../handGestures/createPointUpGesture';
import { GestureEstimator } from 'fingerpose';
import { IGestureEstimator } from '../models/Fingerpose';
import formatLandmarksToArr from '../libs/arrayifyLandmarkList';
import createVGesture from '../handGestures/createVGesture';
import createWGesture from '../handGestures/createWGesture';
import { GestureNames } from '../handGestures/GestureNames';

const sendBrightnessByGesture: ResultsHandler = ({ results, acc }) => {
  if (!results.rightHandLandmarks) {
    return;
  }

  const pointUpGesture = createPointUpGesture();
  const vGesture = createVGesture();
  const wGesture = createWGesture();

  const gestureEstimator = new GestureEstimator([
    pointUpGesture,
    vGesture,
    wGesture,
  ]) as IGestureEstimator;
  const landmarks = formatLandmarksToArr(results.rightHandLandmarks);

  const recognition = gestureEstimator.estimate(landmarks, 7);
  const brightness = acc['brightness'];

  if (recognition?.gestures?.[0]) {
    switch (recognition.gestures[0].name) {
      case GestureNames.pointUpGesture:
        return {
          messages: { first: brightness },
        };
      case GestureNames.vGesture:
        return {
          messages: { second: brightness },
        };
      case GestureNames.wGesture:
        return {
          messages: { third: brightness },
        };
      default:
        return;
    }
  }
};

export default sendBrightnessByGesture;
