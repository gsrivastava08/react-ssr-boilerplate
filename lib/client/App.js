import React, {PureComponent, Fragment} from 'react';
import {Helmet} from "react-helmet";
import './App.scss';
class App extends PureComponent {
    render() {
        return (
            <div>
                <Helmet>
                    <title>My Title</title>
                </Helmet>
                <h6>React SSR</h6>                
            </div>
        );
    }
}

export default App;