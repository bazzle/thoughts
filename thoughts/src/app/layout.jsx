import "./global.css";
import Header from "./components/header";
import Footer from "./components/footer";

export const metadata = {
	title: "My thoughts",
	description: "My thoughts, thats it",
};

export default function RootLayout({ children }) {

	return (
		<html lang="en">
			<body>
				<Header/>
				{children}
				<Footer/>
			</body>
		</html>
  );
}
