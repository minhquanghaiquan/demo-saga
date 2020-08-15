const validate = values => {
     const errors = {};
     const { title, description} = values;
     if (!title) {
       errors.title = 'Vui lòng nhập tiêu đề';
     } else if (title.trim() && title.trim().length < 5) {
       errors.title = 'Tiêu đề phải từ 5 ký tự';
     }
     return errors;
   };
   
export default validate;