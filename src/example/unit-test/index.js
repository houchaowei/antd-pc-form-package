import React, {Component} from "react";
import {Button, Checkbox, Col, Form, Row} from "antd";

class CheckboxComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // dataSource: require('./data_simple.json')
            dataSource: [
                {
                    "value": "1",
                    "label": "游泳"
                },
                {
                    "value": "2",
                    "label": "篮球"
                },
                {
                    "value": "3",
                    "label": "足球"
                }
            ]
        }
    }


    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log("values", values);
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div>
                <Form className="login-form" colon={false}>
                    <Form.Item label='dqwd'>
                        {getFieldDecorator('dww', {
                            initialValue: ['1', '2'],
                        })(
                            <Checkbox.Group options={this.state.dataSource}/>,
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Row>
                            <Col span={4}>
                                <Button type="primary" onClick={this.handleSubmit} className="login-form-button">
                                    Submit
                                </Button>
                            </Col>
                            <Col span={8}>
                                <Button type="default" onClick={this.reset} className="login-form-button">
                                    Reset
                                </Button>
                            </Col>
                        </Row>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default Form.create({name: "test"})(CheckboxComponent);