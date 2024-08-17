import "./global.css";
import Footer from "./components/footer";

export const metadata = {
	title: "My thoughts",
	description: "My thoughts, thats it",
};

export default function RootLayout({ children }) {

	return (
		<html lang="en">
			<body>
				{children}
				<Footer/>
			</body>
		</html>
  );
}
