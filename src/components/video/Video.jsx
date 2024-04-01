import "./Video.css";

import React, { useEffect, useRef } from 'react';

function Video({ videoId }) {
  const playerRef = useRef(null);

  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';

    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = initializePlayer;

    return () => {
      window.onYouTubeIframeAPIReady = null;
    };
  }, []);

  function initializePlayer() {
    new window.YT.Player(playerRef.current, {
      videoId: videoId,
      playerVars: {
        controls: 0,
        disablekb: 1,
        fs: 0,
        rel: 0,
        showinfo: 0,
        modestbranding: 1
      }
    });
  }

  return <div ref={playerRef}></div>;
}

export default Video;