import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Loading } from 'neum-ui';

function Detail() {
  const [char, setChar] = useState(null);
  const { char_id } = useParams();
      const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters/${char_id}`)
      .then((res) => res.data)
      .then((data) => setChar(data[0]))
      .finally(() => setLoading(false));
  }, [char_id]);
  console.log(char_id);
  return (
    <div>
      {loading && <Loading w={'50px'} h={'50px'} />}
     {char && (
      <div>
            <h1>{char.name}</h1>
            <img src={char.img} alt={char.name} style={{width:'50%'}}/>
      </div>
     )}
     {char && <pre>{JSON.stringify(char,null,2)}</pre>}
    </div>
  )
}

export default Detail;
