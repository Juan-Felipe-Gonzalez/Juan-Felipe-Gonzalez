declare global {
  interface Window {
    AOS: {
      init: (options?: any) => void;
      refresh: () => void;
      refreshHard: () => void;
    };
  }
}

export {};
