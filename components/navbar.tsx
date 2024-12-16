"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Bell, LogOut, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sidebar } from "./sidebar";

export function Navbar() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const router = useRouter();

	const handleLogout = () => {
		// Implement logout logic here
		console.log("Logging out...");
		router.push("/login"); // Redirect to login page
	};

	return (
		<nav className="bg-primary text-primary-foreground shadow-md">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center">
						<Sheet
							open={isMobileMenuOpen}
							onOpenChange={setIsMobileMenuOpen}
						>
							<SheetTrigger asChild>
								<Button
									variant="ghost"
									className="lg:hidden"
								>
									<Menu className="h-6 w-6" />
								</Button>
							</SheetTrigger>
							<SheetContent
								side="left"
								className="p-0"
							>
								<Sidebar />
							</SheetContent>
						</Sheet>
						<div className="flex-shrink-0">
							<Link
								href="/"
								className="text-2xl font-bold"
							>
								Admin Desa
							</Link>
						</div>
					</div>
					<div className="hidden lg:block">
						<div className="ml-4 flex items-center space-x-4">
							<Button
								variant="ghost"
								size="sm"
							>
								<Bell className="h-5 w-5" />
							</Button>
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button
										variant="ghost"
										size="sm"
									>
										<User className="h-5 w-5" />
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent align="end">
									<DropdownMenuLabel>Akun Saya</DropdownMenuLabel>
									<DropdownMenuSeparator />
									<DropdownMenuItem onSelect={() => router.push("/profile")}>
										Profil
									</DropdownMenuItem>
									<DropdownMenuItem onSelect={handleLogout}>
										<LogOut className="mr-2 h-4 w-4" />
										<span>Log out</span>
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}
