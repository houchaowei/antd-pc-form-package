# Coding...... 

## antd-pc-form-package

Through the strategy pattern, the form encapsulation is designed to simplify the development difficulty of antd-design on PC.

## Usage
// ...

## Instructions
> dataSource instructions
```javascript
{ 
    key: 1, // key
    type: 1, // 表单类型
    name: 'name', // 表单唯一name
    label: '姓名', // 表单label
    value: '', // 表单值
    placeholder: '请输入姓名', // placeholder
    rules: [
        {required: true, message: '请输入姓名'},
    ], // 校验规则
    icon: <Icon type="user" style={{ color: 'red' }} />,
    unit: '', // 表单后缀单位
},
```

> type enumeration
```javascript
1：文本输入框
2：数字输入框

```