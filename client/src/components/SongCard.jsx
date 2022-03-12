import "../css/song_card.css";

const listStyleInfo = { position: 'absolute', transform: 'translateY(0)', opacity: '1', top: '0px', left: '280px', alignItems: 'center', justifyContent: 'center', width: '600px' };

export const SongCard = ({ song, clickFunction, selected, layout }) => {
  return (
    <>
      <div className="card" style={{ backgroundImage: `url(${song.cover_image})`, overflow: `${layout === "list" ? 'visible' : 'hidden'}` }} onClick={() => clickFunction(song)}>
        <div className="card-selected" hidden={!selected}>
          Now Playing...
        </div>
        <div className="info" style={layout === "list" ? { ...listStyleInfo } : {}}>
          <h1>{song.song}</h1>
          <h2>{song.artists}</h2>
        </div>
      </div>
    </>
  );
};
