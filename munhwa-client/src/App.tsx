import { RouterProvider } from "react-router-dom";
import { Global, ThemeProvider } from "@emotion/react";
import router from "@constants/router";
import reset from "@styles/reset.ts";
import { defaultTheme } from "@styles/theme.ts";
import "@locales/i18n.ts";

export default function App() {
  return (
    <>
      <Global styles={reset} />
      <ThemeProvider theme={defaultTheme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}
