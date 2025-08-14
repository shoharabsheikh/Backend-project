class ApiResponse {
  constructor(status, message, data = null) {
    this.status = status;
    this.message = message;
    this.data = data;
    this.success = status >= 200 && status < 300; // Determine success based on status code
  }

  static success(data = null, message = 'Request was successful') {
    return new ApiResponse(200, message, data);
  }

  static error(message = 'An error occurred', status = 500) {
    return new ApiResponse(status, message);
  }
}