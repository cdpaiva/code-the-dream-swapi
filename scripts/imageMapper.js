/*
//This code is here just for the reference on how I counted the frequency that each character appeared in the movies.

const allNames = [
  [
    "Beru Whitesun lars",
    "Biggs Darklighter",
    "C-3PO",
    "Chewbacca",
    "Darth Vader",
    "Greedo",
    "Han Solo",
    "Jabba Desilijic Tiure",
    "Jek Tono Porkins",
    "Leia Organa",
    "Luke Skywalker",
    "Obi-Wan Kenobi",
    "Owen Lars",
    "R2-D2",
    "R5-D4",
    "Raymus Antilles",
    "Wedge Antilles",
    "Wilhuff Tarkin",
  ],
  [
    "Boba Fett",
    "Bossk",
    "C-3PO",
    "Chewbacca",
    "Darth Vader",
    "Han Solo",
    "IG-88",
    "Lando Calrissian",
    "Leia Organa",
    "Lobot",
    "Luke Skywalker",
    "Obi-Wan Kenobi",
    "Palpatine",
    "R2-D2",
    "Wedge Antilles",
    "Yoda",
  ],
  [
    "Ackbar",
    "Arvel Crynyd",
    "Bib Fortuna",
    "Boba Fett",
    "C-3PO",
    "Chewbacca",
    "Darth Vader",
    "Han Solo",
    "Jabba Desilijic Tiure",
    "Lando Calrissian",
    "Leia Organa",
    "Luke Skywalker",
    "Mon Mothma",
    "Nien Nunb",
    "Obi-Wan Kenobi",
    "Palpatine",
    "R2-D2",
    "Wedge Antilles",
    "Wicket Systri Warrick",
    "Yoda",
  ],
  [
    "Adi Gallia",
    "Anakin Skywalker",
    "Ayla Secura",
    "Ben Quadinaros",
    "C-3PO",
    "Darth Maul",
    "Dud Bolt",
    "Eeth Koth",
    "Finis Valorum",
    "Gasgano",
    "Jabba Desilijic Tiure",
    "Jar Jar Binks",
    "Ki-Adi-Mundi",
    "Kit Fisto",
    "Mace Windu",
    "Mas Amedda",
    "Nute Gunray",
    "Obi-Wan Kenobi",
    "Padmé Amidala",
    "Palpatine",
    "Plo Koon",
    "Quarsh Panaka",
    "Qui-Gon Jinn",
    "R2-D2",
    "Ratts Tyerel",
    "Ric Olié",
    "Roos Tarpals",
    "Rugor Nass",
    "Saesee Tiin",
    "Sebulba",
    "Shmi Skywalker",
    "Watto",
    "Yarael Poof",
    "Yoda",
  ],
  [
    "Anakin Skywalker",
    "Ayla Secura",
    "Bail Prestor Organa",
    "Barriss Offee",
    "Beru Whitesun lars",
    "Boba Fett",
    "C-3PO",
    "Cliegg Lars",
    "Cordé",
    "Dexter Jettster",
    "Dooku",
    "Dormé",
    "Gregar Typho",
    "Jango Fett",
    "Jar Jar Binks",
    "Jocasta Nu",
    "Ki-Adi-Mundi",
    "Kit Fisto",
    "Lama Su",
    "Luminara Unduli",
    "Mace Windu",
    "Mas Amedda",
    "Nute Gunray",
    "Obi-Wan Kenobi",
    "Owen Lars",
    "Padmé Amidala",
    "Palpatine",
    "Plo Koon",
    "Poggle the Lesser",
    "R2-D2",
    "R4-P17",
    "San Hill",
    "Shaak Ti",
    "Shmi Skywalker",
    "Sly Moore",
    "Taun We",
    "Wat Tambor",
    "Watto",
    "Yoda",
    "Zam Wesell",
  ],
  [
    "Adi Gallia",
    "Anakin Skywalker",
    "Ayla Secura",
    "Bail Prestor Organa",
    "Beru Whitesun lars",
    "C-3PO",
    "Chewbacca",
    "Darth Vader",
    "Dooku",
    "Eeth Koth",
    "Grievous",
    "Ki-Adi-Mundi",
    "Kit Fisto",
    "Leia Organa",
    "Luke Skywalker",
    "Luminara Unduli",
    "Mace Windu",
    "Nute Gunray",
    "Obi-Wan Kenobi",
    "Owen Lars",
    "Padmé Amidala",
    "Palpatine",
    "Plo Koon",
    "Poggle the Lesser",
    "R2-D2",
    "R4-P17",
    "Raymus Antilles",
    "Saesee Tiin",
    "Shaak Ti",
    "Sly Moore",
    "Tarfful",
    "Tion Medon",
    "Wilhuff Tarkin",
    "Yoda",
  ],
];

const histogram = {};

//populate the histogram
for (let film of allNames) {
  for (let char of film) {
    if (!histogram[char]) {
      histogram[char] = 1;
    } else {
      histogram[char]++;
    }
  }
}

const names = Object.keys(histogram);

//sort by frequency
names.sort((a, b) => histogram[b] - histogram[a]);

const namesToAdd = {};

//mark with TODO the characters that should have images
names.map((n) => {
  if (histogram[n] >= 3) {
    namesToAdd[n] = "TODO";
  } else {
    namesToAdd[n] = "unknown";
  }
});

*/

export const namesToImages = {
  "C-3PO": "c3p0",
  "Obi-Wan Kenobi": "obiwanep4",
  "R2-D2": "r2d2",
  Palpatine: "palpatineemperor",
  Yoda: "yodagrandmaster",
  Chewbacca: "chewbacca",
  "Darth Vader": "vader",
  "Leia Organa": "princess",
  "Luke Skywalker": "lukebespin",
  "Beru Whitesun lars": "unknown",
  "Han Solo": "han",
  "Jabba Desilijic Tiure": "jabbathehutt",
  "Owen Lars": "unknown",
  "Wedge Antilles": "wedge",
  "Boba Fett": "bobafett",
  "Anakin Skywalker": "anakinknight",
  "Ayla Secura": "aaylasecura",
  "Ki-Adi-Mundi": "kiadimundi",
  "Kit Fisto": "kitfisto",
  "Mace Windu": "macewindu",
  "Nute Gunray": "nutegunray",
  "Padmé Amidala": "unknown",
  "Plo Koon": "plokoon",
  "Adi Gallia": "unknown",
  "Bail Prestor Organa": "unknown",
  Dooku: "unknown",
  "Eeth Koth": "unknown",
  "Jar Jar Binks": "unknown",
  "Lando Calrissian": "unknown",
  "Luminara Unduli": "unknown",
  "Mas Amedda": "unknown",
  "Poggle the Lesser": "unknown",
  "R4-P17": "unknown",
  "Raymus Antilles": "unknown",
  "Saesee Tiin": "unknown",
  "Shaak Ti": "unknown",
  "Shmi Skywalker": "unknown",
  "Sly Moore": "unknown",
  Watto: "unknown",
  "Wilhuff Tarkin": "unknown",
  Ackbar: "unknown",
  "Arvel Crynyd": "unknown",
  "Barriss Offee": "unknown",
  "Ben Quadinaros": "unknown",
  "Bib Fortuna": "unknown",
  "Biggs Darklighter": "unknown",
  Bossk: "unknown",
  "Cliegg Lars": "unknown",
  Cordé: "unknown",
  "Darth Maul": "unknown",
  "Dexter Jettster": "unknown",
  Dormé: "unknown",
  "Dud Bolt": "unknown",
  "Finis Valorum": "unknown",
  Gasgano: "unknown",
  Greedo: "unknown",
  "Gregar Typho": "unknown",
  Grievous: "unknown",
  "IG-88": "unknown",
  "Jango Fett": "unknown",
  "Jek Tono Porkins": "unknown",
  "Jocasta Nu": "unknown",
  "Lama Su": "unknown",
  Lobot: "unknown",
  "Mon Mothma": "unknown",
  "Nien Nunb": "unknown",
  "Quarsh Panaka": "unknown",
  "Qui-Gon Jinn": "unknown",
  "R5-D4": "unknown",
  "Ratts Tyerel": "unknown",
  "Ric Olié": "unknown",
  "Roos Tarpals": "unknown",
  "Rugor Nass": "unknown",
  "San Hill": "unknown",
  Sebulba: "unknown",
  Tarfful: "unknown",
  "Taun We": "unknown",
  "Tion Medon": "unknown",
  "Wat Tambor": "unknown",
  "Wicket Systri Warrick": "unknown",
  "Yarael Poof": "unknown",
  "Zam Wesell": "unknown",
};

export const episodeIdsToPosters = {
  1: "phantom-menace.jpg",
  2: "attack-of-the-clones.jpg",
  3: "revenge-of-the-sith.jpg",
  4: "new-hope.jpg",
  5: "empire-strikes-back.jpg",
  6: "return-of-the-jedi.jpg",
};