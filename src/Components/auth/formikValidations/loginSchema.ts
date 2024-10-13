import * as Yup from 'yup';

const LoginSchema: any = Yup.object().shape({
  email: Yup.string().required('Email is required').test('', function (value) {
    const strongEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (value) {
      if (!strongEmailRegex.test(value)) {
        return this.createError({ message: "Please enter a correct email" })
      }
      return true
    }
  }),
  password: Yup.string().required("Password is required").test('', function (value) {
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#,])[A-Za-z\d@$!%*?&#,]{8,}$/;
    if (value) {
      if (!strongPasswordRegex.test(value)) {
        return this.createError({ message: "Password must be strong" })
      }
      return true
    }
  })
});

export default LoginSchema