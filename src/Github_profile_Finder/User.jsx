
import { useState } from 'react';
import github from './github.png';
// import QRCode from 'react-qr-code';
// import { Qr_gen } from '../Qr_generator/Qr_gen';

export default function User({user}){

const{avatar_url,followers,followings,public_repos,name,login,created_at}=user;
const createdate=new Date(created_at);

return(
    <div className="user">
        <div>
            <img src={avatar_url} className="avatar" alt='avatar'/>
        </div>
        <div className="gitlabel">
            <label>Your name : </label><a href={`http://github.com/${login}`}>{name||login}</a>
             <img src={github} className='gitpng'/>
            <p>User joined on date <span>{`${createdate.getDate()} ${createdate.toLocaleString('en-us',{
                month:"short",
            })} ${createdate.getFullYear()}`}</span></p>
        </div>
        <div>
            <p>Public Repos : <span>{public_repos==null||0?'No Repos':public_repos}</span></p>
           
        </div>
        <div>
            <p>Following : <span>{followings==null||0?'NO Following':followings}</span></p>
           
        </div>
        <div>
            <p>Followers: <span>{followers==null||0?'NO followers':followers}</span></p>
        </div>
        <div>
       
        </div>
    
    </div>
)
}