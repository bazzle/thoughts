export default function Footer(){
	const currentYear = new Date().getFullYear();
	return (
		<footer className="footer">
			<div className="container">
				<p className="footer__line">&copy; Bazzle {currentYear}</p>
			</div>
		</footer>
	)
}