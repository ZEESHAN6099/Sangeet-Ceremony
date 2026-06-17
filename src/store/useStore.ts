import { create } from 'zustand';

interface AppState {
  isAudioPlaying: boolean;
  isAudioInitialized: boolean;
  isGateOpened: boolean;
  isScrollLocked: boolean;
  
  toggleAudio: () => void;
  initializeAudio: () => void;
  openGate: () => void;
  setScrollLocked: (locked: boolean) => void;
}

export const useStore = create<AppState>((set) => ({
  isAudioPlaying: false,
  isAudioInitialized: false,
  isGateOpened: false,
  isScrollLocked: true,

  toggleAudio: () => set((state) => ({ isAudioPlaying: !state.isAudioPlaying })),
  
  initializeAudio: () => set({ isAudioInitialized: true, isAudioPlaying: true }),
  
  openGate: () => set({ isGateOpened: true, isScrollLocked: false }),
  
  setScrollLocked: (locked: boolean) => set({ isScrollLocked: locked }),
}));
