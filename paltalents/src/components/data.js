// Todo:[task 40, Remove Data.js file]
import Image from "./images/clown.jpg";
import Image1 from "./images/dabka.jpg";
import Image2 from "./images/grafiti.jpg";
import Image3 from "./images/guitar.png";
import Image4 from "./images/orchestra.jpg";
import Image5 from "./images/orchestra 2.jpg";
import Image6 from "./images/parkour.jpg";
import Image7 from "./images/piano.jpg";
import Image8 from "./images/poet.jpg";
import Image9 from "./images/rap.jpg";
import Image10 from "./images/singing.jpg";
import Image11 from "./images/ss.jpg";
import Image12 from "./images/theatre.jpg";
import Image13 from "./images/violin1.jpg";
import Image14 from "./images/violin2.jpg";
import Image15 from "./images/business opening.jpg";
import Image16 from "./images/Rozana.jpg";
import Image17 from "./images/graduation.jpg";
import Image18 from "./images/Talent-Show.jpeg";
import Image19 from "./images/jifnafestival.jpg";
import Image20 from "./images/mallopening.jpg";
import Image21 from "./images/hebron festival.jpg";
import Image22 from "./images/wedding.jpg";

// Temporary data for the simpleSelect component
export const governorate = [
  {
    id: 1,
    name: "Birzeit",
  },
  {
    id: 2,
    name: "Hebron",
  },
  {
    id: 2,
    name: "Jerusalem",
  },
  {
    id: 2,
    name: "Nablus",
  },
  {
    id: 2,
    name: "Ramallah",
  },
  {
    id: 2,
    name: "Rawabi",
  },
];

// Temporary data for the SimpleSelect component
export const people = [
  {
    id: 1,
    name: "Group",
  },
  {
    id: 2,
    name: "Individual",
  },
];

// Temporary data for the grids component in TalentsPage.js
export const tileData = [
  { id: 1, name: "Sara Ustah", img: Image10, talent: "Singing" },
  { id: 2, name: "Bisan Squad for Folk Dance", img: Image1, talent: "Dabka" },
  { id: 3, name: "Roaa Jaber", img: Image2, talent: "Grafiti" },
  { id: 4, name: "Arein Daralnakhla", img: Image3, talent: "Guitar" },
  { id: 5, name: "Cello di Ramallah", img: Image4, talent: "Cello" },
  { id: 6, name: "Alaa Odeh", img: Image8, talent: "Poetry" },
  { id: 7, name: "Mohammad Shilleh", img: Image6, talent: "Parkour" },
  { id: 8, name: "Ahmad Dar Saleh", img: Image7, talent: "Piano" },
  { id: 10, name: "Palestine Orchestra", img: Image5, talent: "orchestra" },
  { id: 11, name: "Walid Eid", img: Image9, talent: "Rap" },
  { id: 12, name: "Mahdi Barham", img: Image, talent: "Clown" },
  { id: 13, name: "Taqwa Ahmad", img: Image11, talent: "Flute" },
  { id: 14, name: "Zaman Theatre", img: Image12, talent: "Theatre" },
  { id: 15, name: "Saqer Hasan", img: Image13, talent: "Violin" },
  { id: 16, name: "Mona Khammash", img: Image14, talent: "Violin" },
];

export const tileData2 = [
  { id: 1, name: "Rozana Festival", img: Image16 },
  { id: 2, name: "Birzeit Mall Opening", img: Image19 },
  { id: 3, name: "Hebron Festival", img: Image20 },
  { id: 4, name: "Jifna Festival", img: Image21 },
  { id: 5, name: "Wedding", img: Image22 },
  { id: 6, name: "Asal Business Day", img: Image15 },
  { id: 7, name: "Graduation Party", img: Image17 },
  { id: 8, name: "Rawabi Talents Show", img: Image18 },
];

// Temporary data for the MultipleSelect component
export const talents = [
  { id: 1, name: "Dabka" },
  { id: 2, name: "Live Painting" },
  { id: 3, name: "Singing" },
  { id: 4, name: "Orchestra" },
  { id: 5, name: "Arabic Poetry" },
  { id: 6, name: "English Poetry" },
  { id: 7, name: "Hip Hop" },
];

export const eventDetails = {
  id: 1,
  agenda: [
    { id: 1, tag: "Dabka", duration: "7:00-7:30", date: "8/1/2021" },
    { id: 2, tag: "Live Painting", duration: "7:30-8:00", date: "8/1/2021" },
    { id: 3, tag: "Arabic Poetry", duration: "8:00-9:00", date: "8/1/2021" },
    { id: 4, tag: "Signing", duration: "9:00-9:30", date: "8/1/2021" },
    { id: 5, tag: "Rap", duration: "9:00-9:30", date: "8/1/2021" },
    {
      id: 6,
      tag: "Contemporary Dance",
      duration: "10:00-10:15",
      date: "8/1/2021",
    },
    { id: 7, tag: "Hip Hop", duration: "9:00-9:30", date: "8/2/2021" },
    { id: 8, tag: "Flute", duration: "9:00-9:30", date: "8/3/2021" },
    { id: 9, tag: "Oud", duration: "9:00-9:30", date: "8/4/2021" },
  ],
  about: (
    <q>
      The Rozana Festival in Birzeit is unique among festivals in the breadth
      and diversity of the exhibits, productions, articles for sale, and
      activities. There will be cinema, street performances, theater for adults
      and for children, and dancing and music – much, much music, from jazz to
      traditional Palestinian folk songs. There will be soloists and big bands,
      groups from inside and outside the Green line, with songs that may be
      witty, patriotic, cynical, or hopeful. Art, some from prisoners, will be
      everywhere – hanging in courtyards and attics, depicting the obstacles of
      today’s life under Occupation. Other countries join in Birzeit’s
      festivities at the “International Souq”.
    </q>
  ),
  host: "Al-Rozana Institution",
  location: "Birziet (old city)",
  date: "8/1/2021 - 8/4/2021",
  time: "7:00-11:00pm",
  phoneNumber: "0592729179",
};
