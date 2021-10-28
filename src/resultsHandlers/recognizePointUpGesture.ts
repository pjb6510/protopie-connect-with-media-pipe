import { ResultsHandler } from '../models/ResultsHandler';
import createPointUpGesture from '../handGestures/createPointUpGesture';
import { GestureEstimator } from 'fingerpose';
import { IGestureEstimator } from '../models/Fingerpose';
import formatLandmarksToArr from '../libs/arrayifyLandmarkList';

const recognizePointUpGesture: ResultsHandler = ({ results, acc }) => {
  if (!results.rightHandLandmarks) {
    return;
  }

  const pointUpGesture = createPointUpGesture();
  const gestureEstimator = new GestureEstimator([
    pointUpGesture,
  ]) as IGestureEstimator;
  const landmarks = formatLandmarksToArr(results.rightHandLandmarks);

  const recognition = gestureEstimator.estimate(landmarks, 7);

  if (recognition.gestures == undefined || recognition.gestures.length === 0) {
    delete acc['messages'];
  }
};

export default recognizePointUpGesture;
