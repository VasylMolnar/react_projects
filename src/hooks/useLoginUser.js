import { Report } from 'notiflix';
import { useGetUsersQuery } from '../features/auth/authSlice';

const useLoginUser = () => {
  //cosnt users = useSelector(selectAllUsers) add this code is we get users from (postsAdapter authSlice.js)

  const { data: users } = useGetUsersQuery(); //this we use because we dont have server (validation UserName and Password)

  const validationUser = (email, password) => {
    return users.find(user => {
      return user.email === email && user.password === password;
    });
  };

  const onSubmitForm = ({ email, password }) => {
    const user = validationUser(email, password);

    if (user) {
      sessionStorage.setItem('userId', user.id);
      document.location.reload();
    } else {
      Report.failure(
        'User or password is incorrect.',
        'Please enter a valid email address and password.'
      );
    }
  };

  return { onSubmitForm };
};

export default useLoginUser;
