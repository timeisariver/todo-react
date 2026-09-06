import "./globals.css";

export const metadata = {
  title: "Todo",
  description: "タスクの追加・編集・削除ができる Todo アプリ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
