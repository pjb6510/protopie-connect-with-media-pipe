import { Results } from "@mediapipe/hands";

export type ResultsHandler = (ingredient: {
  results: Results;
  $canvas: HTMLCanvasElement;
}) => void;
