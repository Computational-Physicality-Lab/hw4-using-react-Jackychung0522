import React from 'react';
import './index.css'
import { Link } from 'react-router-dom';
import routes from './AppRouter';
function H1(){
    return(
        <div>

            <hr/>
            <h1>
        
        <div className="h1text">
            
          <p>
          <Link to={routes.Tshirts} className="my-link"  style={{ color: "red" ,textDecoration:"none"}} >
                    T-SHIRTS
            </Link>
          </p>
          
        </div>
        <div className="h1text">
          <p>
          <Link to={routes.NotImplement} className="my-link"style={{ color: "red" ,textDecoration:"none"}}>
              CREATE FROM PICTURE
            
            </Link>
          </p>
        </div>
        <div className="h1text">
          <p>
          <Link to={routes.NotImplement} className="my-link"style={{ color: "red" ,textDecoration:"none"}}>
              CREATE YOUR OWN
            
            </Link>
          </p>
        </div>
        <div className="h1text">
          <p>
          <Link to={routes.NotImplement} className="my-link"style={{ color: "red" ,textDecoration:"none"}}>
              ABOUT US
            
            </Link>
          </p>
        </div>
        <div className="h1text">
          <p>
          <Link to={routes.NotImplement} className="my-link"style={{ color: "red" ,textDecoration:"none"}}>
              LOG IN
            
            </Link>
          </p>
        </div>
    
    
      </h1>
      <hr></hr>
              </div>
        
    );
    
}
export default H1;

      