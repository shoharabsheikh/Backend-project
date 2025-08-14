const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch(err=>next(err))
    };
};
export {asyncHandler};

// const asyncHandler = (frn) =>{}
// const asyncHandler = (frn) =>{() => {}}
// const asyncHandler = (frn) => async() => {}

    // WE CAN USE THIS TO HANDLE ASYNC ERRORS IN EXPRESS ROUTES
// const asyncHandler = (fn) => async (req, res, next, err) => {
//     try {
        
//     }   catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: error.message || 'Internal Server Error',
//             error
//         });
        
//     }}