# What is this?

A simple http response library to reduce code and simplify response handling in http request response cycle

# Installation

`npm install oba-http-response --save`

# Usage

```
    The `response` function takes five(5) arguments namely:

    res : The http response argument of the containing function, ie. from `(req, res)`

    statusCode: The exact status code for the response, eg. `200`, `404`, `500`

    data: The data object to pass in the response, pass in `null` to omit

    error: The error object for an error response, pass in `null` to omit

    message: An optional message to pass into the response


    e.g 

    `return response(res, statusCode)` omits the data object, error object and message
    `return response(res, statusCode, data)` omits the error object and message
    `return response(res, statusCode, data, error)` omits the error object and message (data takes default)
    ``return response(res, statusCode, data, error, message)` omits the error object (data takes default)
    `return response(res, statusCode, null, error)` returns the error object
    `return response(res, statusCode, null, error, message)` returns the error object and message
    `return response(res, statusCode, null, null, message)` returns only the message
```

# Examples

```
import { response } from 'oba-http-response';

    exports.getUsers = async(req, res) => {
        try {
            const users = await Users.findAll();
        
            response(res, 200, { users }, null, 'List of users');
        }catch(error) {
            if(error.message.search('Validation') >= 0) {
                return response(res, 400, null, 'Email not valid');
            }
            response(res, 500, null, error.message, 'Error in getting users');
        }
    }; 



const response = require('oba-http-response'); 
    
    exports.getUsers = async(req, res) => {
        try {
            const users = await Users.findAll();
        
            response(res, 200, { users }, null, 'List of users');
        }catch(error) {
            if(error.message.search('Validation') >= 0) {
                return response(res, 400, null, 'Email not valid');
            }
            response(res, 500, null, error.message, 'Error in getting users');
        }
    };

```