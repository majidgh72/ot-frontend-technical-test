import React, { useState, useEffect } from 'react';
import axios from 'axios';
import modifyData from './services/modifyData';
import compare from './services/compare';
import Table from './components/Table';
import Loading from './components/Loading';
import 'normalize.css';
import './assets/scss/app.scss';


function App() {

  const [ data, setData ] = useState( false );
  const [ order, setOrder ] = useState( false );

  useEffect(() => {

    if( data !== false ) return;

    axios.get("https://demo6922545.mockable.io/")
      .then(( response ) => {
        const { data } = response.data;
        let sortedData = modifyData( data );
        setData( sortedData );
      })
      .catch(() => {
        throw new Error ("Can not retrieve data information");
      });

  }, [ data ]);


  function sortBy( dataName ) {
    let orderValue = order ? "asc" : "desc";
    let newOrderedData = data.sort((a, b) => compare(a, b, dataName, orderValue));
    setData( [...newOrderedData] );
    setOrder( !order )
  }


  const display = data
    ? <Table data={ data } sortHandler={ sortBy } />
    : <Loading />
  

  return (
    <div className="App">
      { display }
    </div>
  );
}

export default App;
