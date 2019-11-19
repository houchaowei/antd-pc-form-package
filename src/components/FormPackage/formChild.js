import React from "react";
import {Form, InputNumber, Select} from "antd";
import Input from "antd/lib/input";
import FORM_TYPE from "./enum";
import Utils from "./../../libs/utils";

class FormItem  extends React.Component {
    static _placeholder = '请输入内容';
    static _label = ' ';
    // static state;
    constructor(props) {
        super(props);

        this.state = {
            // ...
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        // console.log('formChild', this.props.dataItem);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return true
    }


    // select change handle
    handleChange (value) {
        console.log(`selected ${value}`);
        const {dataItem, setValue} = this.props;
        let data = Utils.deep_clone(dataItem);
        data.value = value;
        setValue(data)
    }

    getPureFormItem (dataItem) {
        return {
            [FORM_TYPE.INPUT.TYPE]: () =>{
                return (
                    <Input
                        prefix={dataItem.icon}
                        placeholder={dataItem.placeholder?dataItem.placeholder:FormItem._placeholder}
                    />
                )
            },
            [FORM_TYPE.NUMBER_INPUT.TYPE]: () => {
                return (
                    <InputNumber prefix={dataItem.icon} style={{width: '50%'}}
                                 placeholder={dataItem.placeholder?dataItem.placeholder:FormItem._placeholder}
                    />
                )
            },
            [FORM_TYPE.RADIO.TYPE]: () => {
                return (
                    <Select onChange={this.handleChange}>
                        {
                            dataItem.dataSource.map(item => {
                                return <Select.Option value={item.value} key={item.value}>{item.text}</Select.Option>
                            })
                        }
                    </Select>
                )
            },
        }
    };

    render() {
        const {getFieldDecorator} = this.props.HForm;
        const {formItemLayout, dataItem} = this.props;
        const layout = dataItem.itemLayout ? dataItem.itemLayout : formItemLayout;
        return (
            <div>
                <Form.Item label={dataItem.label?dataItem.label:FormItem._label} {...layout}>
                    {getFieldDecorator(dataItem.name, {
                        initialValue: dataItem.value,
                        rules: dataItem.rules?dataItem.rules:[{required: true, message:FormItem._placeholder}],
                        validateTrigger: dataItem.trigger === 'onChange' ? 'onChange' : 'onBlur',
                    })(
                        this.getPureFormItem(dataItem)[dataItem.type||'INPUT'](),
                    )}
                </Form.Item>
            </div>
        )
    }
}

export default FormItem;