const response = (res, statusCode, data, error, message) => {
 
    return (statusCode < 400) ? (data ? res
                                        .status(statusCode)
                                        .send({ success: true, data, message })
                                      : res
                                        .status(statusCode)
                                        .send({ success: true, message })
                                )
                                : 
                                (res.status(statusCode)
                                .send({ success: false, error })
                                )
    }
    
    module.exports.response = response;