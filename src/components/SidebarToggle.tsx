'use client';

import React, { useEffect, useState } from 'react';
import { Switch } from './ui/switch';
import { useTheme } from 'next-themes';

const SidebarToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(resolvedTheme === 'dark');
  }, [resolvedTheme]);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div>Loading</div>;
  }

  if (resolvedTheme === 'dark') {
    return (
      <Switch checked={checked} onCheckedChange={() => setTheme('light')} />
    );
  }
  if (resolvedTheme === 'light') {
    return (
      <Switch checked={checked} onCheckedChange={() => setTheme('dark')} />
    );
  }
};

export default SidebarToggle;
