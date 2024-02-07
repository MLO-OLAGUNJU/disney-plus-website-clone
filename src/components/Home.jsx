import styled from "styled-components";
import ImgSlider from "./ImageSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommends from "./Recommended";
import Trending from "./Trending";
import Viewers from "./Viewers";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const snapshot = await getDocs(collection(db, "movies"));
        const movies = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const categorizedMovies = {
          recommend: movies.filter((movie) => movie.type === "recommend"),
          newDisney: movies.filter((movie) => movie.type === "new"),
          original: movies.filter((movie) => movie.type === "original"),
          trending: movies.filter((movie) => movie.type === "trending"),
        };

        dispatch(setMovies(categorizedMovies));
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [dispatch, userName]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
