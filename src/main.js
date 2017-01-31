import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import ScheduleContainer from './container/ScheduleContainer.jsx'
import StatementContainer from './container/StatementContainer.jsx'
import AppContainer from './container/AppContainer.jsx'
import App from './component/App.jsx'

import store from './store/configureStore';
import {Router, IndexRedirect, Route, browserHistory, IndexRoute} from 'react-router';
import "bootstrap-webpack";

class Main extends React.Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <Router history={browserHistory}>
                        <Route path="/" component={AppContainer}>
                            <IndexRoute component={StatementContainer}/>
                            <Route path="/schedule" component={ScheduleContainer}/>
                        </Route>
                    </Router>
                </Provider>
            </div>
        )
    }
}

ReactDOM.render(<Main/>, document.getElementById('mount-point'));