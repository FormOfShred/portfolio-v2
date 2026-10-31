import { ThemeProvider } from "./components/custom/theme-provider";
import ProfileCard from "./features/profile-card/profile-card";

function App() {

  return (
    <ThemeProvider storageKey="vite-ui-theme">
      <div className="m-2">
        <ProfileCard />
      </div>
    </ThemeProvider>
  );
}

export default App
