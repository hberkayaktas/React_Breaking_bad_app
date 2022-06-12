import { useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { fetchAllQuotes, quotesSelector, statusSelector, errorSelector } from '../../redux/quotesSlice';
import Error from '../../components/Error';
import {Loading} from 'neum-ui';
import Item from './Item';
import "./styles.css"

function Quotes() {
      const dispatch = useDispatch();
      const data = useSelector(quotesSelector);
      const status = useSelector(statusSelector);
      const error = useSelector(errorSelector);

      console.log(data);
      useEffect(() => {
            if(status === 'idle'){
                  dispatch(fetchAllQuotes());
            }
      }, [dispatch])
      

      if(error){
            return <Error message={error}/>;
      }

      
  return (
    <div><h1>Quotes</h1>
    {status ==='loading' && <Loading h={'30px'} w={'30px'}/>}
    {status === 'succeeded' && data.map((item) => <Item key={item.quote_id} item={item}/>)}
    {status === 'succeeded' && <div className='quotes_info'>{data.length} Quotes</div>}
    </div>
  )
}

export default Quotes