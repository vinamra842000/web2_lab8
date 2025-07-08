// app/ThemeToggleComponent.tsx
'use client';

import React from 'react';
import { useTheme } from './theme-context';

export default function ThemeToggleComponent() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="p-4 bg-background text-foreground">
      <h2 className="text-2xl mb-4">Current Theme: {theme}</h2>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-primary text-primary-foreground rounded"
      >
        Toggle Theme
      </button>
    </div>
  );
}
