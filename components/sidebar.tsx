import Link from "next/link";
import { Home, Users, Settings } from "lucide-react";

export function Sidebar() {
	return (
		<div className="hidden lg:flex flex-col w-64 bg-white h-full border-r">
			<nav className="flex-1 overflow-y-auto">
				<ul className="p-4 space-y-2">
					<li>
						<Link
							href="/dashboard"
							className="flex items-center p-2 text-gray-700 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
						>
							<Home className="w-5 h-5 mr-3" />
							Dashboard
						</Link>
					</li>
					<li>
						<Link
							href="/penduduk"
							className="flex items-center p-2 text-gray-700 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
						>
							<Users className="w-5 h-5 mr-3" />
							Data Penduduk
						</Link>
					</li>
					<li>
						<Link
							href="/pengaturan"
							className="flex items-center p-2 text-gray-700 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
						>
							<Settings className="w-5 h-5 mr-3" />
							Pengaturan
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}
