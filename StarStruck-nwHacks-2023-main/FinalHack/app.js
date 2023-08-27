//Select DOM
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//Event Listeners
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo);

//Functions

let userInput = [];

function addTodo(e) {
  //Prevent natural behaviour
  e.preventDefault();
  //Create todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //Create list
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;

  userInput.push(todoInput.value);

  //Save to local - do this last
  //Save to local
  saveLocalTodos(todoInput.value);
  //
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  todoInput.value = "";

  //Create trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  //attach final Todo
  todoList.appendChild(todoDiv);
}

function deleteTodo(e) {
  const item = e.target;
  if (item.classList[0] === "trash-btn") {
    // e.target.parentElement.remove();

    const todo = item.parentElement;
    todo.classList.add("fall");
    //at the end
    removeLocalTodos(todo);
    todo.addEventListener("transitionend", (e) => {
      todo.remove();
    });
  }
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
    console.log(todo);
  }
  for (let i = 0; i < userInput.length; i++) {
    if (item.parentElement.innerText == userInput[i]) {
      userInput = userInput.splice(i, i);
    }
  }

  console.log(userInput);
}

function saveLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function removeLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach(function (todo) {
    //Create todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create list
    const newTodo = document.createElement("li");
    newTodo.innerText = todo;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    todoInput.value = "";
    //Create trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //attach final Todo
    todoList.appendChild(todoDiv);
  });
}

celebData = {
  "Ludwig van Beethoven": [
    "Johann Sebastian Bach",
    "Wolfgang Amadeus Mozart",
    "Joseph Haydn",
    "Christoph Willibald Gluck",
    "George Frideric Handel",
    "Luigi Boccherini",
    "Franz Schubert",
    "Johann Nepomuk Hummel",
    "Carl Maria von Weber",
    "Franz Joseph Haydn",
  ],
  "Paul McCartney": [
    "Elvis Presley",
    "Little Richard",
    "Buddy Holly",
    "Chuck Berry",
    "Ray Charles",
    "Fats Domino",
    "John Lennon",
    "Jimi Hendrix",
    "Bob Dylan",
    "The Beatles",
  ],
  "Bob Dylan": [
    "Woody Guthrie",
    "Hank Williams",
    "Blind Willie McTell",
    "Robert Johnson",
    "Lead Belly",
    "Big Joe Williams",
    "Son House",
    "Pete Seeger",
    "The Carter Family",
    "Gospel music",
  ],
  "Elvis Presley": [
    "Dean Martin",
    "Frank Sinatra",
    "Bill Monroe",
    "Arthur 'Big Boy' Crudup",
    "Roy Orbison",
    "Carl Perkins",
    "Little Richard",
    "Ray Charles",
    "The Platters",
    "The Drifters",
  ],
  "Mick Jagger": [
    "Elvis Presley",
    "Muddy Waters",
    "Howlin' Wolf",
    "Little Richard",
    "Ray Charles",
    "Jimmy Reed",
    "John Lee Hooker",
    "Willie Dixon",
    "Otis Redding",
    "James Brown",
  ],
  "Freddie Mercury": [
    "Little Richard",
    "Aretha Franklin",
    "Liza Minnelli",
    "Jimi Hendrix",
    "Elton John",
    "Otis Redding",
    "David Bowie",
    "Freddie Mercury",
    "Led Zeppelin",
    "The Beatles",
  ],
  "Chris Cornell": [
    "The Beatles",
    "Led Zeppelin",
    "Pink Floyd",
    "Queen",
    "The Who",
    "The Doors",
    "Black Sabbath",
    "The Rolling Stones",
    "Neil Young",
    "Bob Dylan",
  ],
  "Michael Jackson": [
    "James Brown",
    "Stevie Wonder",
    "The Temptations",
    "Smokey Robinson",
    "The Supremes",
    "The Four Tops",
    "The Jackson 5",
    "The Beatles",
    "Little Richard",
    "Ray Charles",
  ],
  "Elton John": [
    "The Beatles",
    "Freddie Mercury",
    "David Bowie",
    "The Rolling Stones",
    "Aretha Franklin",
    "Stevie Wonder",
    "Elvis Presley",
    "Bob Dylan",
    "Neil Young",
    "The Who",
  ],
  Madonna: [
    "David Bowie",
    "Prince",
    "Michael Jackson",
    "Whitney Houston",
    "Aretha Franklin",
    "Freddie Mercury",
    "Stevie Wonder",
    "Donna Summer",
    "Gloria Gaynor",
    "Chaka Khan",
  ],
  "Kurt Cobain": [
    "The Beatles",
    "Led Zeppelin",
    "Black Sabbath",
    "Aerosmith",
    "David Bowie",
    "The Pixies",
    "The Melvins",
    "The Stooges",
    "The Meat Puppets",
    "The Dwarves",
  ],
  Eminem: [
    "2Pac",
    "N.W.A",
    "Ice Cube",
    "LL Cool J",
    "Run-DMC",
    "Public Enemy",
    "Beastie Boys",
    "Schoolly D",
    "EPMD",
    "MC Hammer",
  ],
  "50-cent": [
    "Nas",
    "The Notorious B.I.G",
    "Jay-Z",
    "Eminem",
    "Tupac Shakur",
    "LL Cool J",
    "Run-DMC",
    "Public Enemy",
    "Kool G Rap",
    "Ice-T",
  ],
  Tupac: [
    "The Notorious B.I.G",
    "Nas",
    "Ice Cube",
    "Scarface",
    "Snoop Dogg",
    "2Pac",
    "MC Hammer",
    "Eazy-E",
    "Public Enemy",
    "LL Cool J",
  ],
  "Jay-Z": [
    "The Notorious B.I.G",
    "Nas",
    "Tupac Shakur",
    "LL Cool J",
    "Stevie Wonder",
    "Marvin Gaye",
    "Sam Cooke",
    "Donny Hathaway",
    "Frank Sinatra",
    "Miles Davis",
  ],
  "Travis Scott": [
    "OutKast",
    "Kid Cudi",
    "Kanye West",
    "The Weeknd",
    "Frank Ocean",
    "Pharrell Williams",
    "Michael Jackson",
    "Stevie Wonder",
    "Prince",
    "James Brown",
  ],
  "Kanye West": [
    "Michael Jackson",
    "Jay-Z",
    "Nas",
    "Stevie Wonder",
    "A Tribe Called Quest",
    "The Beatles",
    "The Rolling Stones",
    "Prince",
    "James Brown",
    "Bob Dylan",
  ],
  "Cardi B": [
    "Lauryn Hill",
    "Missy Elliott",
    "Lil Kim",
    "Nicki Minaj",
    "Lil Wayne",
    "50 Cent",
    "Beyoncé",
    "Biggie Smalls",
    "Tupac Shakur",
    "Mary J. Blige",
  ],
  "Doja Cat": [
    "Missy Elliott",
    "Outkast",
    "Aaliyah",
    "Nelly Furtado",
    "Pharrell Williams",
    "Lizzo",
    "SZA",
    "Erykah Badu",
    "M.I.A.",
    "TLC",
  ],
  "Lil Baby": [
    "Young Thug",
    "Future",
    "Jeezy",
    "T.I.",
    "Gucci Mane",
    "Yo Gotti",
    "J. Cole",
    "21 Savage",
    "Meek Mill",
    "DaBaby",
  ],
  "Young Thug": [
    "Jay-Z",
    "OutKast",
    "Gucci Mane",
    "Lil Wayne",
    "T.I.",
    "Kendrick Lamar",
    "Future",
    "Jeezy",
    "Meek Mill",
    "21 Savage",
  ],
  "21 Savage": [
    "Jay-Z",
    "OutKast",
    "Gucci Mane",
    "Lil Wayne",
    "T.I.",
    "Jeezy",
    "Meek Mill",
    "Future",
    " Young Thug",
    "Kendrick Lamar",
  ],
  "Justin Bieber": [
    "Usher",
    "Michael Jackson",
    "Chris Brown",
    "Bruno Mars",
    "Stevie Wonder",
    "Mariah Carey",
    "Frank Sinatra",
    "Whitney Houston",
    "Elton John",
    "John Mayer",
  ],
  "Taylor Swift": [
    "Fleetwood Mac",
    "Ella Fitzgerald",
    "Shania Twain",
    "Tim McGraw",
    "Faith Hill",
    "Dixie Chicks",
    "Garth Brooks",
    "Loretta Lynn",
    "Merle Haggard",
    "George Strait",
  ],
  "Ed Sheeran": [
    "Elton John",
    "The Beatles",
    "Bob Dylan",
    "Eric Clapton",
    "Van Morrison",
    "The Streets",
    "Bob Marley",
    "Don McLean",
    "Damien Rice",
    "Coldplay",
  ],
  Sza: [
    "Erykah Badu",
    "Lauryn Hill",
    "Nina Simone",
    "Jill Scott",
    "Aaliyah",
    "D'Angelo",
    "Sade",
    "India.Arie",
    "Jhene Aiko",
    "Ella Mai",
  ],
  "Miley Cyrus": [
    "Dolly Parton",
    "Janis Joplin",
    "Stevie Nicks",
    "Lana Del Rey",
    "Billie Eilish",
    "Björk",
    "Florence and the Machine",
    "Lady Gaga",
    "Pink",
    "Tina Turner",
  ],
  "Billie Eilish": [
    "Lana Del Rey",
    "Frank Ocean",
    "Tyler, The Creator",
    "Eminem",
    "A$AP Rocky",
    "Childish Gambino",
    "The Weeknd",
    "Earl Sweatshirt",
    "FKA twigs",
    "Solange",
  ],
  "Lana Del Rey": [
    "Nina Simone",
    "The Velvet Underground",
    "David Bowie",
    "Elvis Presley",
    "Frank Sinatra",
    "The Doors",
    "Bob Dylan",
    "The Beatles",
    "The Beach Boys",
    "Björk",
  ],
  "Phoebe Bridgers": [
    "Conor Oberst",
    "Elliott Smith",
    "Bright Eyes",
    "Fleet Foxes",
    "Bon Iver",
    "The Beatles",
    "Joni Mitchell",
    "Bob Dylan",
    "Lucinda Williams",
    "Neil Young",
  ],
  "Ariana Grande": [
    "Whitney Houston",
    "Mariah Carey",
    "Celine Dion",
    "Beyoncé",
    "Madonna",
    "Brandy",
    "Janet Jackson",
    "Michael Jackson",
    "Aaliyah",
    "Lauryn Hill",
  ],
  "Olivia Rodrigo": [
    "Taylor Swift",
    "Carly Rae Jepsen",
    "Harry Styles",
    "Billie Eilish",
    "Lana Del Rey",
    "Phoebe Bridgers",
    "The 1975",
    "Alanis Morissette",
    "Shania Twain",
    "Fleetwood Mac",
  ],
  "Harry Styles": [
    "David Bowie",
    "Elvis Presley",
    "Queen",
    "The Beatles",
    "The Rolling Stones",
    "Bob Dylan",
    "Fleetwood Mac",
    "The Kinks",
    "The Band",
    "The Beatles",
  ],
  "Shawn Mendes": [
    "Ed Sheeran",
    "John Mayer",
    "Justin Timberlake",
    "Bruno Mars",
    "Charlie Puth",
    "Sam Smith",
    "Shawn Mendes",
    "The Weeknd",
    "Post Malone",
    "Khalid",
  ],
  "Bruno Mars": [
    "Michael Jackson",
    "Prince",
    "Stevie Wonder",
    "James Brown",
    "Whitney Houston",
    "Marvin Gaye",
    "Aretha Franklin",
    "Donna Summer",
    "Earth, Wind & Fire",
    "Chic",
  ],
  Khalid: [
    "Frank Ocean",
    "Bruno Mars",
    "The Weeknd",
    "Drake",
    "Kendrick Lamar",
    "J. Cole",
    "Tyler, The Creator",
    "Childish Gambino",
    "A$AP Rocky",
    "Travis Scott",
  ],
  "Justin Bieber": [
    "Michael Jackson",
    "Usher",
    "Chris Brown",
    "Bruno Mars",
    "Frank Sinatra",
    "Elvis Presley",
    "Stevie Wonder",
    "Lionel Richie",
    "Mariah Carey",
    "Whitney Houston",
  ],
  Coldplay: [
    "Radiohead",
    "U2",
    "The Beatles",
    "Pink Floyd",
    "David Bowie",
    "The Rolling Stones",
    "Led Zeppelin",
    "The Police",
    "The Smiths",
    "The Cure",
  ],
  OneRepublic: [
    "U2",
    "Coldplay",
    "The Killers",
    "Keane",
    "Snow Patrol",
    "Muse",
    "Radiohead",
    "The Fray",
    "The Script",
    "Imagine Dragons",
  ],
  "Above & Beyond": [
    "Deadmau5",
    "Armin van Buuren",
    "Tiësto",
    "Paul Oakenfold",
    "Paul van Dyk",
    "John Digweed",
    "Carl Cox",
    "Eric Prydz",
    "David Guetta",
  ],
  "The Chainsmokers": [
    "Calvin Harris",
    "David Guetta",
    "Zedd",
    "Martin Garrix",
    "Avicii",
    "Diplo",
    "Skrillex",
    "Zeds Dead",
    "Marshmello",
    "Tiesto",
  ],
  Avicii: [
    "Eric Prydz",
    "deadmau5",
    "Tiesto",
    "David Guetta",
    "Calvin Harris",
    "Swedish House Mafia",
    "Armin van Buuren",
    "Above & Beyond",
    "Porter Robinson",
    "Axwell",
  ],
  "DJ Khaled": [
    "Jay-Z",
    "Lil Wayne",
    "Rick Ross",
    "Meek Mill",
    "Drake",
    "Future",
    "Kendrick Lamar",
    "J. Cole",
    "Nas",
    "Travis Scott",
  ],
  Flume: [
    "Aphex Twin",
    "Bonobo",
    "DJ Shadow",
    "Four Tet",
    "James Blake",
    "Jamie xx",
    "Todd Terje",
    "Mount Kimbie",
    "Moderat",
    "The Chemical Brothers",
  ],
  "Alan Walker": [
    "Martin Garrix",
    "Avicii",
    "David Guetta",
    "Calvin Harris",
    "Zedd",
    "Tiesto",
    "Hardwell",
    "Dimitri Vegas & Like Mike",
    "Afrojack",
    "Don Diablo",
  ],
  "Seven Lions": [
    "Above & Beyond",
    "Armin van Buuren",
    "Tiesto",
    "Deadmau5",
    "Eric Prydz",
    "Porter Robinson",
    "Zeds Dead",
    "Noisia",
    "Knife Party",
    "Excision",
  ],
  "Arcade Fire": [
    "David Bowie",
    "Talking Heads",
    "The Beatles",
    "U2",
    "The Smiths",
    "The Talking Heads",
    "Joy Division",
    "Radiohead",
    "Pulp",
    "Interpol",
  ],
  Radiohead: [
    "David Bowie",
    "Pink Floyd",
    "The Beatles",
    "Joy Division",
    "Brian Eno",
    "Talking Heads",
    "Can",
    "The Smiths",
    "The Pixies",
    "Neil Young",
  ],
  "Green Day": [
    "The Beatles",
    "The Who",
    "The Ramones",
    "The Clash",
    "The Kinks",
    "The Sex Pistols",
    "The Rolling Stones",
    "The Smiths",
    "The Stooges",
    "Led Zeppelin",
  ],
  Gorillaz: [
    "David Bowie",
    "Brian Eno",
    "Prince",
    "Outkast",
    "De La Soul",
    "Jamie xx",
    "The Specials",
    "The Clash",
    "Massive Attack",
    "Aphex Twin",
  ],
  "John Mayer": [
    "B.B. King",
    "Eric Clapton",
    "Stevie Ray Vaughan",
    "Jimi Hendrix",
    "Muddy Waters",
    "Freddie King",
    "Ray Charles",
    "Otis Redding",
    "BB King",
    "Albert King",
  ],
  Metallica: [
    "Black Sabbath",
    "Iron Maiden",
    "Judas Priest",
    "Motörhead",
    "Led Zeppelin",
    "Deep Purple",
    "UFO",
    "Diamond Head",
    "Angel Witch",
    "Venom",
  ],
  "Morgan Wallen": [
    "George Strait",
    "Alan Jackson",
    "Merle Haggard",
    "Waylon Jennings",
    "Johnny Cash",
    "Chris Stapleton",
    "Eric Church",
    "Luke Bryan",
    "Kane Brown",
    "Brad Paisley",
  ],
  "Luke Bryan": [
    "George Strait",
    "Alan Jackson",
    "Merle Haggard",
    "Waylon Jennings",
    "Johnny Cash",
    "Garth Brooks",
    "Tim McGraw",
    "Travis Tritt",
    "Zac Brown Band",
    "Keith Urban",
  ],
  "Blink 182": [
    "Descendents",
    "Bad Religion",
    "The Ramones",
    "The Cure",
    "Screeching Weasels",
    "The Vandals",
    "The Police",
    "The Cars",
    "The Smiths",
    "The Beatles",
  ],
  "Travis Barker": [
    "Led Zeppelin",
    "The Beatles",
    "Jimi Hendrix",
    "The Who",
    "Deep Purple",
    "Stevie Wonder",
    "Jeff Buckley",
    "Bad Brains",
    "The Doors",
    "The Police",
  ],
  Diplo: [
    "The Chemical Brothers",
    "Aphex Twin",
    "DJ Shadow",
    "Basement Jaxx",
    "Soulwax",
    "Justice",
    "Modeselektor",
    "DJ Premier",
    "The Prodigy",
    "A-Trak",
  ],
  "Selena Gomez": [
    "Mariah Carey",
    "Whitney Houston",
    "Christina Aguilera",
    "Aaliyah",
    "Beyoncé",
    "Celine Dion",
    "Britney Spears",
    "Madonna",
    "Janet Jackson",
    "Shakira",
  ],
};

celebInfo = {
  "Ludwig van Beethoven":
    "Beethoven was a German composer and pianist who is widely considered one of the greatest composers of all time. Despite being deaf in his later years, he continued to compose some of his most famous works, including his 9th Symphony and Missa Solemnis.",
  "Paul McCartney":
    "Paul McCartney is a British singer-songwriter and multi-instrumentalist, best known as a member of the Beatles, one of the most successful and influential bands in the history of popular music. He has also had a successful solo career, releasing several critically acclaimed albums and receiving numerous awards throughout his career, including multiple Grammy Awards.",
  "Bob Dylan":
    "Bob Dylan is an American singer-songwriter, musician, and artist, known for his influential songs that incorporate social and political commentary. He is widely regarded as one of the most important figures of 20th century popular music and has received numerous awards throughout his career, including the Nobel Prize in Literature in 2016.",
  "Elvis Presley":
    "Elvis Presley was an American singer, musician, and actor, often referred to as the King of Rock and Roll for his contributions to the genre and his impact on popular culture. He rose to fame in the mid-1950s with his dynamic performances and good looks, and went on to become one of the best-selling solo artists of all time.",
  "Mick Jagger":
    "Mick Jagger is an English singer, songwriter, and actor, best known as the lead vocalist of the Rolling Stones, one of the most successful and influential bands in the history of rock music. He has also had a successful solo career and is known for his dynamic stage presence, powerful vocals, and songwriting abilities.",
  "Chris Cornell":
    "Chris Cornell was an American singer, songwriter, and musician, best known as the lead vocalist for Soundgarden and Audioslave. He was widely regarded as one of the most powerful and dynamic vocalists of his generation, and has sold over 30 million records worldwide. He also had a successful solo career, which includes the release of five studio albums, and has been credited as one of the leading voices of the 90s grunge movement.",
  "Michael Jackson":
    "Michael Jackson was an American singer, songwriter, and dancer, who is widely regarded as one of the greatest entertainers of all time. He began his career as a child in the Jackson 5 and went on to become a solo artist, known for his electrifying stage presence, smooth dance moves and powerful voice. He sold over 350 million records worldwide and is one of the best-selling music artists of all time.",
  "Elton John":
    "Elton John is an English singer, songwriter, pianist and composer. He is one of the most successful and popular musicians of all time, with a career spanning over five decades, selling more than 300 million records worldwide. He has written some of the most iconic and enduring songs in pop music history, including Rocket Man, Tiny Dancer, Goodbye Yellow Brick Road, and Don't Let the Sun Go Down on Me",
  Madonna:
    "Madonna is an American singer, songwriter, and actress who is considered a pop culture icon and one of the most successful and influential female artists of all time. Throughout her career, she has pushed the boundaries of musical and visual presentation, creating a legacy of innovation and impact that has influenced multiple generations.",
  "Kurt Cobain":
    "Kurt Cobain was an American singer, songwriter, and musician, best known as the lead vocalist and guitarist of Nirvana, one of the most influential and successful bands of the grunge movement. He was a prominent figure of the alternative rock movement and his songwriting and personal life have been the subject of much critical and public attention. He died in 1994 at the age of 27 by suicide.",
  Eminem:
    "Eminem, also known as Marshall Mathers, is an American rapper, songwriter, and record producer. He is one of the most successful and influential hip-hop artists of all time, known for his complex and controversial lyrics, as well as his technical rapping skills and versatility as an artist. He has sold over 150 million records worldwide and has won 15 Grammy awards.",
  "50-cent":
    "50 Cent, also known as Curtis Jackson, is an American rapper, actor, and businessman. He rose to fame with his debut album Get Rich or Die Tryin' in 2003, which sold over 12 million copies worldwide and earned him several Grammy nominations. He is known for his aggressive and confident flow, and has sold over 30 million albums worldwide.",
  Tupac:
    "Tupac Shakur, also known as 2Pac, was an American rapper, actor and songwriter. He is considered one of the most significant and influential rappers of all time, known for his powerful and socially conscious lyrics. He sold over 75 million records worldwide and has been posthumously honored with several awards and accolades, including induction into the Rock and Roll Hall of Fame in 2017. He was killed in a drive-by shooting in 1996.",
  "Jay-Z":
    "Jay-Z, also known as Shawn Corey Carter, is an American rapper, songwriter, record producer, entrepreneur and businessman. He is one of the most successful and influential hip-hop artists of all time, selling over 150 million records worldwide and winning 21 Grammy awards. He is also the founder of the record label Roc-A-Fella Records, and is known for his business acumen, with a wide range of ventures including Tidal, a music streaming service, and the champagne brand Ace of Spades.",
  "Travis Scott":
    "Travis Scott, whose real name is Jacques Berman Webster II, is an American rapper, singer, songwriter and record producer. He is known for his dynamic live performances and his fusion of hip-hop, psychedelic, and trap music. He has released multiple successful albums and is known for his hit songs such as Goosebumps and Butterfly Effect. He has also collaborated with several other successful artists in the music industry.",
  "Cardi B":
    "Cardi B, whose real name is Belcalis Marlenis Almánzar, is an American rapper, singer, and television personality. She rose to fame with her single Bodak Yellow in 2017 and has since released several successful albums and singles. She has become one of the most popular and influential female rappers in the industry, known for her bold and unapologetic style, as well as her ability to blend hip-hop, Latin and R&B music.",
  "Goja Cat":
    "Doja Cat, whose real name is Amala Ratna Zandile Dlamini, is an American singer, rapper, and songwriter. She gained fame with her viral hit Mooo! in 2018, and her music is known for its blending of various genres, including hip-hop, R&B, funk, and electropop. She has released multiple successful albums and singles and has been recognized for her unique style, captivating voice and ability to mix different sounds.",
  "Lil Baby":
    "Lil Baby, whose real name is Dominique Armani Jones, is an American rapper, singer and songwriter from Atlanta, Georgia. He rose to fame with his debut studio album Harder Than Ever in 2018, which featured hit songs such as Yes Indeed and Drip Too Hard. He is known for his melodic and emotional delivery, and his ability to blend trap, hip-hop and R&B music. He has been recognized for his versatility as an artist and his ability to connect with fans through his storytelling.",
  "Young Thug":
    "Young Thug, whose real name is Jeffery Lamar Williams, is an American rapper, singer and songwriter from Atlanta, Georgia. He is known for his eccentric style, unique vocal delivery and his ability to blend trap, hip-hop and R&B music. He has released multiple successful albums and singles, and has been recognized for his versatility as an artist, and his ability to innovate and push the boundaries of the hip-hop genre.",
  "21 Savage":
    "21 Savage, whose real name is Shayaa Bin Abraham-Joseph, is an American rapper, singer and songwriter from Atlanta, Georgia. He is known for his dark and intense trap-inspired sound, his hard-hitting lyrics and his ability to blend trap, hip-hop and R&B music. He has released multiple successful albums and singles and has been recognized for his ability to connect with fans through his raw and authentic storytelling.",
  "Justin Bieber":
    "Justin Bieber is a Canadian singer, songwriter, and actor. He rose to fame as a teenager in 2008 with his debut album My World and has since become one of the biggest pop stars in the world, known for his catchy pop songs, dynamic performances and his ability to connect with fans through his music. He has sold over 150 million records worldwide and has won multiple awards throughout his career including a Grammy award.",
  "Taylor Swift":
    "Taylor Swift is an American singer-songwriter and actress, known for her narrative songwriting and her ability to blend country, pop and rock music. She has released multiple successful albums and singles, and has sold over 200 million records worldwide. She has won multiple awards throughout her career, including 10 Grammy Awards and an Emmy Award. She is also known for her philanthropic efforts and her ability to connect with fans through her music.",
  "Ed Sheeran":
    "Ed Sheeran is an English singer, songwriter, and record producer, known for his blend of pop, folk and hip-hop music. He has released multiple successful albums and singles, selling over 150 million records worldwide. He has won multiple awards throughout his career, including multiple Grammy Awards, and is known for his ability to connect with fans through his storytelling and heartfelt lyrics.",
  Sza: "SZA, whose real name is Solána Imani Rowe, is an American singer, songwriter and actress, known for her distinct blend of R&B, hip hop, neo-soul and alternative music. She has released multiple successful albums and singles, and is known for her unique vocal style, captivating performances and her ability to connect with fans through her relatable lyrics and vulnerability in her music",
  "Miley Cyrus":
    "Miley Cyrus is an American singer,songwriter, and actress, known for her dynamic performances, her ability to blend pop, country and rock music, and her evolution as an artist. She rose to fame as a child star on the Disney channel's Hannah Montana and has since released multiple successful albums and singles, sold over 150 million records worldwide, and won multiple awards throughout her career, including a MTV Video Music Award and a Grammy nomination.",
  "Billie Eilish":
    "Billie Eilish is an American singer, songwriter and record producer, known for her unique blend of alternative, pop and electronic music. She rose to fame with her debut single Ocean Eyes in 2016, and has since released multiple successful albums and singles, selling over 50 million records worldwide, and winning multiple awards throughout her career, including five Grammy Awards, an American Music Award, a Brit Award and a Guinness World Record for the first solo artist to write and record a James Bond theme song.",
  "Lana Del Ray":
    "Lana Del Rey, whose real name is Elizabeth Woolridge Grant, is an American singer, songwriter, and record producer, known for her dreamy, cinematic style and her ability to blend pop, alternative, and trip-hop music. She has released multiple successful albums and singles, and is known for her unique vocal style, captivating performances, and her ability to connect with fans through her relatable lyrics and storytelling.",
  "Phoebe Bridgers":
    "Phoebe Bridgers is an American singer-songwriter, known for her introspective and emotionally charged indie-folk music. She has released multiple successful albums and has been recognized for her powerful and evocative songwriting, her emotive vocal delivery and her ability to connect with fans through her personal and relatable lyrics. She has also been recognized with multiple Grammy nominations, including the Best New Artist in 2021.",
  "Ariana Grande":
    "Ariana Grande is an American singer, songwriter and actress, known for her powerful and emotive vocal range, her ability to blend pop, R&B and hip-hop music, and her dynamic live performances. She has released multiple successful albums and singles, selling over 150 million records worldwide, and has won multiple awards throughout her career, including multiple Grammy nominations and a Billboard Music Award for Woman of the Year in 2019.",
  "Olivia Rodrigo":
    "Olivia Rodrigo is an American singer, songwriter and actress, known for her ability to blend pop, rock and country music. She rose to fame with her debut single drivers license in 2021 and has since released her debut album Sour which has gained critical acclaim and commercial success. She has been recognized for her relatable and authentic lyrics and for her powerful vocal performances.",
  "Harry Styles":
    "Harry Styles is an English singer,songwriter and actor, best known as a former member of the boy band One Direction. He has released multiple successful albums and singles as a solo artist, known for his blend of pop, rock and folk music. He has been recognized for his dynamic live performances, emotive songwriting, and his ability to connect with fans through his music.",
  "Shawn Mendes":
    "Shawn Mendes is a Canadian singer-songwriter and model, known for his blend of pop and R&B music. He has released multiple successful albums and singles, and has been recognized for his emotive songwriting, dynamic live performances, and his ability to connect with fans through his relatable lyrics and vulnerability in his music. He has won multiple awards throughout his career, including multiple MTV Europe Music Awards.",
  "Bruno Mars":
    "Bruno Mars is an American singer,songwriter, and record producer, known for his blend of R&B, funk, soul, and pop music. He has released multiple successful albums and singles, and has been recognized for his dynamic live performances, emotive songwriting, and his ability to connect with fans through his music. He has won multiple awards throughout his career, including multiple Grammy Awards, and has sold over 200 million records worldwide.",
  Khalid:
    "Khalid is an American singer,songwriter and record producer, known for his blend of R&B, soul, and pop music. He has released multiple successful albums and singles, and has been recognized for his emotive songwriting, dynamic live performances, and his ability to connect with fans through his relatable lyrics and vulnerability in his music. He has won multiple awards throughout his career, including multiple American Music Awards and a MTV Video Music Award.",
  "Justin Bieber":
    "Justin Bieber is a Canadian singer,songwriter, and actor. He rose to fame as a teenager in 2008 with his debut album My World and has since become one of the biggest pop stars in the world, known for his catchy pop songs, dynamic performances and his ability to connect with fans through his music. He has sold over 150 million records worldwide and has won multiple awards throughout his career including a Grammy award.",
  Coldplay:
    "Coldplay is a British rock band formed in 1996, known for their uplifting, emotive and melodic music that blends rock, pop and alternative styles. They have released multiple successful albums and singles and have sold over 100 million records worldwide, and have won multiple awards throughout their career, including 7 Grammy Awards, 6 Brit Awards, an Ivor Novello Award and a Mercury Prize.",
  OneRepublic:
    "OneRepublic is an American rock band formed in 2002, known for their energetic and melodic music that blends pop, rock, and alternative styles. They have released multiple successful albums and singles, and are known for their dynamic live performances, emotive songwriting, and their ability to connect with fans through their music. They have sold over 20 million records worldwide and have won multiple awards throughout their career.",
  "Above & Beyond":
    "Above & Beyond is an British electronic music group formed in 2000, known for their uplifting and melodic trance and progressive house music. They have released multiple successful albums and singles, and are known for their dynamic live performances, emotive songwriting, and their ability to connect with fans through their music. They have sold over 15 million records worldwide and have won multiple awards throughout their career, including multiple DJ Awards and International Dance Music Awards.",
  "The Chainsmokers":
    "The Chainsmokers are an American DJ and production duo formed in 2012, known for their blend of electronic, dance and pop music. They have released multiple successful albums and singles, and have been recognized for their dynamic live performances, emotive songwriting, and their ability to connect with fans through their music. They have sold over 50 million records worldwide and have won multiple awards throughout their career, including multiple American Music Awards, Billboard Music Awards and a Grammy award.",
  Avicii:
    "Avicii, whose real name was Tim Bergling, was a Swedish DJ, electronic musician, and songwriter. He was known for his popular electronic dance music (EDM) tracks and albums, and was considered one of the most successful DJs in the world, selling over 80 million records worldwide. He passed away in April 2018.",
  "DJ Khaled":
    "DJ Khaled, whose real name is Khaled Khaled, is an American DJ, record executive, songwriter, and record producer. He is known for his collaborations with various successful artists and for his motivational speeches, often referred as keys to success, which he incorporates in his music and social media. He has released multiple successful albums and singles, and has sold over 50 million records worldwide.",
  Flume:
    "Flume, whose real name is Harley Streten, is an Australian electronic musician, DJ, and record producer. He is known for his experimental and innovative electronic music that blends genres such as downtempo, IDM, and ambient and has released multiple successful albums and singles. He has been recognized for his dynamic live performances and his ability to connect with fans through his music and has won multiple awards throughout his career, including multiple ARIA Music Awards.",
  "Alan Walker":
    "Alan Walker is a Norwegian DJ and record producer known for his electronic dance music and remixes. He rose to fame with his single Faded in 2015, which became an international hit and has since released multiple successful albums and singles. He has been recognized for his dynamic live performances and his ability to connect with fans through his music, He has won multiple awards throughout his career, including multiple NRJ Music Awards and MTV Europe Music Awards.",
  "Seven Lions":
    "Seven Lions, whose real name is Jeff Montalvo, is an American DJ, record producer and musician known for his blend of dubstep, trance and melodic bass music. He has released multiple successful albums and singles and has been recognized for his emotive and melodic sound, dynamic live performances, and his ability to connect with fans through his music. He has won multiple awards throughout his career, including multiple Electronic Music Awards and International Dance Music Awards.",
  "Arcade Fire":
    "Arcade Fire is a Canadian indie rock band formed in 2001, known for their dynamic and emotive music that blends rock, pop and alternative styles. They have released multiple successful albums and singles and have been recognized for their dynamic live performances, politically charged lyrics and their ability to connect with fans through their music. They have won multiple awards throughout their career, including multiple Grammy Awards, Brit Awards, and a Mercury Prize.",
  Radiohead:
    "Radiohead is an English rock band formed in 1985, known for their innovative and experimental approach to rock music, blending elements of alternative rock, electronic, experimental and art rock. They have released multiple successful albums and singles and have been recognized for their dynamic live performances, thought-provoking lyrics and their ability to connect with fans through their music. They have won multiple awards throughout their career, including multiple Grammy Awards, Brit Awards, and a Mercury Prize.",
  "Green Day":
    "Green Day is an American punk rock band formed in 1986, known for their energetic and politically charged music that blends punk, pop punk, and alternative rock. They have released multiple successful albums and singles and have sold over 85 million records worldwide. They have been recognized for their dynamic live performances, relatable lyrics and their ability to connect with fans through their music. They have won multiple awards throughout their career, including multiple Grammy Awards and MTV Video Music Awards.",
  Gorillaz:
    "Gorillaz is a British virtual band formed in 1998, consisting of four animated members created by Damon Albarn and Jamie Hewlett. They are known for their eclectic mix of genres, blending elements of alternative rock, trip hop, hip hop, electronic, funk and world music. They have released multiple successful albums and singles and have sold over 20 million records worldwide. They have been recognized for their unique visual style and their ability to connect with fans through their music and live performances.",
  "John Mayer":
    "John Mayer is an American singer-songwriter, guitarist, and record producer, known for his blend of blues, rock, and pop music. He has released multiple successful albums and singles, and has been recognized for his emotive songwriting, dynamic live performances, and his ability to connect with fans through his relatable lyrics and vulnerability in his music. He has sold over 45 million records worldwide and has won multiple awards throughout his career, including multiple Grammy Awards.",
  Metallica:
    "Metallica is an American heavy metal band formed in 1981, known for their intense and aggressive style of music that blends elements of heavy metal, thrash metal, and hard rock. They have released multiple successful albums and singles, and have sold over 125 million records worldwide. They have been recognized for their dynamic live performances, politically charged lyrics and their ability to connect with fans through their music and have won multiple awards throughout their career, including multiple Grammy Awards, MTV Video Music Awards and American Music Awards.",
  "Morgan Wallen":
    "Morgan Wallen is an American country music singer and songwriter known for his blend of traditional and contemporary country music. He has released multiple successful albums and singles, and has been recognized for his emotive songwriting, dynamic live performances, and his ability to connect with fans through his relatable lyrics and vulnerability in his music. He has been nominated for multiple awards throughout his career, including CMA Awards, Academy of Country Music Awards, and Grammy Awards.",
  "Luke Bryan":
    "Luke Bryan is an American country music singer, songwriter and musician known for his blend of traditional and contemporary country music. He has released multiple successful albums and singles, and has been recognized for his emotive songwriting, dynamic live performances, and his ability to connect with fans through his relatable lyrics and vulnerability in his music. He has won multiple awards throughout his career, including multiple CMA Awards, Academy of Country Music Awards, and American Music Awards.",
  "Blink 182":
    "Blink-182 is an American rock band formed in 1992, known for their energetic and playful blend of pop punk and alternative rock. They have released multiple successful albums and singles and have sold over 50 million records worldwide. They have been recognized for their dynamic live performances, relatable lyrics and their ability to connect with fans through their music. They have won multiple awards throughout their career, including multiple MTV Video Music Awards and American Music Awards.",
  "Travis Barker":
    "Travis Barker is an American musician and producer, best known as the drummer for the American rock band Blink-182. He is widely considered one of the greatest drummers of all time and has been recognized for his dynamic live performances, emotive drumming style, and his ability to connect with fans through his music. He has also collaborated and produced with many other artists in the music industry.",
  Diplo:
    "Diplo, whose real name is Thomas Wesley Pentz, is an American DJ, record producer, and songwriter known for his electronic and dance music. He is the founder of the record label Mad Decent, and has released multiple successful albums and singles. He has been recognized for his dynamic live performances, emotive production, and his ability to connect with fans through his music, and he has won multiple awards throughout his career, including multiple MTV Europe Music Awards, International Dance Music Awards, and DJ Awards.",
  "Selena Gomez":
    "Selena Gomez is an American singer,songwriter, actress and television producer, known for her blend of pop and R&B music. She rose to fame as a teenager in the early 2000s as the lead singer of the band Selena Gomez & the Scene and later as a solo artist, known for her catchy pop songs, dynamic performances and her ability to connect with fans through her music. She has sold over 75 million records worldwide and has won multiple awards throughout her career, including multiple American Music Awards and MTV Video Music Awards.",
};

// HELPER
// Adjust the songList input to remove capitals, puncuation, and spaces from songs
function adjustSongList(songList) {
  for (let i = 0; i < songList.length; i++) {
    songList[i] = songList[i].toLowerCase();
    songList[i] = songList[i].replace(/[.,\/#!+$%\^&\*;:{}=\-_`~()]/g, "");
    songList[i] = songList[i].replace(/ /g, "");
  }
  return songList;
}

userSongList = adjustSongList(userInput);

// HELPER
// Calculate the percent match by comparing the userSongList to each celebSongList
// Output is a dictionary where key=celebName and value=percentMatch
percentMatches = {};
function generatePercentMatches(celebSongList) {
  var matches = 0;
  for (let song of celebSongList) {
    if (adjustSongList(userInput).includes(song)) {
      matches += 1;
    }
  }
  percentScore = (matches / celebSongList.length) * 100;
  return percentScore;
}

// HELPER
// Takes a the dictionary generate by the above function and returns top 3 celeb matches
function reverseDictionary(percentMatches) {
  reverseDic = {};
  for (let key in percentMatches) {
    percent = percentMatches[key];
    if (percent in reverseDic) {
      if (Array.isArray(reverseDic[percent])) {
        reverseDic[percent].push(key);
      }
    } else {
      reverseDic[percent] = [key];
    }
  }
  return reverseDic;
}

// HELPER
// takes the reversedDictionary and returns top 3 celeb matches
function getTopThree(reverseDic) {
  orderedList = [];
  listofKeys = Object.keys(reverseDic);

  for (let i = 0; i < listofKeys.length; i++) {
    listofKeys[i] = parseFloat(listofKeys[i]);
  }

  listofKeys.sort(function (a, b) {
    return b - a;
  });

  for (key of listofKeys) {
    orderedList = orderedList.concat(reverseDic[key]);
  }

  return orderedList.splice(0, 3);
}

// MAIN OPERATION
// Returns a dictionary where the key is the dummyUser and the value is the percent match between dummyUser and newUser
function mainOperation() {
  for (let key in celebData) {
    percentMatches[key] = generatePercentMatches(
      adjustSongList(celebData[key])
    );
  }

  flipedDictionary = reverseDictionary(percentMatches);

  topThreeMatches = getTopThree(flipedDictionary);

  return topThreeMatches;
}

popUp.style.display = "none";

document.getElementById("submit").addEventListener("click", function (event) {
  popUp.style.display = "block";
  var returnArray = mainOperation();
  document.getElementById("c1h").innerText =
    "Your top match is " + returnArray[0];
  document.getElementById("c2h").innerText =
    "Your second match is " + returnArray[1];
  document.getElementById("c3h").innerText =
    "Your third match is " + returnArray[2];

  document.getElementById("c1p").innerText = celebInfo[returnArray[0]];
  document.getElementById("c2p").innerText = celebInfo[returnArray[1]];
  document.getElementById("c3p").innerText = celebInfo[returnArray[2]];

  console.log(returnArray);
  console.log(adjustSongList(userInput));
});

document.querySelector(".exitPopUp").addEventListener("click", function () {
  event.preventDefault();
  popUp.style.display = "none";
});
