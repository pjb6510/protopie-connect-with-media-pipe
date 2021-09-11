import { Hands, ResultsListener } from "@mediapipe/hands";

const createHands = (ResultsListener: ResultsListener) => {
  const hands = new Hands({
    locateFile: (file) => {
      return `hands/${file}`;
    },
  });

  hands.setOptions({
    maxNumHands: 2,
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5,
  });

  hands.onResults(ResultsListener)

  return hands;
};

export default createHands;
