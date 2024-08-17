import Link from "next/link";

export default function Header({ isHomePage }){
	return (
		<header className="header">
			<div className="container--narrow header__inner">
				{
					isHomePage ? (
						<h1 className="header__site-name">
							My Thoughts
						</h1>
					) : (
						<span className="header__site-name">
							<Link href={'/'}>My Thoughts</Link>
						</span>
					)
				}
				<hr className="header__line" />
			</div>
		</header>
	)
}