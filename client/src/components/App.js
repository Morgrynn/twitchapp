import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import Header from './Header';
import StreamList from './streams/StreamList';
import StreamGame from './streams/StreamGame';
import StreamShow from './streams/StreamShow';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamCreate from './streams/StreamCreate';
import StreamLive from './streams/StreamLive';
import StreamChannel from './streams/StreamChannel';
import history from '../history';


const App = () => {

  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
              <Route path="/" exact component={StreamLive}/>
              <Route path="/streams/browse" component={StreamList} />
              <Route path="/streams/game/:id" component={StreamGame} />
              <Route path="/streams/show/:id" component={StreamShow} />
              <Route path="/streams/new" component={StreamCreate} />
              <Route path="/streams/channel" component={StreamChannel} />
              <Route path="/streams/edit/:id" component={StreamEdit} />
              <Route path="/streams/Delete/:id" component={StreamDelete} />
          </Switch>
        </div>
      </Router>
    </div>
  );

}

export default App;
