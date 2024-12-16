"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
	MapPin,
	Users,
	Calendar,
	Search,
	Zap,
	TreesIcon as Tree,
	GlassWaterIcon as Water,
} from "lucide-react";
import {
	Bar,
	BarChart,
	ResponsiveContainer,
	XAxis,
	YAxis,
	Tooltip,
} from "recharts";
import Image from "next/image";

// Data dummy untuk contoh
const dummyData = [
	{ id: 1, nama: "Budi Santoso", nik: "3301234567890001" },
	{ id: 2, nama: "Siti Rahayu", nik: "3301234567890002" },
	{ id: 3, nama: "Ahmad Yani", nik: "3301234567890003" },
	{ id: 4, nama: "Rina Wati", nik: "3301234567890004" },
	{ id: 5, nama: "Joko Widodo", nik: "3301234567890005" },
];

const newsData = [
	{
		id: 1,
		title: "Pembangunan Jembatan Desa Selesai",
		date: "2023-06-15",
		image: "/placeholder.svg?height=100&width=200",
	},
	{
		id: 2,
		title: "Festival Budaya Desa Sukses Digelar",
		date: "2023-06-10",
		image: "/placeholder.svg?height=100&width=200",
	},
	{
		id: 3,
		title: "Program Vaksinasi Desa Mencapai Target",
		date: "2023-06-05",
		image: "/placeholder.svg?height=100&width=200",
	},
];

const galleryData = [
	{
		id: 1,
		src: "/placeholder.svg?height=200&width=300",
		alt: "Pemandangan Desa",
	},
	{
		id: 2,
		src: "/placeholder.svg?height=200&width=300",
		alt: "Kegiatan Gotong Royong",
	},
	{ id: 3, src: "/placeholder.svg?height=200&width=300", alt: "Panen Raya" },
	{ id: 4, src: "/placeholder.svg?height=200&width=300", alt: "Upacara Adat" },
];

const statisticsData = [
	{ name: "Jan", penduduk: 4000, pendapatan: 2400 },
	{ name: "Feb", penduduk: 3000, pendapatan: 1398 },
	{ name: "Mar", penduduk: 2000, pendapatan: 9800 },
	{ name: "Apr", penduduk: 2780, pendapatan: 3908 },
	{ name: "May", penduduk: 1890, pendapatan: 4800 },
	{ name: "Jun", penduduk: 2390, pendapatan: 3800 },
];

export default function PublicPage() {
	const [searchTerm, setSearchTerm] = useState("");
	const router = useRouter();
	const { scrollY } = useScroll();
	const y1 = useTransform(scrollY, [0, 300], [0, 200]);
	const y2 = useTransform(scrollY, [0, 300], [0, -100]);
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const filteredData = dummyData.filter(
		(item) =>
			item.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
			item.nik.includes(searchTerm)
	);

	if (!isMounted) {
		return null; // or a loading spinner
	}

	return (
		<div className="min-h-screen bg-gradient-to-b from-blue-100 to-green-100">
			<header className="relative h-[50vh] overflow-hidden">
				<motion.div
					className="absolute inset-0 z-0"
					style={{ y: y1 }}
				>
					<Image
						src="/placeholder.svg?height=1080&width=1920"
						alt="Pemandangan Desa"
						className="w-full h-full object-cover"
					/>
				</motion.div>
				<motion.div
					className="absolute inset-0 flex items-center justify-center z-10"
					style={{ y: y2 }}
				>
					<div className="text-center text-white">
						<motion.h1
							className="text-5xl font-bold mb-2 drop-shadow-lg"
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
						>
							Selamat Datang di Desa Sejahtera
						</motion.h1>
						<motion.p
							className="text-2xl drop-shadow-md"
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
						>
							Membangun Masa Depan Bersama
						</motion.p>
					</div>
				</motion.div>
			</header>

			<main className="container mx-auto py-10 px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.4 }}
				>
					<Card className="mb-8">
						<CardHeader>
							<CardTitle>Highlight Desa</CardTitle>
						</CardHeader>
						<CardContent className="grid md:grid-cols-3 gap-4">
							<div className="flex items-center space-x-2">
								<MapPin className="h-5 w-5 text-primary" />
								<span>Lokasi Strategis</span>
							</div>
							<div className="flex items-center space-x-2">
								<Users className="h-5 w-5 text-primary" />
								<span>Populasi: 5,000 Jiwa</span>
							</div>
							<div className="flex items-center space-x-2">
								<Calendar className="h-5 w-5 text-primary" />
								<span>Berdiri Sejak 1945</span>
							</div>
							<div className="flex items-center space-x-2">
								<Zap className="h-5 w-5 text-primary" />
								<span>100% Elektrifikasi</span>
							</div>
							<div className="flex items-center space-x-2">
								<Tree className="h-5 w-5 text-primary" />
								<span>60% Area Hijau</span>
							</div>
							<div className="flex items-center space-x-2">
								<Water className="h-5 w-5 text-primary" />
								<span>Sumber Air Bersih</span>
							</div>
						</CardContent>
					</Card>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.6 }}
				>
					<Tabs
						defaultValue="penduduk"
						className="mb-8"
					>
						<TabsList className="grid w-full grid-cols-4">
							<TabsTrigger value="penduduk">Data Penduduk</TabsTrigger>
							<TabsTrigger value="berita">Berita Terkini</TabsTrigger>
							<TabsTrigger value="galeri">Galeri Foto</TabsTrigger>
							<TabsTrigger value="statistik">Statistik Desa</TabsTrigger>
						</TabsList>
						<TabsContent value="penduduk">
							<Card>
								<CardHeader>
									<CardTitle>Data Penduduk Desa</CardTitle>
									<CardDescription>
										Cari nama atau NIK Anda di sini
									</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="flex space-x-2 mb-4">
										<div className="relative flex-grow">
											<Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
											<Input
												placeholder="Cari berdasarkan nama atau NIK..."
												value={searchTerm}
												onChange={(e) => setSearchTerm(e.target.value)}
												className="pl-8"
											/>
										</div>
										<Button
											variant="outline"
											onClick={() => router.push("/login")}
										>
											Login Admin
										</Button>
									</div>
									<ScrollArea className="h-[300px]">
										<Table>
											<TableHeader>
												<TableRow>
													<TableHead>Nama</TableHead>
													<TableHead>NIK</TableHead>
												</TableRow>
											</TableHeader>
											<TableBody>
												{filteredData.map((item) => (
													<TableRow key={item.id}>
														<TableCell>{item.nama}</TableCell>
														<TableCell>{item.nik}</TableCell>
													</TableRow>
												))}
											</TableBody>
										</Table>
									</ScrollArea>
								</CardContent>
							</Card>
						</TabsContent>
						<TabsContent value="berita">
							<Card>
								<CardHeader>
									<CardTitle>Berita Terkini</CardTitle>
									<CardDescription>
										Informasi terbaru seputar desa
									</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="grid md:grid-cols-3 gap-4">
										{newsData.map((news) => (
											<Card
												key={news.id}
												className="overflow-hidden"
											>
												<Image
													src={news.image}
													alt={news.title}
													className="w-full h-32 object-cover"
												/>
												<CardHeader>
													<CardTitle className="text-lg">
														{news.title}
													</CardTitle>
													<CardDescription>{news.date}</CardDescription>
												</CardHeader>
											</Card>
										))}
									</div>
								</CardContent>
							</Card>
						</TabsContent>
						<TabsContent value="galeri">
							<Card>
								<CardHeader>
									<CardTitle>Galeri Foto</CardTitle>
									<CardDescription>
										Keindahan dan aktivitas desa kami
									</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
										{galleryData.map((photo) => (
											<motion.div
												key={photo.id}
												whileHover={{ scale: 1.05 }}
												whileTap={{ scale: 0.95 }}
											>
												<img
													src={photo.src}
													alt={photo.alt}
													className="rounded-lg shadow-md w-full h-40 object-cover"
												/>
											</motion.div>
										))}
									</div>
								</CardContent>
							</Card>
						</TabsContent>
						<TabsContent value="statistik">
							<Card>
								<CardHeader>
									<CardTitle>Statistik Desa</CardTitle>
									<CardDescription>
										Perkembangan penduduk dan pendapatan desa
									</CardDescription>
								</CardHeader>
								<CardContent>
									<ResponsiveContainer
										width="100%"
										height={300}
									>
										<BarChart data={statisticsData}>
											<XAxis dataKey="name" />
											<YAxis />
											<Tooltip />
											<Bar
												dataKey="penduduk"
												fill="#8884d8"
												name="Jumlah Penduduk"
											/>
											<Bar
												dataKey="pendapatan"
												fill="#82ca9d"
												name="Pendapatan Desa (Juta Rupiah)"
											/>
										</BarChart>
									</ResponsiveContainer>
								</CardContent>
							</Card>
						</TabsContent>
					</Tabs>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.8 }}
				>
					<Card>
						<CardHeader>
							<CardTitle>Peta Desa</CardTitle>
							<CardDescription>
								Lokasi dan fasilitas penting di desa kami
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="aspect-video bg-muted rounded-md overflow-hidden">
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.56347862248!2d107.57311687359671!3d-6.903444341687889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6398252477f%3A0x146a1f93d3e815b2!2sBandung%2C%20Bandung%20City%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1687019881178!5m2!1sen!2sid"
									width="100%"
									height="100%"
									style={{ border: 0 }}
									loading="lazy"
									referrerPolicy="no-referrer-when-downgrade"
								></iframe>
							</div>
						</CardContent>
					</Card>
				</motion.div>
			</main>

			<footer className="bg-primary text-primary-foreground py-8">
				<div className="container mx-auto text-center">
					<h2 className="text-2xl font-bold mb-4">Hubungi Kami</h2>
					<p className="mb-2">Kantor Desa Sejahtera</p>
					<p className="mb-2">Jl. Raya Desa No. 1, Kecamatan Makmur</p>
					<p className="mb-2">Telepon: (021) 1234-5678</p>
					<p className="mb-2">Email: info@desasejahtera.go.id</p>
					<div className="mt-4">
						<Button
							variant="outline"
							className="mr-2"
						>
							Facebook
						</Button>
						<Button
							variant="outline"
							className="mr-2"
						>
							Twitter
						</Button>
						<Button variant="outline">Instagram</Button>
					</div>
					<p className="mt-4">
						&copy; 2023 Desa Sejahtera. All rights reserved.
					</p>
				</div>
			</footer>
		</div>
	);
}
