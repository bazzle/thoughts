import Link from "next/link";

export default function Header(){
	return (
		<header className="header">
			<div className="container--narrow header__inner">
				<h1 className="header__site-name">
					<Link href={'/'}>My Thoughts</Link>
				</h1>
				<hr className="header__line" />
			</div>
		</header>
	)
}