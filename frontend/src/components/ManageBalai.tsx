import { Button } from "@/components/ui/button";

import "leaflet/dist/leaflet.css";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const geodatabases = [
  {
    file_name: "Irigasi.zip",
    data: "Irigasi",
    bbws: "BBWS Pamali Juana",
    ws: "Jratunseluna",
    source: "Balai",
    tanggal: "20/1/2024",
    size: "200 mb",
    status_qc: "Diterima",
    hasil_qc: "Update",
  },
  {
    file_name: "TitikBanjir.zip",
    data: "Titik Banjir",
    bbws: "BBWS Pamali Juana",
    ws: "Jratunseluna",
    source: "Balai",
    tanggal: "20/1/2024",
    size: "200 mb",
    status_qc: "Diterima",
    hasil_qc: "Update",
  },
  {
    file_name: "GenanganBanjir.zip",
    data: "Genangan Banjir",
    bbws: "BBWS Pamali Juana",
    ws: "Jratunseluna",
    source: "Balai",
    tanggal: "20/1/2024",
    size: "200 mb",
    status_qc: "Diterima",
    hasil_qc: "Update",
  },
  {
    file_name: "Sungai.zip",
    data: "Sungai",
    bbws: "BBWS Pamali Juana",
    ws: "Jratunseluna",
    source: "Balai",
    tanggal: "20/1/2024",
    size: "200 mb",
    status_qc: "Diterima",
    hasil_qc: "Update",
  },
  {
    file_name: "BatasDesa.zip",
    data: "Batas Desa",
    bbws: "BBWS Pamali Juana",
    ws: "Jratunseluna",
    source: "Balai",
    tanggal: "20/1/2024",
    size: "200 mb",
    status_qc: "Diterima",
    hasil_qc: "Update",
  },
  {
    file_name: "TitikEmbung.zip",
    data: "Titik Embung",
    bbws: "BBWS Pamali Juana",
    ws: "Jratunseluna",
    source: "Balai",
    tanggal: "20/1/2024",
    size: "200 mb",
    status_qc: "Diterima",
    hasil_qc: "Update",
  },
  {
    file_name: "BatasKabupaten.zip",
    data: "Batas Kabupaten",
    bbws: "BBWS Pamali Juana",
    ws: "Jratunseluna",
    source: "Balai",
    tanggal: "20/1/2024",
    size: "200 mb",
    status_qc: "Diterima",
    hasil_qc: "Update",
  },
  {
    file_name: "TutupanLahan.tif",
    data: "Tutupan Lahan",
    bbws: "BBWS Pamali Juana",
    ws: "Jratunseluna",
    source: "Balai",
    tanggal: "20/1/2024",
    size: "200 mb",
    status_qc: "Diterima",
    hasil_qc: "Update",
  },
  {
    file_name: "CurahHujan.tif",
    data: "Curah Hujan",
    bbws: "BBWS Pamali Juana",
    ws: "Jratunseluna",
    source: "Balai",
    tanggal: "20/1/2024",
    size: "200 mb",
    status_qc: "Diterima",
    hasil_qc: "Update",
  },
];

const ManageBalai = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="p-4 flex flex-col flex-grow">
        <div className="space-y-7 mb-3">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-[#1c60c7]">
              Quality Control
            </h3>
            <div className="flex rounded-md w-64 border-[1px] border-[#364878] gap-1 p-1">
              <Button className="flex w-full h-7 text-xs font-normal text-white text-center justify-center bg-[#364878] hover:bg-[#364878]">
                Data Baru (23)
              </Button>
              <Button className="flex w-full h-7 text-xs font-normal text-center justify-center text-[#364878] bg-white hover:bg-white">
                Publish (300)
              </Button>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-1">
              <div className="flex w-60 items-center">
                <Input
                  type="text"
                  placeholder="Cari File"
                  className="rounded-none rounded-l-md h-7 border-[#364878] text-[#364878] text-xs font-medium"
                />
                <Button className="bg-[#1c60c7] hover:bg-[#1c60c7] rounded-none rounded-r-md h-7 w-8 p-1">
                  <img src="assets/search-icon.png" className="w-3 h-auto" />
                </Button>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-[#1c60c7] hover:bg-[#1c60c7] rounded-md h-7 w-8 p-1">
                    <img src="assets/filter.png" className="w-3 h-auto" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Filter</DialogTitle>
                  </DialogHeader>
                  <div className="grid grid-cols-2 gap-2">
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Januari" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bulan_2">Februari</SelectItem>
                        <SelectItem value="bulan_3">Maret</SelectItem>
                        <SelectItem value="bulan_4">April</SelectItem>
                        <SelectItem value="bulan_5">Mei</SelectItem>
                        <SelectItem value="bulan_6">Juni</SelectItem>
                        <SelectItem value="bulan_7">Juli</SelectItem>
                        <SelectItem value="bulan_8">Agustus</SelectItem>
                        <SelectItem value="bulan_9">September</SelectItem>
                        <SelectItem value="bulan_10">Oktober</SelectItem>
                        <SelectItem value="bulan_11">November</SelectItem>
                        <SelectItem value="bulan_12">Desember</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="2024" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tahun_2">2023</SelectItem>
                        <SelectItem value="tahun_3">2022</SelectItem>
                        <SelectItem value="tahun_4">2021</SelectItem>
                        <SelectItem value="tahun_5">2020</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Semua B/BWS" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bbws_2">
                        BBWS Mesuji Sekampung
                      </SelectItem>
                      <SelectItem value="bbws_3">
                        BBWS Mesuji Ciliwung Cisadane
                      </SelectItem>
                      <SelectItem value="bbws_4">
                        BBWS Mesuji Citanduy
                      </SelectItem>
                      <SelectItem value="bbws_5">
                        BBWS Mesuji Serayu Opak
                      </SelectItem>
                      <SelectItem value="bbws_6">BBWS Pemali Juana</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Semua WS" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sungai_2">Bogowonto</SelectItem>
                      <SelectItem value="sungai_3">Jratunseluna</SelectItem>
                      <SelectItem value="sungai_4">Progo</SelectItem>
                      <SelectItem value="sungai_5">Opak</SelectItem>
                      <SelectItem value="sungai_6">Serayu</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Semua Data" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="data_2">Batas Desa</SelectItem>
                      <SelectItem value="data_3">Batas Kecamatan</SelectItem>
                      <SelectItem value="data_4">Batas Kabupaten</SelectItem>
                      <SelectItem value="data_5">Titik Banjir</SelectItem>
                      <SelectItem value="data_6">Genangan Banjir</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Semua Source" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="source_2">Balai</SelectItem>
                      <SelectItem value="source_3">BMKG</SelectItem>
                      <SelectItem value="source_4">Pusat</SelectItem>
                    </SelectContent>
                  </Select>
                  <DialogFooter>
                    <Button className="bg-white outline outline-[1px] outline-[#2272EA] text-[#2272EA] hover:bg-white text-sm font-normal">
                      Reset
                    </Button>
                    <Button className="bg-[#2272EA] hover:bg-[#2272EA] text-sm font-normal">
                      Filter
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            <div className="flex  w-72 gap-1">
              <Dialog>
                <DialogTrigger className="w-full">
                  <Button className="flex w-full h-7 gap-1 text-xs font-normal text-[#2373eb] text-center justify-center bg-[#b5d3ff] hover:bg-[#b5d3ff]">
                    <img src="assets/share-icon.png" className="w-4 h-auto" />
                    <p>Share Data</p>
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-sm font-medium">
                      Share Data
                    </DialogTitle>
                    <div className="flex w-full items-center">
                      <Input
                        type="text"
                        placeholder="Link copy file"
                        className="rounded-none rounded-l-md border-[#364878] text-[#364878] text-xs font-medium"
                      />
                      <Button className="bg-[#1c60c7] hover:bg-[#1c60c7] rounded-none rounded-r-md w-14 p-1">
                        <p className="text-xs font-normal">Copy</p>
                      </Button>
                    </div>
                  </DialogHeader>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger className="w-full">
                  <Button className="flex w-full h-7 gap-1 text-xs font-normal text-center justify-center text-white bg-[#2373eb] hover:bg-[#2373eb]">
                    <img src="assets/publish-icon.png" className="w-4 h-auto" />
                    <p>Tambah Data</p>
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-sm font-medium">
                      Tambah Data
                    </DialogTitle>
                    <div className="grid w-full items-center">
                      <Input
                        id="picture"
                        type="file"
                        className="text-xs font-normal"
                      />
                    </div>
                  </DialogHeader>
                  <DialogFooter>
                    <Button className="bg-white outline outline-[1px] outline-[#2272EA] text-[#2272EA] hover:bg-white text-sm font-normal">
                      Batal
                    </Button>
                    <Button className="bg-[#2272EA] hover:bg-[#2272EA] text-sm font-normal">
                      Upload
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
        <div className="flex-grow">
          <Table>
            <TableHeader className="bg-[#d9d9d9] text-sm font-medium text-[#949494]">
              <TableRow>
                <TableHead className="text-left">File Name</TableHead>
                <TableHead className="text-left">Data</TableHead>
                <TableHead className="text-left">B/BWS</TableHead>
                <TableHead className="text-left">WS</TableHead>
                <TableHead className="text-left">Source</TableHead>
                <TableHead className="text-left">Date</TableHead>
                <TableHead className="text-left">Size</TableHead>
                <TableHead className="text-left">Status QC</TableHead>
                <TableHead className="text-left">Hasil QC</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="text-xs font-normal">
              {geodatabases.map((database) => (
                <TableRow key={database.file_name}>
                  <TableCell className="text-[#162EFF]">
                    {database.file_name}
                  </TableCell>
                  <TableCell>{database.data}</TableCell>
                  <TableCell>{database.bbws}</TableCell>
                  <TableCell>{database.ws}</TableCell>
                  <TableCell>{database.source}</TableCell>
                  <TableCell>{database.tanggal}</TableCell>
                  <TableCell>{database.size}</TableCell>
                  <TableCell>{database.status_qc}</TableCell>
                  <TableCell>{database.hasil_qc}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-xs font-normal">
            Showing 1 to 9 of 26 entries
          </div>
          <div className="text-xs font-normal">
            <Pagination className="text-xs font-normal">
              <PaginationContent className="text-[#2272EA]">
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    className="text-xs font-normal h-7 w-auto"
                  />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#"
                    className="text-xs text-white font-normal bg-[#2272EA] hover:bg-[#2272EA] hover:text-white h-7 w-7"
                  >
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis className="text-xs font-normal" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext
                    href="#"
                    className="text-xs font-normal h-7 w-auto"
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageBalai;
