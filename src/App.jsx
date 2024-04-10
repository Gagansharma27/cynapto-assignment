import { useRef, useState } from 'react'
import './App.css'
import Assets from './components/Assets';

function App() {
  const fileRef = useRef(null);
  const [videoUrl, setVideoUrl] = useState(null);

  const handleVideoUpload = (file) => {
    const url = URL.createObjectURL(file);
    setVideoUrl(url);
  }

  return (
    <div>
      <Assets />
    </div>
  );
}

export default App;