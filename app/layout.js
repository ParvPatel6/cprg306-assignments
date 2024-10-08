import "./globals.css";

export const metadata = {
  title: "Web Dev 2",
  description: "Web Dev 2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-900">
        {children}
      </body>
    </html>
  );
}
