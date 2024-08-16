import { Inter } from "next/font/google";
import "./global.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "My thoughts",
	description: "My thoughts, thats it",
};

export default function RootLayout({ children }) {
	const header = (
		<header>
			<h1>
				<Link href={'/'}>My Thoughts</Link>
			</h1>
		</header>
	)
	const footer = (
		<p>Just my thoughts</p>
	)
	return (
		<html lang="en">
			<body className={inter.className}>
				{header}
				{children}
				{footer}
			</body>
		</html>
  );
}
