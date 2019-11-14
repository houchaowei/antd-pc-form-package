import React from 'react';
import {Button} from "antd";
import 'antd/lib/button/style/index.css'


class Buttons extends React.Component{
    constructor(props) {
        super(props);
    }

    click = () => {
        alert(13)
    };

    render() {
        const {text} = this.props;
        return (
            <div>
                <Button type="primary" onClick={this.click}>{text}</Button>
            </div>
        );
    }
}

export default Buttons