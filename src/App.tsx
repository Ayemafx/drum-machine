import { useState } from 'react'
import './App.css'
import { AudioClip } from './types'
import Drum from './Drum'


const audioClip: AudioClip[] = [
  {
    keyTrigger: "Q",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    description: "Heater 1"
  },
  {
    keyTrigger: "W",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    description: "Heater 2"
  },
  {
    keyTrigger: "E",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    description: "Heater 3"
  },
  {
    keyTrigger: "A",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    description: "Heater 4"
  },
  {
    keyTrigger: "S",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    description: "Clap"
  },
  {
    keyTrigger: "D",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    description: "Open HH"
  },
  {
    keyTrigger: "Z",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    description: "Kick n'Hat"
  },
  {
    keyTrigger: "X",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    description: "Kick"
  },
  {
    keyTrigger: "C",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    description: "Closed HH"
  }
]

const audioClip2: AudioClip[] = [
  {
    keyTrigger: "Q",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
    description: "Chord 1"
  },
  {
    keyTrigger: "W",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
    description: "Chord 2"
  },
  {
    keyTrigger: "E",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
    description: "Chord 3"
  },
  {
    keyTrigger: "A",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
    description: "Shaker"
  },
  {
    keyTrigger: "S",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
    description: "Open HH"
  },
  {
    keyTrigger: "D",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
    description: "Closed HH"
  },
  {
    keyTrigger: "Z",
    url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
    description: "Punchy Kick"
  },
  {
    keyTrigger: "X",
    url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
    description: "Side Stick"
  },
  {
    keyTrigger: "C",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
    description: "Snare"
  }
]


function App() {
  const playAudio = (e: React.KeyboardEvent<HTMLDivElement>) =>{
    const clip = audioClip.find(
      (clip) => clip.keyTrigger === e.key.toUpperCase()
    );

    const clip2 = audioClip2.find(
      (clip) => clip.keyTrigger === e.key.toUpperCase()
    );
    
    if (!clip || !clip2) return;
    (document.getElementById(clip.keyTrigger) as HTMLAudioElement).play().catch(console.error)

    document.getElementById("drum-" + clip.keyTrigger)?.focus()
    document.getElementById("display")!.innerText = clip.description;
  }
  const [isAudioClip1, setIsAudioClip1] = useState(true);

  const toggleAudioClips = () => {
    setIsAudioClip1((prev) => !prev); // Toggle between audioClip and audioClip2
  };

  return (
    <div className={`container ${isAudioClip1 ? 'audioClip1' : 'audioClip2'}`} id="drum-machine" onKeyDown={playAudio}>
      <h1>Drum Machine</h1>

      {/* Toggle Button */}
      <label className="switch">
        <input type="checkbox" onChange={toggleAudioClips} checked={isAudioClip1} /> 
        <span className="slider round"></span>
      </label>
      <div className='whole-drum'>
      {isAudioClip1 ? (
        audioClip.map((clip) => (
          <Drum audioClip={clip} key={clip.keyTrigger} />
        ))
      ) : (
        audioClip2.map((clip) => (
          <Drum audioClip={clip} key={clip.keyTrigger} />
        ))
      )}
      </div>
      <div id="display"></div>
    </div>
  );
}

export default App
