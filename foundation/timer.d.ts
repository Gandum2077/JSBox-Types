// JSBox Timer API TypeScript Declaration

namespace TimerTypes {
  interface TimerTask {
    interval: number;
    handler: () => void;
  }

  interface Timer {
    invalidate(): void;
  }
}

interface Timer {
  schedule(task: TimerTypes.TimerTask): TimerTypes.Timer;
}

declare const $timer: Timer;
