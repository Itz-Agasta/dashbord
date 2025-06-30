import { Moon } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
	return (
		<nav className="">
			{/* LEFT */}
			collapseButton
			{/* RIGHT */}
			<div className="">
				<Link href="/">Dashboard</Link>
				<Moon />
			</div>
		</nav>
	);
};

export default Navbar;
