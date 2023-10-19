function clearAll() {
  const memeContainer = document.querySelector(".meme-content");
  const jokeContainer = document.querySelector(".joke-content");
  const quoteContainer = document.querySelector(".quote-content");
  const riddleContainer = document.querySelector(".riddle-content");

  memeContainer.innerHTML = "";
  jokeContainer.innerHTML = "";
  quoteContainer.innerHTML = "";
  riddleContainer.innerHTML = "";
}

function showMeme() {
  const randomMemeUrl = getRandomData("memes");

  const container = document.querySelector(".meme-content");
  const newMeme = document.createElement("img");
  newMeme.setAttribute("src", randomMemeUrl);

  clearAll();

  container.appendChild(newMeme);
}

function showJoke() {
  const randomJoke = getRandomData("jokes");

  const container = document.querySelector(".joke-content");
  const newJoke = document.createElement("p");
  newJoke.textContent = randomJoke;

  clearAll();

  container.appendChild(newJoke);
}

function showQuote() {
  const randomQuote = getRandomData("quotes");

  const container = document.querySelector(".quote-content");
  const newQuoteText = document.createElement("p");
  const newQuoteAuthor = document.createElement("p");
  newQuoteText.textContent = randomQuote.quote;
  newQuoteAuthor.textContent = "- " + randomQuote.author;

  clearAll();

  container.appendChild(newQuoteText);
  container.appendChild(newQuoteAuthor);
}

function showRiddle() {
  const randomRiddle = getRandomData("riddles");

  const container = document.querySelector(".riddle-content");
  const newRiddleText = document.createElement("p");
  const newRiddleAnswer = document.createElement("p");
  newRiddleText.textContent = randomRiddle.question;
  newRiddleAnswer.textContent = "Answer: " + randomRiddle.answer;
  newRiddleAnswer.setAttribute("id", "riddle-answer");

  clearAll();

  newRiddleAnswer.hidden = true;

  container.appendChild(newRiddleText);
  container.appendChild(newRiddleAnswer);
}

function revealRiddleAnswer() {
  const container = document.querySelector(".riddle-content");
  const riddle = container.querySelector("p");
  const riddleAnswer = document.querySelector("#riddle-answer");

  if (riddle && riddleAnswer.hidden) {
    riddleAnswer.hidden = false;
  } else if (riddle && riddleAnswer) {
    alert("The answer is already exposed");
  } else {
    alert("There is no riddle to show the answer for");
  }
}

function getRandomData(type) {
  return data[type][rn(data[type].length)];
}

const memes = [
  "https://uploads-ssl.webflow.com/5f3c19f18169b62a0d0bf387/60d33be8cf4ba7565123c8bc_YPD3ulQQAGQpOcnqIm3QzSTRgzmr1SexpW9ZjMpJ1mAnUxx4iF05XOTu44sk0qQG-8XgBcYmGZGAD-5SAZvJl3TjtmhgWnn-w0C2XKwhBscV78RVvhwZfyp0v_Pa6sNj5zxpOvRW.png",
  "https://uploads-ssl.webflow.com/5f3c19f18169b62a0d0bf387/60d33be745999ac3353f49bd_KyhyHs_Rlf3kWWoC8Al_C9Y9SZ4dQu_K0fiLIsiCA5Gl8M3Eq77np68PFUgDPd6lKA8EmhKgWs7joHpsQm8upaoIayr4hi6O7Oj3HTzcoVop1HORjy74OdVTZNqFg_mIlfotr0EJ.png",
  "https://uploads-ssl.webflow.com/5f3c19f18169b62a0d0bf387/60d33be8ea3ab2c96bf56e0c_BXId-G1Ggyl_HTcQQpC0m2beUlGyAAgFrBsIsvSjdopQ3Bcu2ElhryoCUXku9YSlWYEBnlpSXFo7a7GrmEC7iIi5lpyuQjl2H7z5wEv_G1DrRVheKrpw5KyvOUrZC2tvAIFCwKxt.png",
  "https://uploads-ssl.webflow.com/5f3c19f18169b62a0d0bf387/60d33be9e145cb9e6c28fa8f_2xb2f2VxehbkWOhOVqOghOYg4ifSVtTDD4XTatQRAUeVQJZidqxyydLvkwASiplALthYScZlW13PNFsd66-DV719GoSyzFQ-d6VsdoDNn44IAXGtu8xQV4W1mmhp9SBmd9A0dO2L.png",
  "https://uploads-ssl.webflow.com/5f3c19f18169b62a0d0bf387/60d33be9ea3ab2738bf56e0d_rO0ikUo-hnDwgg9SOQOCEGZGVmnMAzwWIdeUhraC6yoIUcPu6rOs3p9MojWC-BrpT2rqCTxRNg8WKl8cJYlgpScy91C25V0qV-DOnjRsv_FzYGY_6MrLFzNtCjXcTtN7x6-b4T1b.png",
  "https://uploads-ssl.webflow.com/5f3c19f18169b62a0d0bf387/60d33beb7754bb65211e29b4_cndak3oa0RRN-4-9oB-ygKRmif28P1LOTEmZgTYg44e5hTvE_UpstqF7sNX49hok9HVEXDcbLzPYyr5oEMPujY9DSXNIKHpW_nRSy-SYa0RSsoxu1gq8_vl0dUNk9X40Z7JStApb.png",
  "https://uploads-ssl.webflow.com/5f3c19f18169b62a0d0bf387/60d33beb2f9c7146bbb87c68_EU7HwDtmYVtIBtqoPsZv48rJfi7376RW3JINJF_5I9eaeRtW9TsopRsnI-H2M9babZ5WVD3jEQ0hJF-ta66dB-wuB4GovO6srlt8RIt7DsHZvB59fr9PWAik4carf1VP1W4D46Uz.png",
  "https://uploads-ssl.webflow.com/5f3c19f18169b62a0d0bf387/60d33beb2f9c7146bbb87c68_EU7HwDtmYVtIBtqoPsZv48rJfi7376RW3JINJF_5I9eaeRtW9TsopRsnI-H2M9babZ5WVD3jEQ0hJF-ta66dB-wuB4GovO6srlt8RIt7DsHZvB59fr9PWAik4carf1VP1W4D46Uz.png",
  "https://uploads-ssl.webflow.com/5f3c19f18169b62a0d0bf387/60d33bed9c10a58c67d5e458_g3aUbBRKfdR_6OG1TCTnUbr6646sydM67yBSoKQY1bK3gi4o6eUUkFqUrWc6Sg-ycGJ1zUn3SWhgSfh_A1-F10cvgmKPFM2cae0Vgt500TDqVezLt_-l6fQQYKHda_-kp-0OgW6A.png",
  "https://uploads-ssl.webflow.com/5f3c19f18169b62a0d0bf387/60d368179f2f6f8d2c071b39_gif2-min.gif",
  "https://uploads-ssl.webflow.com/5f3c19f18169b62a0d0bf387/60d33bf3a2121cc74f72a286_0AEnnZYBAYzmSXzyGaopjvEGKKO1yFqf_zMXqFTAT6vUDfXVPRifI3J8oBjZUl51PnRQqf2tqpjiRt33IKgg4sTiJi2YShGTN5iNUIoYbNj2HXobiQg4-k7yBiNT54EKOGYyZOR2.png",
  "https://uploads-ssl.webflow.com/5f3c19f18169b62a0d0bf387/60d33bf4fa7b530b77f3bbe0_6GnQQXGutBkLu762PaVF-Tyy8GptTL8C3B0g-P7s0umrlPwMLAZ0JFRk7KE4BVXXSDp6gAnnMF93ArAuk2TUtLHrXDgOeT-e1wCbtDwKl6vrypEm1pY74tDuC3Oa7WxUlwh3_hU1.png",
  "https://uploads-ssl.webflow.com/5f3c19f18169b62a0d0bf387/60d33bf45ccef72a83a30822_1RQn8ZpWk8JFIHiBCjSGNTBsSxHG3KMnU54Qf8khHOJwBmwOZMt5Q5uhLa-pwhVPrhQJwe3NS_gkWCpLFCPxFZdfUQCghZJIFLcZwvGMq3BYauR7RDf0xRmLqT9i4VXoTtBZNS5y.png",
  "https://uploads-ssl.webflow.com/5f3c19f18169b62a0d0bf387/60d33bf00f8de3388923e46e_pWDSAyLl1anr-yCxObb-b-MUilkQM0K2eER4_gwbN48qaP3NB4ZPl_P5C7CwKEQvC1fsQvHTsWd7yCMLixJ9v8rweKd9pBYGg6AVx67kohYbSpQiVIUz3svyG1s58XeqM7cKnq3x.png",
  "https://uploads-ssl.webflow.com/5f3c19f18169b62a0d0bf387/60d33bf1cf4ba77ae423d175_zwwc_oN3Ui8Z9CemAU9xH9T4cVHvKQduE8pKaVlXuPGwatLb4QHv2DTnx2XXKrlW0mxuXTY-89EUjk3bpxkIoz9LxH4mpgW8n6_sDq1TTEqfHWscELlm16JyhTfPgtBgT76Vf0gC.png",
];

const jokes = [
  "This statement",
  "Eight bytes walk into a bar.  The bartender asks, “Can I get you anything?” “Yeah,” reply the bytes.  “Make us a double.”",
  "There are only 10 kinds of people in this world: those who know binary and those who don’t.",
  "All programmers are playwrights, and all computers are lousy actors.",
  "Have you heard about the new Cray super computer?  It’s so fast, it executes an infinite loop in 6 seconds.",
  "The generation of random numbers is too important to be left to chance.",
  "Debugging: Removing the needles from the haystack.",
  "“Debugging” is like being the detective in a crime drama where you are also the murderer.",
  "There are two ways to write error-free programs; only the third one works.",
  "The best thing about a Boolean is even if you are wrong, you are only off by a bit.",
];

const quotes = [
  {
    quote:
      "Programs must be written for people to read, and only incidentally for machines to execute.",
    author: "Harold Abelson",
  },
  {
    quote:
      "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.",
    author: "Rick Cook",
  },
  {
    quote:
      "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live",
    author: "John Woods",
  },
  {
    quote:
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler",
  },
  {
    quote: "Truth can only be found in one place: the code.",
    author: "Robert C. Martin",
  },
  {
    quote:
      "That's the thing about people who think they hate computers. What they really hate is lousy programmers.",
    author: "Larry Niven",
  },
  {
    quote:
      "You've baked a really lovely cake, but then you've used dog shit for frosting.",
    author: "Steve Jobs",
  },
  {
    quote:
      "A language that doesn't affect the way you think about programming is not worth knowing.",
    author: "Alan J. Perlis",
  },
  {
    quote:
      "The most disastrous thing that you can ever learn is your first programming language.",
    author: "Alan Kay",
  },
  {
    quote:
      "The computer programmer is a creator of universes for which he alone is the lawgiver. No playwright, no stage director, no emperor, however powerful, has ever exercised such absolute authority to arrange a stage or field of battle and to command such unswervingly dutiful actors or troops.",
    author: "Joseph Weizenbaum",
  },
  {
    quote:
      "Everyone knows that debugging is twice as hard as writing a program in the first place. So if you're as clever as you can be when you write it, how will you ever debug it?",
    author: "Brian Kernighan",
  },
  {
    quote:
      "No matter which field of work you want to go in, it is of great importance to learn at least one programming language.",
    author: "Ram Ray",
  },
];

const riddles = [
  {
    question:
      "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?",
    answer: "An echo",
  },
  {
    question:
      "You measure my life in hours and I serve you by expiring. I’m quick when I’m thin and slow when I’m fat. The wind is my enemy. ",
    answer: "A Candle",
  },
  {
    question:
      "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I? ",
    answer: "A Map",
  },
  {
    question:
      "What is seen in the middle of March and April that can’t be seen at the beginning or end of either month?",
    answer: 'The letter "R"',
  },
  {
    question:
      "You see a boat filled with people. It has not sunk, but when you look again you don’t see a single person on the boat. Why?",
    answer: "All the people were married",
  },
  {
    question:
      "What word in the English language does the following: the first two letters signify a male, the first three letters signify a female, the first four letters signify a great man, while the entire world signifies a great woman. What is the word?",
    answer: "Heroine",
  },
];

function rn(len) {
  return Math.floor(Math.random() * len);
}

const data = {
  memes,
  jokes,
  quotes,
  riddles,
};
