// app/page.tsx
import ThemeToggleComponent from './ThemeToggleComponent';

export default function HomePage() {
  return (
    <div className="container">
      <h1 className="text-3xl">Welcome to the Themed App!</h1>
      <ThemeToggleComponent />
    </div>
  );
}
