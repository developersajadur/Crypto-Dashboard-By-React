import MainLayout from "./components/layouts/MainLayout/MainLayout";
import { ThemeProvider } from "next-themes";

const App = () => {
  return (
    <div className="flex h-screen w-screen flex-col">
      <ThemeProvider
        attribute="class"
        enableSystem={true}
        defaultTheme="system"
      >
        <MainLayout />
      </ThemeProvider>
    </div>
  );
};

export default App;
