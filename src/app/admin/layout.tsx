import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Content Manager',
  robots: {
    index: false,
  },
  viewport: 'width=device-width, initial-scale=1.0',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link href="/admin/config.yml" type="text/yaml" rel="cms-config-url" />
      {children}
    </>
  );
}