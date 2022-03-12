import "../css/music_player.css";

export const MusicPlayer = ({ song }) => {
  return (
    <div className="player-container">
      {song ? (
        <div className="music-player">
          <img src={song.cover_image} alt={song.song} />
          <div className="player-song-details">
            <h1>{song.song}</h1>
            <span>{song.artists}</span>
          </div>
          <audio src={song.url} controls autoPlay>
            This feature is not supported in your browser. Please update your
            browser.
          </audio>
        </div>
      ) : (
        <h1>Please select a song to play it.</h1>
      )}
    </div>
  );
};
