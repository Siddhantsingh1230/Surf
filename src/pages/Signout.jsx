import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signoutAsync } from "../slices/AuthSlice";
import { Navigate } from "react-router-dom";
import Spinner from "../components/Spinner";

const Signout = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  useEffect(() => {
    dispatch(signoutAsync(user.id));
  }, []);

  return <>{user ? <Spinner /> : <Navigate to="/" replace={true} />}</>;
};

export default Signout;
