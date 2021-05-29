import React, { Component } from 'react'
import Spinner from '../Spinner'
import UserItem from './UserItem'
import PropTypes from 'prop-types'

 function Users({users,loading}) {
 if(!loading){
  
        return (
            <div style={userStyle}>
                {
                    users.map(user=>{
                        return <UserItem key={user.id} user={user}/>
                    })
                }
            </div>
        )
            }else{
        
                return <Spinner/>
            }
}
export default Users

const userStyle = {
    display: 'grid',
    gridTemplateColumns : 'repeat(3,1fr)',
    gridGap: '1rem'
}
Users.propTypes= {
    users : PropTypes.array.isRequired,
    loading : PropTypes.bool.isRequired,
}