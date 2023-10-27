import { AudioClip } from "./types";

interface DrumProps {
    audioClip: AudioClip;
}

const Drum = ({ audioClip}: DrumProps) => {
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
