# Coding...... 

## antd-pc-form-package

Through the strategy pattern, the form encapsulation is designed to simplify the development difficulty of antd-design on PC.

## Target Plan

| Form Type Plan | Progress | Version |
|:---------------|:---------|:--------|
| Input          | done     | v1.0.0  |
| Number Input   | done     | v1.0.0  |
| Radio          | done     | v1.0.0  |
| Checkbox       | done     | v1.0.0  |
| Select         | done     | v1.0.0  |
| Switch         | done     | v1.0.0  |
| Date Picker    | done     | v1.0.0  |
| Tree Select    | coding   |         |
| ...            |          |         |

## Dependency
```bash
$ npm install antd --save-dev
```

## Usage
``` bash
$ npm install antd-pc-form-package
```
```javascript
import {FormPackage} from "antd-pc-form-package";

<FormPackage dataSource={dataSource} getFormValues={this.getFormValues}/>
```

### dataSource
```javascript
{ 
    key: 1,
    type: 1,
    name: 'name',
    label: 'name', 
    value: '', 
    placeholder: 'input name', 
    rules: [
        {required: true, message: 'input name'},
    ], 
    icon: <Icon type="user" style={{ color: 'red' }} />,
},
```

| Property    | Description                              | Type                        | Default                                         | Required |
|:------------|:-----------------------------------------|:----------------------------|:------------------------------------------------|:---------|
| key         | Unique identification number             | Number                      |                                                 | True     |
| type        | Form type                                | String                      | INPUT                                           | False    |
| name        | Name                                     | String                      |                                                 | True     |
| label       |                                          | String                      |                                                 | False    |
| value       |                                          | Number \| string \| Boolean |                                                 | False    |
| placeholder |                                          | String                      | FormItem._placeholder                           | False    |
| rules       |                                          | Object                      | {required: true, message:FormItem._placeholder} | False    |
| icon        |                                          | Component                   |                                                 | False    |
| trigger     | Validate trigger                         | String                      | 'onBlur'                                        | False    |
| source      | radio, checkbox, select etc must be need | Array[]                     |                                                 | False    |

### 'type' enumerations

| Type         | Description |
|:-------------|:------------|
| INPUT        | 文本输入框       |
| NUMBER_INPUT | 数字输入框       |
| RADIO        | 单选框         |
| CHECKBOX     | 多选框         |
| SELECT       | 下拉框         |
| SWITCH       | 开关          |
| DATE_PICKER  | 日期选择框       |
| TREE_SELECT  | 树选择器        |

## API

| Property      | Description     | Type             | Default | Version  |
|:--------------|:----------------|:-----------------|:--------|:---------|
| dataSource    | form configs    | object           |         | v1.0.0   |
| getFormValues | get form values | Function(values) |         | v1.0.0   |


# Contact
- Email: newweber@163.com
- Github: https://github.com/houchaowei/antd-pc-form-package
- Issues: https://github.com/houchaowei/antd-pc-form-package/issues
