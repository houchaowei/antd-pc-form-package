/**
 * dev 入口
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {FormPackage} from "./../index";
import Utils from "./../libs/utils";
import {Icon} from "antd";


import './index.less';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: require('./data.json')
            // dataSource: require('./data_simple.json')
        }
    }

    getFormValues = (values) => {
        console.log('get form values:', values);
    };

    render() {
        const {dataSource} = this.state;
        return (
            <div style={{margin: '20px'}}>
                <FormPackage dataSource={dataSource} getFormValues={this.getFormValues}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
