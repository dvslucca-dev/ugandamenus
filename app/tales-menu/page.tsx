import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tales Lounge Menu - Ugandan Menus",
  description: "Browse the latest menu from Tales Lounge in Uganda.",
};

export default function TalesMenu() {
  return (
    <iframe
      src="https://drive.google.com/file/d/1KPbSXxKQ4QGvYwT4cCkkJ1klEDyKbFD1/preview"
      className="w-full h-screen border-0"
      title="Tales Lounge Menu PDF"
      allow="autoplay"
    />
  );
}
