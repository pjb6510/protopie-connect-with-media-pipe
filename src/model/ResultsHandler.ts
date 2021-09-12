import { Results } from "@mediapipe/holistic";

export type ResultsHandler = (ingredient: {
  results: Results;
  $canvas: HTMLCanvasElement;
}) => void;
