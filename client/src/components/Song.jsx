import "../css/song_card.css";
export const Song = ({ song }) => {
  return (
    <>
      <div className="card">
        <img src={song.cover_image} alt="image" />

        <div className="info">
          <h1>Heading</h1>
          <p>{song.song}</p>
          <a href="#">Read More</a>
        </div>
      </div>
    </>
  );
};
