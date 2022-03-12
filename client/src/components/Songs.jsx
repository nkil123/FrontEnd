import { SongCard } from "./SongCard";
import "../css/songs.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { MusicPlayer } from "./MusicPlayer";
export const Songs = () => {

  const [songs, setSongs] = useState([]);
  const [selectedSong, setSelectedSong] = useState();
  const [layoutSelected, setLayoutSelected] = useState('grid');

  useEffect(() => {
    axios
      .get(
        "https://s3-ap-southeast-1.amazonaws.com/he-public-data/studiod9c0baf.json"
      )

      .then((res) => {
        console.log(res.data);
        setSongs(res.data);
      });
  }, []);

  const handleSongClicked = (song) => {
    setSelectedSong(song);
  }

  return (
    <>
      <MusicPlayer song={selectedSong} />
      <div className="view-options">
        <span>View:</span>
        <span onClick={() => setLayoutSelected('list')} ><img src={process.env.PUBLIC_URL + '/images/list_icon.svg'} alt="list" width="30" /></span>
        <span onClick={() => setLayoutSelected('grid')} ><img src={process.env.PUBLIC_URL + '/images/grid_icon.svg'} alt="grid" width="22" /></span>
      </div>
      <div className="songsContainer" style={{ flexDirection: `${layoutSelected === "list" ? 'column' : 'row'}` }}>
        {songs && songs.map((song, i) => <SongCard key={i} song={song} clickFunction={handleSongClicked} selected={song.song === selectedSong?.song} layout={layoutSelected} />)}
      </div>
    </>
  );
};
