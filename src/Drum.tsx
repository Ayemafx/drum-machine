import { AudioClip } from "./types";

interface DrumProps {
    audioClip: AudioClip;
    active: boolean; // Add an "active" prop to track if the button is active
    onClick: () => void; // Add a click handler
}

const Drum = ({ audioClip, active, onClick }: DrumProps) => {
    const playSound = (clip: AudioClip) => {
      const audioElement = document.getElementById(clip.keyTrigger) as HTMLAudioElement;
      if (audioElement) {
        audioElement.play().catch(console.error);
      }
      document.getElementById("display")!.innerText = clip.description;
    };

    

  return (
    <button
        className="drum-pad"
        id={`drum-${audioClip.keyTrigger}`}
        onClick={() => playSound(audioClip)}
    >
        
        <audio src={audioClip.url} id={audioClip.keyTrigger} className="clip" />
        {audioClip.keyTrigger}
    </button>
    
  )
}

export default Drum
