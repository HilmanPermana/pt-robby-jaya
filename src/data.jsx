import { IoCallOutline,IoLocationOutline } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaYoutube,FaInstagram,FaDrawPolygon } from "react-icons/fa";
import { CiLinkedin ,CiFacebook} from "react-icons/ci";
import { profile2, profile3,profile4,profile5,
        tim_kami, produk_1,produk_2,
        produk_3, produk_4,
        blog_1,blog_2,blog_3, water_reservoir, water_filterisasi,
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


export const testimonial = [
  {
    image:profile2,
    name:'Samuel Eze',
    review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea veniam, quis nostrud exercitation ullamco laborisveniam, quis nostrud exercitation ullamco laboris`
  },
  {
    image:profile3,
    name:'Emmanuel Joseph',
    review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`
  },
  {
    image:profile4,
    name:'Gloria Chiwendu',
    review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea veniam, quis nostrud exercitation ullamco laborisveniam, quis nostrud exercitation ullamco laborisveniam, quis nostrud exercitation ullamco laboris`
  },
  {
    image:profile5,
    name:'Precious Stone',
    review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`
  }

];


export const blogs = [
  {
      title:"Sustainable Construction: Building for the Future",
      image:blog_1,
      category:"Building",
      content:`
        As the construction industry continues to evolve, the focus on sustainability 
        has never been more critical. Sustainable construction is not just a trend; 
        it's a necessity for our planet's future. In this blog post, we'll explore 
        the principles of sustainable construction, the benefits it offers, and how 
        our company is leading the way in eco-friendly building practices.
      `,
      date:new Date("January 10, 2024"),
      likeCount:34,
      commentCount:4,
      tags:["Edu4CommDev","CommGrowthEdu","EducateCommunities"],
      poster:{
          name:"Johnson",
      },
  },
  {
      title:"The Importance of Quality Craftsmanship in Construction",
      image:blog_2,
      category:"Construction",
      content:`
        Quality craftsmanship is the cornerstone of any successful construction project.
         It ensures that buildings are not only aesthetically pleasing but also durable 
         and safe. In this blog post, we'll delve into why quality craftsmanship matters 
         and how our company upholds the highest standards in every project we undertake.
      `,
      date:new Date("December 15, 2023"),
      likeCount:201,
      commentCount:123,
      tags:["Skills4Growth","EconSkillImpact","GrowWithSkills"],
      poster:{
          name:"Bissi",
      },
  },
  {
      title:"Innovative Technologies Transforming the Construction Industry",
      image:blog_3,
      category:"Innovations",
      content:`
      The construction industry is undergoing a revolution, thanks to the advent of 
      innovative technologies. These advancements are making construction projects 
      more efficient, cost-effective, and sustainable. In this blog post, we'll 
      explore some of the most exciting technologies transforming the way we build 
      and how our company is leveraging them to deliver superior results.
      `,
      date:new Date("July 20, 2023"),
      likeCount:198,
      commentCount:121,
      tags:["CommEdu","CommunityEngagement","EduCommunity"],
      poster:{
          name:"Abisola",
      },
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
  // {
  //   name:"Alamat",
  //   value:"Gwarinpa, Abuja, NigeriaJl. Kp. Cijengkol, Rt 004/002, desa Cisalam, kec, Baros, Kec. Serang, Kabupaten Serang, Banten 42173",
  //   icon:<IoLocationOutline/>,
  // },
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


