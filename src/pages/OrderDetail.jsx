import React from "react";
import { Navigate, useParams } from "react-router-dom";

const OrderDetail = () => {
  const { id } = useParams();
  return (
    <>
      {!id && <Navigate to="/orders" replace={true} />}
      <div className="bg-whit">hello</div>
    </>
  );
};

export default OrderDetail;
