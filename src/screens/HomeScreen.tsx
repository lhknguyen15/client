import { useDispatch } from "react-redux";
import { removeAuth } from "../redux/reducers/authReducer";
import { Button } from "antd";

export const HomeScreen = () => {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(removeAuth({}));
  };
  return (
    <div>
      <Button onClick={logout}>Logout</Button>
    </div>
  );
};
