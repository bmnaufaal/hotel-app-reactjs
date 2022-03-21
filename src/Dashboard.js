import React from 'react';
import { useNavigate } from "react-router-dom";
import { removeUserSession, getToken, getUser } from './Utils/Common';
import axios from 'axios';

function Dashboard()  {

    let navigate = useNavigate(); 
    const logOut = () => {

        const token = getToken();

        let config = {
            headers: {
                'Authorization' : `Bearer ${token}`
            }
        }
        const bodyParameters = {
            key: "value"
         };
        axios.post('http://hotel-app.test/api/auth/logout/', 
        bodyParameters, config
        ).then(response => {
            removeUserSession();
            let path = `/`; 
            navigate(path);
        }).catch(error => {
            if (error.response.status === 401) {
                console.log(token);
            } else {
                console.log("Error");
            }
        });
    }

    return (
        <div>
            <div className="m-3">
                Welcome { getUser() }, token anda adalah { getToken() }
            </div>
            <div>
                <div className="d-grid">
                    <button className="btn btn-secondary btn-login text-uppercase fw-bold" type="button" onClick={ logOut }>Log out</button>
                </div>
            </div>
            
        </div>
        
    )
}

export default Dashboard