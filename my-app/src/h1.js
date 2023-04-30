import React from 'react';
import './index.css'
import { Link } from 'react-router-dom';
import { Routes,Switch, Route, Redirect } from 'react-router-dom';
import routes from './AppRouter';
function H1(){
    return(
        <div>

            <hr/>
            <h1>
        
        <div class="h1text">
          <p>
          <Link to={routes.Tshirts} class="my-link">
                    T-SHIRTS
            </Link>
          </p>
        </div>
        <div class="h1text">
          <p>
          <Link to={routes.NotImplement} class="my-link">
              CREATE FROM PICTURE
            
            </Link>
          </p>
        </div>
        <div class="h1text">
          <p>
          <Link to={routes.NotImplement} class="my-link">
              CREATE YOUR OWN
            
            </Link>
          </p>
        </div>
        <div class="h1text">
          <p>
          <Link to={routes.NotImplement} class="my-link">
              ABOUT US
            
            </Link>
          </p>
        </div>
        <div class="h1text">
          <p>
          <Link to={routes.NotImplement} class="my-link">
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

      