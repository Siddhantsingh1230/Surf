import React, { useEffect } from "react";
import $ from "jquery";

const RippleBtn = ({ text, children ,classes }) => {
  useEffect(() => {
    function createRipple(y, x) {
      const ripple = `<div class="circle" style="top:${y}px;left:${x}px;"></div>`;
      const _ripple = $(ripple);
      $(".ripple").append(_ripple);
      setTimeout(() => _ripple.remove(), 900);
    }

    $(".mui-button").mousedown((e) => {
      const offset = $(e.target).offset();
      createRipple(e.pageY - offset.top, e.pageX - offset.left);
    });
  }, []);
  return (
    <>
      <button className={`mui-button flex justify-center items-center cursor-pointer rounded-lg ${classes}`}>
        <div className="ripple"></div>
        {children?children:<p className="text-white font-medium">{text}</p>}
      </button>
    </>
  );
};

export default RippleBtn;
