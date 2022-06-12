import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters } from "../../redux/charactersSlice";
import Masonry from 'react-masonry-css';
import './styles.css';

import Error  from "../../components/Error";
import { Loading } from "neum-ui";
import 'neum-ui/dist/index.css';

function Home() {
  const characters = useSelector((state) => state.characters.persons);
  const hasNextPage = useSelector((state) => state.characters.hasNextPage);
  const nextPage = useSelector((state) => state.characters.page);
  const isLoading = useSelector((state) => state.characters.isLoading);
  const error = useSelector((state) => state.characters.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);
  //console.log(data);
  if(isLoading){
    return <Loading w={'50px'} h={'50px'} />
  }
  if(error){
    return <Error/>
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

      <div style={{padding: '20px 0 40px 0' , textAlign:'center'}}>
        {isLoading && <Loading w={'50px'} h={'50px'} />}
        {hasNextPage && !isLoading && <button onClick={() => dispatch(fetchCharacters(nextPage))}>Load more ({nextPage})</button>}
        { !hasNextPage && <div>There nothing to be shown</div>}
      </div>
    </div>
  );
}

export default Home;
