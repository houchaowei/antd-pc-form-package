# Coding...... 

## antd-pc-form-package

Through the strategy pattern, the form encapsulation is designed to simplify the development difficulty of antd-design on PC.

## Target Plan

| Form Type Plan | Progress | Version  |
|:---------------|:---------|:---------|
| Input          | done     | v1.0.0   |
| Number Input   | coding   |          |
| Radio          |          |          |
| Checkbox       |          |          |
| Select         |          |          |
| ...            |          |          |

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
| Property    | Description                  | Type             | Default                                         | Required |
|:------------|:-----------------------------|:-----------------|:------------------------------------------------|:---------|
| key         | Unique identification number | Number           |                                                 | True     |
| type        | Form type                    | String           | INPUT                                           | False    |
| name        | Name                         | String           |                                                 | True     |
| label       |                              | String           |                                                 | False    |
| value       |                              | Number \| string |                                                 | False    |
| placeholder |                              | String           | FormItem._placeholder                           | False    |
| rules       |                              | Object           | {required: true, message:FormItem._placeholder} | False    |
| icon        |                              | Component        |                                                 | False    |
| trigger     | Validate trigger             | String           | 'onBlur'                                        | False    |

### 'type' enumerations

| Type         | Description |
|:-------------|:------------|
| INPUT        | 文本输入框       |
| NUMBER_INPUT | 数字输入框       |
| RADIO        | 单选框         |

## API

| Property      | Description     | Type             | Default | Version  |
|:--------------|:----------------|:-----------------|:--------|:---------|
| dataSource    | form configs    | object           |         | v1.0.0   |
| getFormValues | get form values | Function(values) |         | v1.0.0   |

# Contact
- Email: newweber@163.com
