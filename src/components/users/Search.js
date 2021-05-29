import React, { Component,useState } from 'react'

function Search(props){
   
    const [text,setText] = useState('')
    
    const onSubmit = (e)=>{
        e.preventDefault();
        //console.log(this.state.text)
        props.searchUsers(text)
        
    }
    const onChange = (e)=>{
        setText(text=> e.target.value)
   }
   
        return (
            <div>
                <form onSubmit={onSubmit} className="form">
                    <input type="text" name="text" placeholder="Search users ..." value={text}  onChange={onChange} />
                    <input type="submit" value="Search" className="btn btn-dark btn-block" />
                </form>
              {props.users.length>0 && <button onClick={props.clearUsers} className="btn btn-light btn-block">Clear users</button> }
            </div>
        )
    
}

export default Search
