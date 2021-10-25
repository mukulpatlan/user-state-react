import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserhander = (userData) => {
    setUsersList((prevUser) => {
      return [...prevUser, userData];
    });
  }
  return (
    <React.Fragment>
      <AddUser onAddUser={addUserhander} />
      <UsersList users={usersList} />
    </React.Fragment>
  );
}

export default App;
