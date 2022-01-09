export class DetailPhim {
  biDanh: string = "";
  dangChieu: boolean = false;
  danhGia: number = 0;
  hinhAnh: string = "";
  hot: boolean = false;
  maNhom: string = "GP01";
  maPhim: number = 0;
  moTa: string = "";
  ngayKhoiChieu: Date = new Date();
  sapChieu: boolean = false;
  tenPhim: string = "";
  trailer: string = "";
  heThongRapChieu: HeThongRapChieu[] = [];
}
export class HeThongRapChieu {
  maHeThongRap: string = "";
  tenHeThongRap: string = "";
  logo: string = "";
  cumRapChieu: CumRapChieu[] = [];
}

export class CumRapChieu {
  maCumRap: string = "";
  tenCumRap: string = "";
  hinhAnh: string = "";
  diaChi: string = "";
  lichChieuPhim: LichChieu[] = [];
}

export class LichChieu {
  giaVe: number = 0;
  maLichChieu: string = "";
  maRap: string = "";
  ngayChieuGioChieu: Date = new Date();
  tenRap: string = "";
  thoiLuong: number = 0;
}
