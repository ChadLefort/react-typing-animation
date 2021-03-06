import { Component } from 'react';

export interface TypingProps {
  children: React.ReactNode;
  className?: string;
  cursorClassName?: string;
  cursor: React.ReactNode;
  hideCursor?: boolean;
  speed?: number;
  startDelay?: number;
  loop?: boolean;
  onStartedTyping?: () => void;
  onBeforeType?: () => void;
  onAfterType?: () => void;
  onFinishedTyping?: () => void;
}

declare namespace Typing {
  interface BackspaceProperties {
    count?: number;
    delay?: number;
    speed?: number;
  }
  class Backspace extends Component<BackspaceProperties> {}

  interface DelayProperties {
    ms: number;
  }
  class Delay extends Component<DelayProperties> {}

  interface SpeedProperties {
    ms: number;
  }
  class Speed extends Component<SpeedProperties> {}

  interface ResetProperties {
    count?: number;
    delay?: number;
    speed?: number;
  }
  class Reset extends Component<ResetProperties> {}
}

declare class Typing extends Component<TypingProps> {}

export default Typing;
