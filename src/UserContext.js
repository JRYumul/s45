import React from 'react';

//create a Context object
const UserContext = React.createContext()

//UserProvider is a component that the useContext hook can "consume" to subscribe to context changes
export const UserProvider = UserContext.Provider;

export default UserContext