# Simple-export-excel
Parse the json oject to excel

# Install

```sh
npm install simple-export-excel --save
```

# Usage

```js
    .exportXls(headers, data, sheetsname)
```
You have to specify headers and data, and pass them to .exortXls 
```js
var header = [
    ['item','price']
]

var data = [
    [
        {
            'item':'apple',
            'price':1000
        },
        {
            'item':'banana',
            'price':1000
        }
    ],//sheet 1
]
```
 


For example
```js
var xls = require('simple-export-excel');
var headers = 
[
    [
        "item", "price"
    ],
    [
        "name", "id"
    ]
]

var data = [
                [
                    {
                        'item':'apple',
                        'price':1000
                    },
                    {
                        'item':'banana',
                        'price':1000
                    }
                ],//sheet 1
                [
                    {
                        'name':'andy',
                        'id':112
                    },
                    {
                        'name':'bob',
                        'id':90,
                    }
                ]//sheet 2
            ]

var ret =  xls.exportXls( headers, data);
var fs = require('fs');
fs.writeFileSync('C:\\Users\\andyl\\Documents\\acer-ai\\src\\upload-folder\\test.xlsx',ret,'binary')
```

Output:

(sheet_0)
|item|price|
| :------------- | :--------- |
|apple|1000|
|banana|1000

(sheet_1)
|name|id|
| :------------- | :--------- |
|andy|112|
|bob|90|

Note: output will be a binary data. You can use fs.writeFile to write these into a file. 

```js
var fs = require('fs');
fs.writeFileSync('C:\\Users\\andyl\\Documents\\acer-ai\\src\\upload-folder\\test.xlsx',ret,'binary')
```


# Notice

In the following case:
Because we don't specify 'year' in the headers, simple-export-excel will ignore the 'year'  during the parsing process.


```js
var xls = require('simple-export-excel');
var headers = 
[
    [
        "name", "id"
    ],
 
]

var data = [

                [
                    {
                        'name':'andy',
                        'id':112
                    },
                    {
                        'name':'bob',
                        'id':90,
                        'year':'2017',
                    }
                ]//sheet 1
            ]

var ret =  xls.exportXls( headers, data);
var fs = require('fs');
fs.writeFileSync('C:\\Users\\andyl\\Documents\\ai\\src\\upload-folder\\test.xlsx',ret,'binary')
```

the Output will be


|name|id|
| :------------- | :--------- |
|andy|112|
|bob|90|


