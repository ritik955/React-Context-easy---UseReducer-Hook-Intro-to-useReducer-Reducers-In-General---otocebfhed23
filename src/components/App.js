import React from 'react'
import '../styles/App.css';
import { UserProfile } from './UserProfile';
import { createContext } from 'react';

const UserContext = createContext();
const App = () => {

const user = {name:"Newton", age:3}
  return (
    <div id="main">
      <UserContext.Provider value={user}>
      <UserProfile />
      </UserContext.Provider>
    </div>
  )
}


export default App;
export {UserContext}
