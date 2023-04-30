import './App.css';
import Header from './header';
import H1 from './h1';
import Red from './Red';
import Footer from './footer';
import { Switch, Route, Redirect } from 'react-router-dom';
import appRoutes from './AppRouter';
import HomePageContent from './homePageContent';
import HomePagePicture from './homePagePicture';
function HomePage(){
    return (<div className="App">
    
    <HomePagePicture/>
    <HomePageContent/>
    
  </div>);
}
export default HomePage;