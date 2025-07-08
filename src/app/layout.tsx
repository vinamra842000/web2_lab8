// app/layout.tsx
import { ThemeProvider } from './theme-context';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Wrap the app with the ThemeProvider */}
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
