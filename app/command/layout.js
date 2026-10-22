import "./command.css";

export const metadata = {
  title: { default: "EntrepX Command", template: "%s | EntrepX Command" },
  robots: { index: false, follow: false },
};

export default function CommandRoot({ children }) {
  return <div className="cmd">{children}</div>;
}
