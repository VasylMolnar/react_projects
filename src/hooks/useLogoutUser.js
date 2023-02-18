import { useNavigate } from 'react-router-dom';

function useLogoutUser() {
  const navigate = useNavigate();
  console.log('Hello');

  const logout = () => {
    console.log('hi');
    sessionStorage.clear();
    document.location.reload();
    navigate('/');
  };

  return logout;
}

export default useLogoutUser;
