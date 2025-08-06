import { Toaster } from "sonner";
import MainLayout from "./components/layouts/MainLayout/MainLayout";
import { ThemeProvider } from "next-themes";

const App = () => {
  return (
    <ThemeProvider attribute="class" enableSystem={true} defaultTheme="system">
      <div className="flex h-screen w-screen flex-col">
        <MainLayout />
        <Toaster richColors position="top-right" />
      </div>
    </ThemeProvider>
  );
};

export default App;
