'use client';

import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { MoonStar, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <Button size={'icon'} className="bg-mytext hover:bg-mytext/60">
        Loading
      </Button>
    );
  }

  if (resolvedTheme === 'dark') {
    return (
      <Button
        onClick={() => setTheme('light')}
        size="icon"
        className="bg-mytext hover:bg-mytext/60"
      >
        <Sun />
      </Button>
    );
  }

  if (resolvedTheme === 'light') {
    return (
      <Button
        onClick={() => setTheme('dark')}
        size="icon"
        className="bg-mytext hover:bg-mytext/60"
      >
        <MoonStar />
      </Button>
    );
  }
};

export default ThemeToggle;
