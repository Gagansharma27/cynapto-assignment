import React, { useState, useRef } from 'react'
import "../styles/Assets.css"

function Assets() {
    const [openAsset, setOpenAsset] = useState(false);
    const [videos, setVideos] = useState([]);
    const fileRef = useRef(null);
    const [videoUrl, setVideoUrl] = useState(null);
    // const [videoUrl, setVideoUrl] = useState(null);

    const handleVideoUpload = (file) => {
        const url = URL.createObjectURL(file);
        setVideos([...videos, url]);

    }

    const handlePlayer = (url) => {
        setVideoUrl(url);
        setOpenAsset(false);
    }
    return (
        <>
            <div className='assets'>
                <button style={{ cursor: 'pointer', marginBottom: '5px' }} onClick={() => setOpenAsset(!openAsset)}>
                    Assets
                </button>

                <div style={{ display: openAsset ? 'block' : 'none', }} className='container'>

                    <div>
                        <input
                            type="file"
                            id="file"
                            accept="video/*"
                            ref={fileRef}
                            onChange={(event) => handleVideoUpload(event.target.files[0])}
                        />
                    </div>
                    <div className='videos'>
                        {videos.map((video) => {
                            return <div className="video-container" onClick={() => handlePlayer(video)}>
                                <video className='videoPreview' src={video} ></video>
                            </div>
                        })}
                    </div>
                </div>


            </div>
            <div>
                {videoUrl && <div className='running'><video src={videoUrl} controls></video></div>}

            </div>
        </>
    )
}

export default Assets