import { IoCallOutline,IoLocationOutline } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaYoutube,FaInstagram } from "react-icons/fa";
import { CiLinkedin ,CiFacebook} from "react-icons/ci";
import {tim_kami, produk_1,produk_2,
        produk_3, produk_4,
        water_reservoir, water_filterisasi,
        cup_filling, bottle_filling, galon_filling, packaging} from "./assets";

export const navTabs = [
    {name:"Beranda",id:'header'},
    {name:"Tentang Kami",id:'about'},
    {name:"Proses Produksi",id:'services'},
    {name:"Produk",id:'project'},
    {name:"Tim",id:'team'},
    {name:"Lokasi",id:'testimonial'},
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
    name:"Tim Perusahaan",
    title:"Tim PT Robby Jaya Amdk",
    profile:tim_kami,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
]

export const projects = [
  {
    title:"Cisalam Air Mineral Cup 200 ML",
    image:produk_1,
  },
  {
    title:"Cisalam & Bywi Air Mineral Galon 18 L",
    image:produk_2,
  },
  {
    title:"Bywi Air Mineral Cup 200 ML",
    image:produk_3,
  },
  {
    title:"Cisalam Air Mineral Botol 600 ML",
    image:produk_4,
  },
];

export const contacts = [
  {
    name:"Email",
    value:"mradinuba@gmail.com",
    icon:<MdOutlineAlternateEmail />,
  },
  {
    name:"Whatsapp",
    value:"+62-8129-2069-212",
    icon:<IoCallOutline/>,
  },
]


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
          {name:"Kontak",id:'contact'},
        ]
      },
]


