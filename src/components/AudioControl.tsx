import React, { useEffect, useRef } from 'react';
import { useStore } from '../store/useStore';
import { Volume2, VolumeX } from 'lucide-react';

const AudioControl: React.FC = () => {
  const { isAudioPlaying, isAudioInitialized, toggleAudio } = useStore();
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1;
      console.log("Audio initialized, playing:", isAudioPlaying);
      if (isAudioPlaying) {
        audioRef.current.play().catch(err => console.error("Audio playback failed:", err));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isAudioPlaying, isAudioInitialized]);

  return (
    <div className="fixed top-6 right-6 z-[250] flex items-center gap-4">
      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        loop
        src="/ishq_sufiyana_female.mp3"
      />
      
      <button
        onClick={toggleAudio}
        className={`p-3 rounded-full glassmorphic transition-all duration-500 hover:scale-110 ${
          isAudioPlaying ? 'text-gold' : 'text-gold/40'
        }`}
      >
        {isAudioPlaying ? <Volume2 className="w-6 h-6" /> : <VolumeX className="w-6 h-6" />}
      </button>

      {isAudioPlaying && (
        <div className="flex gap-1 h-4 items-end">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-1 bg-gold animate-[music-bar_1s_ease-in-out_infinite]"
              style={{
                height: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
        </div>
      )}
      
      <style>{`
        @keyframes music-bar {
          0%, 100% { height: 20%; }
          50% { height: 100%; }
        }
      `}</style>
    </div>
  );
};

export default AudioControl;
