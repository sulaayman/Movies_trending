import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from '../elements/Header/Header';
import Home from '../Home/Home';
import Movie from '../Movie/Movie'
import NotFound from '../elements/NotFound/NotFound'

const App = () => {
    return(
        <div>
            <BrowserRouter>
            <React.Fragment>
                <Header />
                <Switch>
                    <Route path='/' component={Home} exact />
                    <Route path='/:movieId' component={Movie} exact />
                    <Route path='/' component={NotFound} exact />
                </Switch>
            </React.Fragment>

            </BrowserRouter>
        </div>
    )
}

export default App;