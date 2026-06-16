import { RouterProvider } from "react-router";
import { ThemeProvider } from "./components/ThemeProvider";
import { router } from "./routes";

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
