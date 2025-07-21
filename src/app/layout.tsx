import theme from '@/app/theme';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Operations Gateway',
  description:
    'Operations Gateway is a centralised platform for exploring, inspecting, and exporting operational data. It supports scalar values, images, waveforms, and vector data with dynamic visualisation tools and session-based workflows, enabling repeatable system insight and analysis.',
  icons: {
    icon: '/operationsgateway-project/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <main>{children}</main>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
