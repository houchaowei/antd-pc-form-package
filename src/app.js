/**
 * dev 入口
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Form} from "./index";

import './index.less';

class App extends React.Component {
    render() {
        return (
            <div>
                <Form/>
                <Button text='点击'/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
