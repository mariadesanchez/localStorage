import React from 'react'
import UserList from './UserList';
// import { useListContext} from './UserList'


const UserTable = () => {
  // const initialState = useListContext();
  
  let initialState = localStorage.getItem('initialState')
  let initialStateObject = JSON.parse(initialState);

  return (

    <div>
  
  
      {initialStateObject.users.map((init) => (
        <div key={init.id}>
          <tr>
            <td>{init.id+' - '}<br/></td>
            <td>{init.userName+' - '}<br/></td>
            <td>{init.email+' - '}<br/></td>
          </tr>
        </div>
      ))}
      
    </div>

  )
  


}

export default UserTable


