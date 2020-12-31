import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header'
import SearchPage from './SearchPage';
import Sidebar from './Sidebar';
import VideoSection from './VideoSection';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Switch>
      <Route path="/search/:searchinfo">
        <div className="app__page">
       <Sidebar/>
       <SearchPage/>
        </div>
        </Route>
        <Route path="/">
        <div className="app__page">
       <Sidebar/>
       <VideoSection/>
        </div>
        </Route>
    
      </Switch>
     
      </Router>
    
    </div>
  );
}

export default App;
