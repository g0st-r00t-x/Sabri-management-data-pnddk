import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ProfilePage() {
	return (
		<div className="container mx-auto py-10">
			<h1 className="text-3xl font-bold mb-6">Profil Pengguna</h1>
			<Card>
				<CardHeader>
					<CardTitle>Informasi Pribadi</CardTitle>
				</CardHeader>
				<CardContent>
					<form className="space-y-4">
						<div className="grid grid-cols-2 gap-4">
							<div>
								<Label htmlFor="name">Nama</Label>
								<Input
									id="name"
									defaultValue="John Doe"
								/>
							</div>
							<div>
								<Label htmlFor="email">Email</Label>
								<Input
									id="email"
									type="email"
									defaultValue="john@example.com"
								/>
							</div>
							<div>
								<Label htmlFor="role">Peran</Label>
								<Input
									id="role"
									defaultValue="Admin"
									disabled
								/>
							</div>
							<div>
								<Label htmlFor="lastLogin">Login Terakhir</Label>
								<Input
									id="lastLogin"
									defaultValue="2023-06-15 14:30"
									disabled
								/>
							</div>
						</div>
						<Button type="submit">Simpan Perubahan</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
