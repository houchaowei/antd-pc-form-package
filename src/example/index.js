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
            dataSource: [
                {
                    key: 1, // key
                    type: 'INPUT', // 表单类型
                    name: 'name', // 表单唯一name
                    label: '姓名', // 表单label
                    value: '', // 表单值
                    placeholder: '请输入姓名', // placeholder
                    trigger: 'onBlur', // 获取值的时机，默认：‘onBlur’
                    icon:<Icon type="user" style={{ color: 'red' }} />,
                    rules: [
                        {required: true},
                        {validator: function(rule, value, callback) {
                                if (value) {
                                    if (/[\u4e00-\u9fa5]{2,}/.test(value)) {
                                        callback()
                                    } else {
                                        callback('请输入正确的姓名')
                                    }
                                } else {
                                    callback('请输入姓名')
                                }
                            }}
                    ], // 表单规则
                },
                {
                    key: 2, // key
                    type: 'NUMBER_INPUT', // 表单类型
                    name: 'age', // 表单唯一name
                    label: '年龄', // 表单label
                    value: '', // 表单值
                    placeholder: '请输入年龄', // placeholder
                    trigger: 'onChange', // 获取值的时机，默认：‘onBlur’
                    rules: [
                        {required: true, message: '请输入年纪'}
                    ], // 表单规则
                    itemLayout: {
                        labelCol: { span: 8 },
                        wrapperCol: { span: 5 },
                    },
                    icon:<Icon type="user" style={{ color: 'red' }} />,
                },
                // {
                //     key: 2, // key
                //     type: 2, // 表单类型
                //     name: 'age', // 表单唯一name
                //     label: '年纪', // 表单label
                //     value: '', // 表单值
                //     placeholder: '请输入年纪', // placeholder
                //     trigger: 'onBlur', // 获取值的时机，默认：‘onBlur’
                //     rules: [
                //         {required: true, message: '请输入年纪'}
                //     ], // 表单规则
                //     unit: '岁', // 表单后缀
                // },
                // {
                //     key: 3,
                //     type: 3,
                //     name: 'select',
                //     label: '下拉框',
                //     value: 2,
                //     placeholder: '请选择省份',
                //     rules: '',
                //     unit: '', // 表单后缀
                //     dataSource: [
                //         {value: 1, text: '北京'},
                //         {value: 2, text: '天津'},
                //     ]
                // },
            ]
        }
    }

    setValue = (value) => {
        const {dataSource} = this.state;
        const a = Utils.deep_clone(dataSource);
        let res = a.map(item => {
            if (item.name === value.name) {
                return value;
            } else {
                return item
            }
        });

        this.setState({
            dataSource: res
        }, () => {
            console.log('pp---', this.state);
        });
    };

    getFormValues = (values) => {
        // const {dataSource} = this.state;
        // const obj = Utils.deep_clone(dataSource);
        //
        // let a = obj.map((item, index) => {
        //     item.value = Object.values(values)[index];
        //     return item;
        // });
        //
        // console.log('---->a:', a);
        // this.setState({dataSource: a}, () => {
        //     console.log('++++++', this.state);
        // });
        console.log('get form values:', values);
    };
    
    render() {
        const {dataSource} = this.state;
        return (
            <div style={{margin: '20px'}}>
                <FormPackage dataSource={dataSource} getFormValues={this.getFormValues} setValue={this.setValue}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
