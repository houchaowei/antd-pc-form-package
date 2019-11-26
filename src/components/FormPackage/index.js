import React from 'react';
import {Form, Input, Icon, Button, InputNumber, Select, Row, Col, Checkbox} from "antd";
import 'antd/dist/antd.min.css';
import FormItem from "./formChild";
import DeepClone from "lodash/cloneDeep";

class FormPackage extends React.Component{
    static _label = ' ';
    constructor(props) {
        super(props);
        this.state = {
            formItemLayout: {
                labelCol: { span: 6 },
                wrapperCol: { span: 12 },
            },
        };
    }

    componentDidMount() {
        // ...
    }

    // collect form values
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // console.log('Received values of form: ', values);
                const {getFormValues} = this.props;

                getFormValues(values);
            }
        });
    };

    reset = () => {
        this.props.form.resetFields();
    };

    render() {
        const {dataSource} = this.props;
        const {formItemLayout} = this.state;
        return (
            <div>
                <Form className="login-form" colon={false} onSubmit={this.handleSubmit}>
                    {
                        dataSource.map(item => {
                            return (
                                <FormItem key={item.key} HForm={this.props.form} dataItem={item} formItemLayout={formItemLayout}/>
                            )
                        })
                    }

                    <Form.Item label={FormPackage._label} {...formItemLayout}>
                        <Row>
                            <Col span={4}>
                                <Button type="primary" htmlType="submit" className="login-form-button">
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
};

export default Form.create({name: "login"})(FormPackage);
