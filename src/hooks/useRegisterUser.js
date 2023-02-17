import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useRegisterUserMutation } from '../features/auth/authSlice';
import { Report } from 'notiflix';

function useRegisterUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [registerUser] = useRegisterUserMutation();

  const onSubmitForm = ({ name, email, password }) => {
    try {
      dispatch(() => registerUser({ name, email, password }));
      navigate('/');
      Report.success('Success Register', '');
    } catch (err) {
      Report.error(err);
    }
  };

  return { onSubmitForm };
}

export default useRegisterUser;
