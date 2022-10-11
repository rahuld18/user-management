
import axios from 'axios';
import React from 'react';

class List extends React.Component {
  constructor(props){
    super(props);
    this.state={
      users:[],
      loading:true
    }
  }
  componentDidMount=async()=>{
    console.log('hey-=======>');
 let users;
  await axios.get('https://reqres.in/api/users?page=2')
   .then(res=>{
   users= res.data.data
  
   })
   setTimeout(()=>
   this.setState({
    users:users,
     loading:false
   })
   ,2000)
 
  }
  render(){
console.log('state====>',this.state);

let users=this.state.users;

  return (
    <div className="App">
      <table>
        <thead>
          <th>Photo</th>
          <th>Name</th>
          <th>Email</th>
        </thead>

        {this.state.loading?'Loading msg':
     users.map(user=>{

       return(<tr key={user.id}>
       <td>  <img src={user.avatar} /> </td>
       <td> {user.first_name}</td>
       <td> {user.email}</td>   </tr>)
     })}

</table>
    </div>
  );
}
}

export default List;
