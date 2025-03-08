// JSBox Thread API TypeScript Declaration

namespace ThreadTypes {
  interface BackgroundTask {
    delay?: number;
    handler: () => void;
  }

  interface MainTask {
    delay?: number;
    handler: () => void;
  }
}

interface Thread {
  background(task: ThreadTypes.BackgroundTask | (() => void)): void;
  main(task: ThreadTypes.MainTask | (() => void)): void;
}

declare const $thread: Thread;
