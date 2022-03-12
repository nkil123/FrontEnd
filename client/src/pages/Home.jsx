import { Songs } from "../components/Songs";

export const Home = () => {


  return (
    <>
      <div className="top-logo"> <img src={process.env.PUBLIC_URL + "/images/media_icon.svg"} alt="" width="50" /> Song Studio</div>
      <Songs />
    </>
  );
};
