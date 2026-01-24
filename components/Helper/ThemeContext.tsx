"use client";
import { createContext, useState, useContext, useEffect, useMemo } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState(''); // '' for light, 'dark' for dark
  
  useEffect(() => {
    // Client-side only code
    const savedTheme = localStorage.getItem('theme') || '';
    setTheme(savedTheme);
    setMounted(true);
    // Apply class to body/html for Tailwind dark mode
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === '' ? 'dark' : '';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update DOM for Tailwind
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Create MUI Theme based on current state
  const muiTheme = useMemo(() => createTheme({
    palette: {
      mode: theme === 'dark' ? 'dark' : 'light',
      primary: {
        main: '#3b82f6', // blue-500 equivalent
      },
      background: {
        default: theme === 'dark' ? '#1f2937' : '#f3f4f6', // gray-800 : gray-100
        paper: theme === 'dark' ? '#374151' : '#ffffff',   // gray-700 : white
      },
    },
    typography: {
      fontFamily: 'inherit', // Inherit from Next.js font
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
          },
        },
      },
    },
  }), [theme]);

  // Always provide context, even during SSR/mounting
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MuiThemeProvider theme={muiTheme}>
        {/* Render children only when mounted to prevent hydration mismatch if needed, 
            OR render always. Given Nav needs context immediately, we must wrap it. 
            Hydration mismatch on theme is acceptable or handled by CSS class. 
            If specific components need to wait for mount, handle inside them. */}
        {children}
      </MuiThemeProvider>
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

