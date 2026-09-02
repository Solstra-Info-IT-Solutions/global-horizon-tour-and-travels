import InitialLoader from "@/components/InitialLoader";

import AnnouncementBar from "@/components/AnnouncementBar";
import FloatingActions from "@/components/FloatingActions";
import CookieConsent from "@/components/CookieConsent";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <InitialLoader>
          <AnnouncementBar />

          {children}

          <FloatingActions />

          <CookieConsent />
        </InitialLoader>
      </body>
    </html>
  );
}