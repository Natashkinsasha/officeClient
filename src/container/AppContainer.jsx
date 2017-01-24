import React from 'react'
import App from '../component/App.jsx'
import SatmentContainer from '../container/StatmentContainer.jsx'
class AppContainer extends React.Component {
    render() {
        return (
            <div>
                <App>
                    <SatmentContainer/>
                </App>
            </div>
        )
    }
}

export default AppContainer;