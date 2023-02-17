import { useNavigate } from 'react-router-dom';
import { useGetUsersQuery } from '../features/auth/authSlice';
import { Report } from 'notiflix';

const useLoginUser = () => {
  const navigate = useNavigate();
  const { data: users } = useGetUsersQuery();

  const validationUser = (email, password) => {
    return users.find(user => {
      return user.email === email && user.password === password;
    });
  };

  const onSubmitForm = ({ email, password }) => {
    const user = validationUser(email, password);
    localStorage.setItem('userId', user.id);

    user
      ? navigate(`/user/${user.id}`)
      : Report.failure(
          'User or password is incorrect.',
          'Please enter a valid email address and password.'
        );
  };

  return { onSubmitForm };
};

export default useLoginUser;
