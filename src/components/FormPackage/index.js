import React from 'react';
import {Form, Input, Icon, Button, InputNumber, Select} from "antd";
import 'antd/dist/antd.min.css';
import FormItem from "./formChild";
import Utils from "./../../libs/utils";

class FormPackage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            formItemLayout: {
                labelCol: { span: 8 },
                wrapperCol: { span: 10 },
            },
        };
    }

    componentDidMount() {
        // const {dataSource} = this.props;
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

    setValue = value => {
        this.props.setValue(value);
    };

    render() {
        // const { getFieldDecorator } = this.props.form;
        const {dataSource} = this.props;
        const {formItemLayout} = this.state;
        return (
            <div>
                <Form className="login-form" colon={false} onSubmit={this.handleSubmit}>
                    {
                        dataSource.map(item => {
                            return (
                                <FormItem key={item.key} HForm={this.props.form} dataItem={item} formItemLayout={formItemLayout} setValue={this.setValue}/>
                            )
                        })
                    }

                    <Form.Item label=' ' {...formItemLayout}>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            确定
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
};

export default Form.create()(FormPackage);
