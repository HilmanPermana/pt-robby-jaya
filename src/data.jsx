import { IoCallOutline } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { BiSolidTimeFive } from "react-icons/bi";
import {tim_kami, tim_kami2, tim_kami3, produk_1,produk_2,
        produk_3, produk_4, halal, sni_botol_cisalam, sni_bywi_botol,
        water_reservoir, water_filterisasi, sni_bywi_galon, sni_cissalam_cup, sni_galon_cisalam,
        cup_filling, bottle_filling, galon_filling, 
        packaging, produk_1_resp, produk_2_resp, sppt_sni,
        produk_3_resp, produk_4_resp} from "./assets";

export const navTabs = [
    {name:"Beranda",id:'header'},
    {name:"Tentang Kami",id:'about'},
    {name:"Proses Produksi",id:'services'},
    {name:"Produk",id:'project'},
    {name:"Tim",id:'team'},
    {name:"Lokasi",id:'testimonial'},
    {name:"Sertifikasi",id:'blog'},
];

export const services = [
  {
    name:"Penampungan Air",
    icon:water_reservoir,
  },
  {
    name:"Filterisasi Air",
    icon:water_filterisasi,
  },
  {
    name:"Pengisian Kemasan Gelas",
    icon:cup_filling,
  },
  {
    name:"Pengisian Kemasaan Botol",
    icon:bottle_filling,
  },
  {
    name:"Pengisian Kemasan Galon",
    icon:galon_filling,
  },
  {
    name:"Pengemasan",
    icon:packaging,
  },
]

export const teams = [
  {
    name:"Tim Perusahaan 1",
    title:"Tim PT Robby Jaya Amdk 1",
    profile:tim_kami,
  },
  {
    name:"Tim Perusahaan 2",
    title:"Tim PT Robby Jaya Amdk 2",
    profile:tim_kami2,
  },
  {
    name:"Tim Perusahaan 3",
    title:"Tim PT Robby Jaya Amdk 3",
    profile:tim_kami3,
  },
]

export const projects = [
  {
    title:"Cisalam Air Mineral Cup 200 ML",
    image:produk_1,
    image_resp:produk_1_resp,
  },
  {
    title:"Cisalam & Bywi Air Mineral Galon 19 L",
    image:produk_2,
    image_resp:produk_2_resp,
  },
  {
    title:"Bywi Air Mineral Cup 200 ML",
    image:produk_3,
    image_resp:produk_3_resp,
  },
  {
    title:"Cisalam Air Mineral Botol 600 ML",
    image:produk_4,
    image_resp:produk_4_resp,
  },
];

export const contacts = [
  {
    name:"Email",
    value:"ptrobbyjayaamdk@gmail.com",
    icon:<MdOutlineAlternateEmail />,
  },
  {
    name:"Admin 1",
    value:"+62-8229-9931-756", //mas Dian
    icon:<IoCallOutline/>,
  },
  {
    name:"Admin 2",
    value:"+62-8129-2069-212", //Paak Deni GM
    icon:<IoCallOutline/>,
  },
  {
    name:"Layanan Pelanggan",
    value:"Hari Senin - Sabtu, Jam 08:00 - 17:00 WIB",
    icon:<BiSolidTimeFive/>,
  },
]

export const blogs = [
  {
      title:"Sertifikat Halal",
      image:halal,
      category:"Sertifikat Halal",
  },
  {
      title:"SPPT SNI",
      image:sppt_sni,
      category:"SPPT SNI",
  },
  {
      title:"SNI Cisalam Cup",
      image:sni_cissalam_cup,
      category:"SNI Cisalam Cup"
  },
  {
      title:"SNI Cisalam Botol",
      image:sni_botol_cisalam,
      category:"SNI Cisalam Botol"
  },
  {
      title:"SNI Cisalam Galon",
      image:sni_galon_cisalam,
      category:"SNI Cisalam Galon"

  },
  {
      title:"SNI Bywi Botol",
      image:sni_bywi_botol,
      category:"SNI Bywi Botol"
  },
  {
      title:"SNI Bywi Galon",
      image:sni_bywi_galon,
      category:"SNI Bywi Galon"
  },
];

export const footer = [
    {
        name:"Section",
        routes:[
          {name:"Beranda",id:'header'},
          {name:"Tentang Kami",id:'about'},
          {name:"Proses Produksi",id:'services'},
          {name:"Produk",id:'project'},
          {name:"Tim",id:'team'},
          {name:"Lokasi",id:'testimonial'},
          {name:"Sertifikasi",id:'blog'},
          {name:"Kontak",id:'contact'},
        ]
      },
]


