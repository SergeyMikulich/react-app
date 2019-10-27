import React from 'react';
import User from './User';

const Users = () =>{
    return(
        <div className="right">
             <User 
                     src="https://jooinn.com/images/man-19.jpg" 
                     alt="man"
                     name="Sergey"
                     min/>
             <div className="users__block">
             <User 
                     src="https://jooinn.com/images/man-19.jpg" 
                     alt="man"
                     name="Sergey"
                     min/>
             <User 
                     src="https://jooinn.com/images/man-19.jpg" 
                     alt="man"
                     name="Sergey"
                     min/>
             <User 
                     src="https://jooinn.com/images/man-19.jpg" 
                     alt="man"
                     name="Sergey"
                     min/>
             </div>
        </div>
    )
}
export default Users;