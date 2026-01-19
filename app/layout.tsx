import Script from 'next/script';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sourceCodePro.variable}`}>
        <Script
          id="base-app-id"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              const meta = document.createElement('meta');
              meta.name = 'base:app_id';
              meta.content = '696d16d7c0ab25addaaaf46a';
              document.head.appendChild(meta);
            `
          }}
        />
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}