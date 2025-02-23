"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function LoginPage() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const router = useRouter();

	const handleLogin = (e: React.FormEvent) => {
		e.preventDefault();
		// Implement actual login logic here
		if (username === "admin" && password === "password") {
			router.push("/");
		} else {
			alert("Username atau password salah");
		}
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<Card className="w-[350px]">
				<CardHeader>
					<CardTitle>Login Admin</CardTitle>
					<CardDescription>Masuk ke dashboard admin desa</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleLogin}>
						<div className="grid w-full items-center gap-4">
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="username">Username</Label>
								<Input
									id="username"
									placeholder="Masukkan username"
									value={username}
									onChange={(e) => setUsername(e.target.value)}
								/>
							</div>
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="password">Password</Label>
								<Input
									id="password"
									type="password"
									placeholder="Masukkan password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>
						</div>
					</form>
				</CardContent>
				<CardFooter className="flex justify-between">
					<Button
						variant="outline"
						onClick={() => router.push("/")}
					>
						Kembali ke Halaman Publik
					</Button>
					<Button onClick={handleLogin}>Login</Button>
				</CardFooter>
			</Card>
		</div>
	);
}
