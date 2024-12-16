"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Users, HomeIcon, UserPlus, UserMinus } from "lucide-react";

// Register ChartJS components
ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

export default function Dashboard() {
	// Chart.js data and options
	const chartData = {
		labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun"],
		datasets: [
			{
				label: "Jumlah Penduduk",
				data: [1000, 1100, 1200, 1300, 1400, 1500],
				backgroundColor: "#3b82f6",
				borderRadius: 4,
			},
		],
	};

	const chartOptions = {
		responsive: true,
		plugins: {
			legend: {
				position: "top",
			},
			title: {
				display: false,
			},
		},
		scales: {
			x: {
				grid: {
					display: false,
				},
				ticks: {
					color: "#888888",
					font: {
						size: 12,
					},
				},
			},
			y: {
				grid: {
					display: false,
				},
				ticks: {
					color: "#888888",
					font: {
						size: 12,
					},
				},
			},
		},
	};

	return (
		<div className="space-y-6">
			<h1 className="text-3xl font-bold">Dashboard</h1>
			<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
				<Card className="bg-blue-500 text-white">
					<CardHeader className="flex flex-row items-center justify-between pb-2">
						<CardTitle className="text-sm font-medium">
							Total Penduduk
						</CardTitle>
						<Users className="h-4 w-4 text-blue-200" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">1,234</div>
						<p className="text-xs text-blue-200">+2% dari bulan lalu</p>
					</CardContent>
				</Card>
				<Card className="bg-green-500 text-white">
					<CardHeader className="flex flex-row items-center justify-between pb-2">
						<CardTitle className="text-sm font-medium">
							Kepala Keluarga
						</CardTitle>
						<HomeIcon className="h-4 w-4 text-green-200" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">456</div>
						<p className="text-xs text-green-200">+1% dari bulan lalu</p>
					</CardContent>
				</Card>
				<Card className="bg-yellow-500 text-white">
					<CardHeader className="flex flex-row items-center justify-between pb-2">
						<CardTitle className="text-sm font-medium">Kelahiran</CardTitle>
						<UserPlus className="h-4 w-4 text-yellow-200" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">12</div>
						<p className="text-xs text-yellow-200">Bulan ini</p>
					</CardContent>
				</Card>
				<Card className="bg-red-500 text-white">
					<CardHeader className="flex flex-row items-center justify-between pb-2">
						<CardTitle className="text-sm font-medium">Kematian</CardTitle>
						<UserMinus className="h-4 w-4 text-red-200" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">3</div>
						<p className="text-xs text-red-200">Bulan ini</p>
					</CardContent>
				</Card>
			</div>
			<Card>
				<CardHeader>
					<CardTitle>Statistik Penduduk</CardTitle>
				</CardHeader>
				<CardContent className="pl-2 h-96">
					<Bar
						data={chartData}
						options={chartOptions}
					/>
				</CardContent>
			</Card>
		</div>
	);
}
