import React, { useState, useEffect, useContext } from 'react';
import ContextProvider from './UserContext';
import laughSound from './assets/laugh.mp3';

function App() {
  const { data ,fetchData } = useContext(ContextProvider);
  const [loading, setLoading] = useState(false);
  const [punchline, setPunchline] = useState('');
  const [audioPlayed, setAudioPlayed] = useState(false);
let laugh = new Audio(laughSound)
  
const playAudio =()=>{
  laugh.play()
  setLoading(true)
  fetchData();
}
  useEffect(() => {
    if (loading) {
      setPunchline(data.punchline);
      // playAudio()

    }
  }, [loading, audioPlayed, data.punchline]);

  return (
    <div className="frame" >
      <div className={`second-parent ${loading ? 'bg-laugh' : 'bg-think'}`}>
        <div
          style={{
            backgroundColor: 'white',
            padding: '50px',
            display: 'flex',
            width:'50vw',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h2 style={{ padding: '15px' }}>- {data.setup}</h2>
          <h3 style={{color:'red'}}>-  {punchline}</h3>
        </div>
          <button className="btn" onClick={playAudio}>
         click to know !
          </button>
    
      </div>
    </div>
  );
}

export default App;
