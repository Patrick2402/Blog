import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Create from './Create';
import BlogDetails from './BlogDetails';
import  NotFound  from './NotFound';
import Support from './Support';

function App() {

  return (
  <Router >
    <div className="App">
    <Navbar />
      <div className="contnet">
         <Switch>
           <Route exact path="/"> 
              <Home />
          </Route>
          <Route path="/create"> 
              <Create />
          </Route>
          <Route path="/sp">
            <Support />
          </Route>
          <Route path="/blogs/:id"> 
              <BlogDetails />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
      </Switch>
      </div>
    <Footer />
    </div>
</Router>
  );
}

export default App;
