export const metadata = {
  title: 'BaanBot Chanthaburi',
  description: 'โรงเรียนสอนหุ่นยนต์ จังหวัดจันทบุรี',
}

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  )
}