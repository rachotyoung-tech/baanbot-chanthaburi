export const metadata = {
  title: 'BaanBot Chanthaburi',
  description: 'โรงเรียนสอนหุ่นยนต์ จังหวัดจันทบุรี',
}

import type { ReactNode } from "react";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}