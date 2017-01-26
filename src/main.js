import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppContainer from './container/AppContainer.jsx';
import store from './store/configureStore';
import {Router, IndexRedirect, Route, browserHistory} from 'react-router';
import "bootstrap-webpack";

class Main extends React.Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <Router path="/" history={browserHistory}>
                        <Route path="/" component={AppContainer}/>
                    </Router>
                </Provider>
            </div>
        )
    }
}

ReactDOM.render(<Main/>, document.getElementById('mount-point'));