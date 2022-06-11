import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters } from "../../redux/charactersSlice";
import Masonry from 'react-masonry-css';
import './styles.css';

function Home() {
  const characters = useSelector((state) => state.characters.persons);
  const isLoading = useSelector((state) => state.characters.isLoading);
  const error = useSelector((state) => state.characters.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);
  //console.log(data);
  if(isLoading){
    return <div>Loading</div>
  }
  if(error){
    return <div>error</div>
  }
  return (
    <div>
      <h1>Characters</h1>
      <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {characters.map((character) => (
          <div key={character.char_id}>
            <img
              src={character.img}
              alt={character.name}
              className="character"
            />
            <h4>{character.name}</h4>
          </div>
        ))}
      </Masonry>
    </div>
  );
}

export default Home;
