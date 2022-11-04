import React, { useState } from 'react';
import './App.css';
import ResidentsList from './Components/ResidentsList';
import Search from './Components/Search';
import Error from './Components/Error';
import 'h8k-components';

const title = "Hacker Dormitory";
function App() {

  const [residentList, setResidentList] = useState([]);
  const [searchError, setError] = useState();


  const onHandleSearch = (value={}) => {
    const { error, data } = value

    if(data){ 
      setResidentList((prevState) => {
        return [...prevState, data]
      }); 
    }
    if (error){ 
      setError(error) 
    }
  }
  return (
    <div className="App">
        <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-column justify-content-center align-items-center w-50 mx-auto">
        <Search onSubmit={onHandleSearch}/>
        <Error value={searchError}/>
        <ResidentsList data={residentList}/>
      </div>
    </div>
  );
}

export default App;
