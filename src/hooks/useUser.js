import { useSelector } from 'react-redux';
import { selectUser, selectIsLoggedIn, selectIsRefreshing } from '../redux/user/userSelectors';

export const useUser = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
