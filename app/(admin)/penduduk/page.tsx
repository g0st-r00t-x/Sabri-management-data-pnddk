"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Plus } from "lucide-react";

// Data dummy untuk contoh
const initialData = [
	{
		id: 1,
		nama: "Budi Santoso",
		nik: "3301234567890001",
		jenisKelamin: "Laki-laki",
		tanggalLahir: "1990-01-01",
		alamat: "Jl. Raya No. 1",
	},
	{
		id: 2,
		nama: "Siti Rahayu",
		nik: "3301234567890002",
		jenisKelamin: "Perempuan",
		tanggalLahir: "1992-05-15",
		alamat: "Jl. Mawar No. 10",
	},
	// ... tambahkan data lainnya
];

export default function DataPenduduk() {
	const [data, setData] = useState(initialData);
	const [searchTerm, setSearchTerm] = useState("");
	const [currentPage, setCurrentPage] = useState(1);
	const [editingPenduduk, setEditingPenduduk] = useState(null);
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [filter, setFilter] = useState({ jenisKelamin: "all" });
	const [visibleColumns, setVisibleColumns] = useState({
		nama: true,
		nik: true,
		jenisKelamin: true,
		tanggalLahir: true,
		alamat: true,
	});

	const itemsPerPage = 10;

	const filteredData = data.filter(
		(item) =>
			(item.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
				item.nik.includes(searchTerm)) &&
			(filter.jenisKelamin === "all" ||
				item.jenisKelamin === filter.jenisKelamin)
	);

	const pageCount = Math.ceil(filteredData.length / itemsPerPage);
	const paginatedData = filteredData.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	);

	const handleAdd = (newPenduduk) => {
		setData([...data, { ...newPenduduk, id: data.length + 1 }]);
		setIsDialogOpen(false);
	};

	const handleUpdate = (updatedPenduduk) => {
		setData(
			data.map((item) =>
				item.id === updatedPenduduk.id ? updatedPenduduk : item
			)
		);
		setEditingPenduduk(null);
		setIsDialogOpen(false);
	};

	const handleDelete = (id) => {
		setData(data.filter((item) => item.id !== id));
	};

	const PendudukForm = ({ penduduk, onSubmit }) => {
		const [formData, setFormData] = useState(
			penduduk || {
				nama: "",
				nik: "",
				jenisKelamin: "",
				tanggalLahir: "",
				alamat: "",
			}
		);

		const handleChange = (e) => {
			const { name, value } = e.target;
			setFormData((prev) => ({ ...prev, [name]: value }));
		};

		const handleSubmit = (e) => {
			e.preventDefault();
			onSubmit(formData);
		};

		return (
			<form
				onSubmit={handleSubmit}
				className="space-y-4"
			>
				<div>
					<Label htmlFor="nama">Nama Lengkap</Label>
					<Input
						id="nama"
						name="nama"
						value={formData.nama}
						onChange={handleChange}
						required
					/>
				</div>
				<div>
					<Label htmlFor="nik">NIK</Label>
					<Input
						id="nik"
						name="nik"
						value={formData.nik}
						onChange={handleChange}
						required
					/>
				</div>
				<div>
					<Label htmlFor="jenisKelamin">Jenis Kelamin</Label>
					<Select
						name="jenisKelamin"
						value={formData.jenisKelamin}
						onValueChange={(value) =>
							setFormData((prev) => ({ ...prev, jenisKelamin: value }))
						}
					>
						<SelectTrigger>
							<SelectValue placeholder="Pilih jenis kelamin" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="Laki-laki">Laki-laki</SelectItem>
							<SelectItem value="Perempuan">Perempuan</SelectItem>
						</SelectContent>
					</Select>
				</div>
				<div>
					<Label htmlFor="tanggalLahir">Tanggal Lahir</Label>
					<Input
						id="tanggalLahir"
						name="tanggalLahir"
						type="date"
						value={formData.tanggalLahir}
						onChange={handleChange}
						required
					/>
				</div>
				<div>
					<Label htmlFor="alamat">Alamat</Label>
					<Input
						id="alamat"
						name="alamat"
						value={formData.alamat}
						onChange={handleChange}
						required
					/>
				</div>
				<Button type="submit">{penduduk ? "Update" : "Tambah"} Data</Button>
			</form>
		);
	};

	return (
		<div>
			<h1 className="text-3xl font-bold mb-6">Data Penduduk</h1>
			<div className="mb-4 flex justify-between items-center">
				<Input
					type="text"
					placeholder="Cari berdasarkan nama atau NIK..."
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					className="max-w-sm"
				/>
				<div className="flex gap-2">
					<Select
						value={filter.jenisKelamin}
						onValueChange={(value) =>
							setFilter({ ...filter, jenisKelamin: value })
						}
					>
						<SelectTrigger className="w-[180px]">
							<SelectValue placeholder="Filter Jenis Kelamin" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="all">Semua</SelectItem>
							<SelectItem value="Laki-laki">Laki-laki</SelectItem>
							<SelectItem value="Perempuan">Perempuan</SelectItem>
						</SelectContent>
					</Select>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="outline">Kolom</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							{Object.keys(visibleColumns).map((column) => (
								<DropdownMenuCheckboxItem
									key={column}
									checked={visibleColumns[column]}
									onCheckedChange={(checked) =>
										setVisibleColumns((prev) => ({
											...prev,
											[column]: checked,
										}))
									}
								>
									{column.charAt(0).toUpperCase() + column.slice(1)}
								</DropdownMenuCheckboxItem>
							))}
						</DropdownMenuContent>
					</DropdownMenu>
					<Dialog
						open={isDialogOpen}
						onOpenChange={setIsDialogOpen}
					>
						<DialogTrigger asChild>
							<Button>
								<Plus className="mr-2 h-4 w-4" /> Tambah Penduduk
							</Button>
						</DialogTrigger>
						<DialogContent>
							<DialogHeader>
								<DialogTitle>
									{editingPenduduk
										? "Edit Data Penduduk"
										: "Tambah Data Penduduk"}
								</DialogTitle>
							</DialogHeader>
							<PendudukForm
								penduduk={editingPenduduk}
								onSubmit={editingPenduduk ? handleUpdate : handleAdd}
							/>
						</DialogContent>
					</Dialog>
				</div>
			</div>
			<Table>
				<TableHeader>
					<TableRow>
						{visibleColumns.nama && <TableHead>Nama</TableHead>}
						{visibleColumns.nik && <TableHead>NIK</TableHead>}
						{visibleColumns.jenisKelamin && (
							<TableHead>Jenis Kelamin</TableHead>
						)}
						{visibleColumns.tanggalLahir && (
							<TableHead>Tanggal Lahir</TableHead>
						)}
						{visibleColumns.alamat && <TableHead>Alamat</TableHead>}
						<TableHead>Aksi</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{paginatedData.map((item) => (
						<TableRow key={item.id}>
							{visibleColumns.nama && <TableCell>{item.nama}</TableCell>}
							{visibleColumns.nik && <TableCell>{item.nik}</TableCell>}
							{visibleColumns.jenisKelamin && (
								<TableCell>{item.jenisKelamin}</TableCell>
							)}
							{visibleColumns.tanggalLahir && (
								<TableCell>{item.tanggalLahir}</TableCell>
							)}
							{visibleColumns.alamat && <TableCell>{item.alamat}</TableCell>}
							<TableCell>
								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<Button
											variant="ghost"
											className="h-8 w-8 p-0"
										>
											<span className="sr-only">Open menu</span>
											<MoreHorizontal className="h-4 w-4" />
										</Button>
									</DropdownMenuTrigger>
									<DropdownMenuContent align="end">
										<DropdownMenuCheckboxItem
											onClick={() => {
												setEditingPenduduk(item);
												setIsDialogOpen(true);
											}}
										>
											Edit
										</DropdownMenuCheckboxItem>
										<DropdownMenuCheckboxItem
											onClick={() => handleDelete(item.id)}
										>
											Hapus
										</DropdownMenuCheckboxItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			<div className="mt-4 flex justify-between items-center">
				<div>
					Halaman {currentPage} dari {pageCount}
				</div>
				<div>
					<Button
						onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
						disabled={currentPage === 1}
					>
						Sebelumnya
					</Button>
					<Button
						onClick={() =>
							setCurrentPage((prev) => Math.min(prev + 1, pageCount))
						}
						disabled={currentPage === pageCount}
						className="ml-2"
					>
						Selanjutnya
					</Button>
				</div>
			</div>
		</div>
	);
}
