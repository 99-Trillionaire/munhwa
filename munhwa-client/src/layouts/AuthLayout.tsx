import { css } from "@emotion/react";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div
      css={css`
        max-width: 100%;
        width: 100%;
        padding: 0;
        margin: 0;
        //height: auto;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
      `}
    >
      <Outlet />
    </div>
  );
}
