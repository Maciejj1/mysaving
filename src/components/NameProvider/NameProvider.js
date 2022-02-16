import React, { createContext } from 'react'
import { db } from '../FirebaseConfig/Config';
export const UsersDataContext = createContext();
export class UsersDataContextProvider extends React.Component {
    state={
        usersdata: []
    }
    componentDidMount(){
        const prevUsersData = this.state.usersdata;
  db.collection('UsersData').onSnapshot((snapshot)=>{
    let changes = snapshot.docChanges();
    changes.forEach(change =>{
      if(change.type == 'added'){
          prevUsersData.push({
              ID : change.doc.id,
              Name: change.doc.data().Name
          })
      }
      this.setState({
          usersdata : prevUsersData
      })
    });
  });
    }
    render(){
  return (
      <UsersDataContext.Provider value={{usersdata: [...this.state.usersdata]}}>
    {this.props.children}
    </UsersDataContext.Provider>
  )
}
}


