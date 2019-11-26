import React from "react";
import {Form, InputNumber, Radio, Checkbox, Select, Switch, DatePicker} from "antd";
import Input from "antd/lib/input";
import FORM_TYPE from "./enum";
import Utils from "./../../libs/utils";

class FormItem  extends React.Component {
    static _placeholder = '请输入内容';
    static _label = ' ';
    static _sourceErrorMessage = 'source.item expect an array, not be null or []';
    static _valueBeBooleanErrorMessage = 'value expect a boolean, not be string or other';
    static _datePickerPlaceholder = '请选择日期';

    constructor(props) {
        super(props);
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
                if (!dataItem.source.length) {
                    throw new Error(`${dataItem.type} ${FormItem._sourceErrorMessage}`);
                }
                return (
                    <Radio.Group>
                        {
                            dataItem.source.map(item => {
                                return <Radio value={item.value} key={item.value}>
                                    {item.label}
                                </Radio>
                            })
                        }
                    </Radio.Group>
                )
            },
            [FORM_TYPE.CHECKBOX.TYPE]: () => {
                if (!dataItem.source.length) {
                    throw new Error(`${dataItem.type} ${FormItem._sourceErrorMessage}`);
                }
                return (
                    <Checkbox.Group options={dataItem.source}/>
                )
            },
            [FORM_TYPE.SELECT.TYPE]: () => {
                if (!dataItem.source.length) {
                    throw new Error(`${dataItem.type} ${FormItem._sourceErrorMessage}`);
                }
                return (
                    <Select
                        style={{ width: '50%' }}
                    >
                        {
                            dataItem.source.map(item => {
                                return (
                                    <Select.Option value={item.value} key={item.value}>{item.label}</Select.Option>
                                )
                            })
                        }
                    </Select>
                )
            },
            [FORM_TYPE.SWITCH.TYPE]: () => {
                if (typeof dataItem.value !== 'boolean') {
                    throw new Error(`${dataItem.type} ${FormItem._valueBeBooleanErrorMessage}`)
                }
                return (
                    <Switch checked={dataItem.value} onChange={ (v, e) => {dataItem.value = v}}/>
                )
            },
            [FORM_TYPE.DATE_PICKER.TYPE]: () => {
                return (
                    <DatePicker placeholder={FormItem._datePickerPlaceholder}/>
                )
            }
        }
    };

    render() {
        const {getFieldDecorator} = this.props.HForm;
        const {formItemLayout, dataItem} = this.props;
        const layout = dataItem.itemLayout ? dataItem.itemLayout : formItemLayout;

        const initialValue = {
            initialValue: dataItem.value
        };
        const rules = {
            rules: dataItem.rules ? dataItem.rules : [{required: true, message: FormItem._placeholder}]
        };
        const validateTrigger = {
            validateTrigger: (dataItem.type === "CHECKBOX" || dataItem.trigger === 'onChange') ? 'onChange' : 'onBlur'
        };

        const config = Object.assign({}, dataItem.type !== 'DATE_PICKER' ? initialValue : {}, rules, validateTrigger);
        // console.log(config);

        return (
            <div>
                <Form.Item label={dataItem.label ? dataItem.label: FormItem._label} {...layout}>
                    {getFieldDecorator(dataItem.name, config)(
                        this.getPureFormItem(dataItem)[dataItem.type||'INPUT'](),
                    )}
                </Form.Item>
            </div>
        )
    }
}

export default FormItem;