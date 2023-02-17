import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useRegisterUserMutation } from '../features/auth/authSlice';

function useRegisterUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [registerUser] = useRegisterUserMutation();

  const onSubmitForm = ({ name, email, password }) => {
    dispatch(registerUser({ name, email, password }));
    navigate('/');
  };

  return { onSubmitForm };
}

export default useRegisterUser;
