export type GestureQueue = string[];

export type Messages = { [messageId: string]: string | number };

type AccumulatorPrev = {
  gestureQueue: GestureQueue;
  messages: Messages;
};

interface AccumulatorFormat {
  xyRatio: { x: number; y: number };
  fingerTipPosition: { x: number; y: number };
  brightness: number;
  prev: Partial<AccumulatorPrev>;
  messages: Messages;
}

export type Accumulator = Partial<AccumulatorFormat>;
