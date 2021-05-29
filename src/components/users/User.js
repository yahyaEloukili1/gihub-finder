import React, { Component,useEffect } from 'react'
import  Spinner from "../Spinner";
import { Link} from "react-router-dom";
function User(props){
   
    useEffect(() => {
        props.getUser(props.match.params.login)
        
    }, [])
 
    const {
        name,
        avatar_url,
        location,
        bio,
        company,
        blog,
        login,
        html_url,
        following,
        followers,
        public_repos,
        public_gists,
        hireable
    }= props.user
      
        if(props.loading){
        return (
         <Spinner/>
        )}
        else{
            return <>
                    <Link to="/">Back to searchg</Link>
                    Hireable : {' '}
                    {hireable ? <i className="fa fa-check text-success" /> :<i className="fa fa-times-circle text-danger"/>}
                    <div className="card grid-2">
                        <div className="all-center">
                            <img src={avatar_url} className="round-img" style={{width: '150px'}} />
                            <h1>{name}</h1>
                            <p>{location}</p>
                        </div>
                        <div>
                            {bio && <>
                                <h3>Bio</h3>
                                <p>{bio}</p>
                            </>}
                            <a href={html_url} className="btn btn-dark my-1">Visite github profile</a>
                            <ul>
                                <li>
                                    {login &&<>
                                    <strong>Username : </strong>{login}
                                        </>}
                                </li>
                                <li>
                                    {company &&<>
                                    <strong>Campany : </strong>{company}
                                        </>}
                                </li>
                                <li>
                                    {blog &&<>
                                    <strong>Website : </strong>{blog}
                                        </>}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="card text-center">
                        
                                        <div className="badge badge-primary">
                                            Followers : {followers}
                                        </div>
                                        <div className="badge badge-success">
                                            Following : {following}
                                        </div>
                                        <div className="badge badge-danger">
                                            Public repos : {public_repos}
                                        </div>
                                        <div className="badge badge-dark">
                                            Public gists : {public_gists}
                                        </div>
                    </div>
            </>
        }
    }

export default User