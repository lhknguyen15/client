import { useDispatch } from "react-redux";
import { removeAuth } from "../redux/reducers/authReducer";
import { Button } from "antd";
import handleAPI from "../apis/handleAPI";

export const HomeScreen = () => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(removeAuth({}));
  };

  const getProducts = async () => {
    const api = `/storage/products`;

    try {
      const res = await handleAPI(api);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Button onClick={logout}>Logout</Button>
      <Button onClick={getProducts}>Get Products</Button>
    </div>
  );
};
