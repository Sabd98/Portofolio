"use client";
import { createContext, useState, useContext, useEffect } from 'react';

type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState(''); // Default value for SSR
  
  useEffect(() => {
    // Client-side only code
    const savedTheme = localStorage.getItem('theme') || '';
    setTheme(savedTheme);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === '' ? 'dark' : '';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.className = newTheme;
  };

  // if (!mounted) {
  //   // Return empty div during SSR to match client initial render
  //   return <div className={theme} ></div>;
  // }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// export function ThemeProvider({ children }: { children: React.ReactNode }) {
//   const [theme, setTheme] = useState("");
  
//   useEffect(() => {
//     // Apply theme class to html element
//     document.documentElement.className = theme;
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme((prev) => (prev === "" ? "dark" : ""));
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }

