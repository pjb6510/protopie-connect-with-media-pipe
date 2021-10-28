import { Results } from '@mediapipe/holistic';
import { ResultsHandler } from '../models/ResultsHandler';

const createResultsListener = (
  $canvas: HTMLCanvasElement,
  ...funcs: ResultsHandler[]
) => {
  let acc = null;

  return (results: Results) => {
    for (const func of funcs) {
      const nextAcc = func({ results, $canvas, acc });

      if (nextAcc != undefined) {
        acc = nextAcc;
      }
    }
  };
};

export default createResultsListener;
