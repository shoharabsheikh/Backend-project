class ApiErrors extends Error {
    constructor(
        message = 'Something went wrong', 
        statusCode,
        errors = [],
        stack = null
    ) {      
    super(message);     
    this.statusCode = statusCode;
    this.errors = errors; // Array of error details
    this.stack = stack; // Optional stack trace
    this.data = null; // Optional additional data
    this.success = false; // Indicate failure
    if (stack) {
        this.stack = stack; // Capture the stack trace if provided
    }else {
        Error.captureStackTrace(this, this.constructor); // Capture stack trace if not provided
    }
}
}

export { ApiErrors };