import { ThemeProvider } from "./context/darklight_theme.jsx";
import Start from "./Dashboard";

export default function Home() {
  return (
    <div>
      <ThemeProvider>
        <Start />
      </ThemeProvider>
    </div>
  );
}
