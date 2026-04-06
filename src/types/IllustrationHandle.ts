export interface IllustrationHandle {
  animateOut: (direction: "next" | "previous") => Promise<void>;
}
