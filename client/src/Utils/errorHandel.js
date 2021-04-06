const handelError = (func, err) => {
  func(err.response.data.message || 'Something went wrong!');
};
export default handelError;
