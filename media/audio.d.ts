// JSBox Audio API TypeScript Declaration

declare namespace AudioTypes {
  interface PlayOptions {
    id?: number;
    url?: string;
    path?: string;
    events?: {
      itemEnded?: () => void;
      timeJumped?: () => void;
      didPlayToEndTime?: () => void;
      failedToPlayToEndTime?: () => void;
      playbackStalled?: () => void;
      newAccessLogEntry?: () => void;
      newErrorLogEntry?: () => void;
    };
  }
}

interface Audio {
  play(options: AudioTypes.PlayOptions): void;
  pause(): void;
  resume(): void;
  stop(): void;
  seek(seconds: number): void;
  status: number; // 0: 已停止, 1: 等待播放, 2: 正在播放
  duration: number;
  offset: number;
}

declare const $audio: Audio;
