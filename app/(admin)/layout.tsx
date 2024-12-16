import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";

export default function AdminLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex flex-col h-screen bg-gray-100">
			<Navbar />
			<div className="flex flex-1 overflow-hidden">
				<Sidebar />
				<main className="flex-1 overflow-y-auto p-8">{children}</main>
			</div>
		</div>
	);
}
