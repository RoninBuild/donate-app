'use client';

import { useEffect } from 'react';

export default function BaseMetaTag() {
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'base:app_id';
    meta.content = '696d16d7c0ab25addaaaf46a';
    document.head.appendChild(meta);

    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return null;
}