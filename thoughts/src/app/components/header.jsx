import Link from "next/link";

export default function Header({ isHomePage }){
	return (
		<header className="header">
			<div className="container--narrow header__inner">
				<span className="header__site-name">
				{
					isHomePage ? <h1>My Thoughts</h1> : <Link href={'/'}>My Thoughts</Link>
				}
				</span>
				<hr className="header__line" />
			</div>
		</header>
	)
}