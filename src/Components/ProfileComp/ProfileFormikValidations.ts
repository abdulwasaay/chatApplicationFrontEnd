import * as Yup from 'yup';

const profileSchema: any = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name is too Short')
    .max(50, 'Name is too Long'),
    profileUrl: Yup.string().test('', function (value) {
        console.log(value)
        return true
    })
});

export default profileSchema