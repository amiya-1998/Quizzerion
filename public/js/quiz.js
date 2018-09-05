var myQuiz = {
  currentQuestion:0,
  correctTally: 0,
  result: ['You’re correct!', 'Sorry!! Wrong Answer'],
    category: [
      "90's Movies",
      "Anime",
    ],
};

var queries = {
  questionList: [],
  images: [],
  trivia: []
};

var workingQuiz = {
  "90's Movies" : {
    questionList: [
        {
        question: "What year did Stephen Spielberg’s films Jurassic Park AND Schindler’s List premier?",
        answers: {a: "1992", b: "1993", c: "1994", d: "1995"},
        correct: "b"
      },
       {
        question: "Which of these films did NOT win the Oscar for “Best Original Screenplay?”" ,
        answers: {a: "Saving Private Ryan", b: "Good Will Hunting", c: "The Usual Suspects", d: "Ghost"},
        correct: "a"
      },
       {
        question: "What was the highest grossing movie of the decade?",
        answers: {a: "Jurassic Park", b: "Star Wars Episdoe I: The Phantom Menace", c: "The Matrix", d: "Titanic"},
        correct: "d"
      },
       {
        question: "In The Shawshank Redemption, who was on Andy Dufresne’s final poster?",
        answers: {a: "Raquel Welch", b: "Rita Hayworth", c: "Marilyn Monroe", d: "Elizabeth Taylor"},
        correct: "a"
      },
       {
        question: "Which Western film contained the classic line “I’m your Huckleberry?”",
        answers: {a: "Unforgiven", b: "Dances with Wolves", c: "Tombstone", d: "City Slickers"},
        correct: "c"
      },
       {
        question: "What is the famous “MacGuffin” from Pulp Fiction?",
        answers: {a: "The Heart of the Ocean", b: "The Holy Grail", c: "The Secret Video Tape", d: "The Briefcase"},
        correct: "d"
      },
       {
        question: "Finish this famous quote: “They may take our lives, but they’ll never take __________!”",
        answers: {a: "our American beauty", b: "our Independence Day", c: "our freedom", d: "our dead people"},
        correct: "c"
      },
       {
        question: "Which of these songs won the Oscar for “Best Original Song”?",
        answers: {a: "“Sooner or Later” by Stephen Sondheim", b: "“I Don’t Want to Miss a Thing” by Diane Warren", c: "“You’ve Got a Friend in Me” by Randy Newman", d: "“Circle of Life” by Elton John and Tim Rice"},
        correct: "a"
      },
       {
        question: "What category is the hurricane at the end of Twister?",
        answers: {a: "F1", b: "F5", c: "F12", d: "F8"},
        correct: "b"
      },
       {
        question: "Which of these things did Forrest Gump NOT do?",
        answers: {a: "Play College Football", b: "Captain a Shrimp Boat", c: "Invest in Microsoft", d: "Meet more than one U.S. President"},
        correct: "c"
      }
    ],
    images: [
      "https://nypdecider.files.wordpress.com/2015/06/spielberg2.png?w=600",
      "https://www.jonathanrosenbaum.net/wp-content/uploads/2010/12/saving_private_ryan_poster.jpg",
      "https://c1.staticflickr.com/3/2482/4024923936_e6ddf1c07f_z.jpg?zz=1",
      "https://pbs.twimg.com/media/CL0NIgRUMAAaUvm.jpg",
      "http://www.ruthlessreviews.com/wp-content/uploads/2017/06/tombstone-meta.jpg",
      "http://zidbits.com/wp-content/uploads/2011/01/Pulp-Fiction-Briefcase.jpg",
      "https://s-media-cache-ak0.pinimg.com/736x/f7/4c/6b/f74c6ba3ff801317bc13e19d46169603--william-wallace-celtic-pride.jpg",
     "https://vignette3.wikia.nocookie.net/disney/images/c/ce/Dick_Tracy_Wallpapers.jpg/revision/latest?cb=20120501024038",
      "https://s-media-cache-ak0.pinimg.com/736x/f9/f3/7d/f9f37df3b59c0af1d68c07f6249c0c0c--twister--beautiful-actresses.jpg",
      "http://2.bp.blogspot.com/-i03dWHqsKuY/Ucw2YpUKlOI/AAAAAAAAAFQ/NqfUh7pHZZQ/s1456/forrest-gump-poster-1994-tom-hanks.png"
      ],
    trivia: [
      "While Spielberg worked on Schindler’s List in early 1993 in Europe, he found time to edit Jurassic Park during the night. Yes, Spielberg almost had a nervous breakdown, but he got both projects done. Jurassic Park premiered on June 11, 1993 and Schindler’s List debuted on November 30, 1993.",
      "Its rival ‘Shakespeare in Love’, a period romantic comedy with a literate, witty Tom Stoppard script and sumptuous production values won the award, which many Oscar-watchers still found outrageous.",
      "Including revenue from the 2012 reissue, Titanic earned a worldwide total of $2,185,372,302. It became the highest-grossing film of all time worldwide in 1998, and remained so for twelve years, until Avatar (2009), also written and directed by Cameron, surpassed it in 2010.",
      "The photo of her is from the film One Million B.C. and was apparently one of the most, if not the most, popular pin up of the 60s. Other posters he used were of Rita Hayworth and Monroe.",
      "In the classic Western movie “Tombstone” (1993) Val Kilmer, as Doc Holliday, says to Johnny Ringo, “I'm your Huckleberry, that's just my game.”",
      "In fiction, a MacGuffin is a plot device in the form of some goal, desired object, or other motivator that the protagonist pursues, often with little or no narrative explanation. ",
      "That line is part of the answer Gibson gives after one nervous Scottish soldier suggests out loud that it might be better to retreat and live to fight another day.",
      "The song was used in the parent film, Dick Tracy. “Sooner or Later” was composed to evoke the theatrical nature and style of the film.",
      "Based on the The Saffir-Simpson Hurricane Wind Scale, category 5 has sustained winds of 157 mph or higher, which means a catastrophic damage will occur, including a high percentage of destructed framed homes.",
      "One of the more memorable scenes in “Forrest Gump” happens when the title character's shrimping money is invested by his partner, Lt. Dan, in what Forrest describes as “some kind of fruit company”."
      ],
  },
  "Anime" : {
    questionList: [
        {
        question: "Who was the first ninja to be attacked by Naruto's Rasengan-Shuriken?",
        answers: {a: "Jiraya", b: "Kakuzu", c: "Pain", d: "Sasuke"},
        correct: "b"
      },
       {
        question: "Which ninja uses a Yin Seal?" ,
        answers: {a: "Tsunade", b: "Mei Terumi", c: "Sasuke", d: "Zetsu"},
        correct: "a"
      },
       {
        question: "Who Killed Dosu?",
        answers: {a: "Sasuke", b: "Orochimaru", c: "Kabuto", d: "Gara"},
        correct: "d"
      },
       {
        question: "What is the last hand sign for the Uchiha Clan's Fireball Jutsu?",
        answers: {a: "Tiger", b: "Boar", c: "Rabbit", d: "Serpent"},
        correct: "a"
      },
       {
        question: "Who was the newest member to join the Akatsuki?",
        answers: {a: "Itachi", b: "Kakuzu", c: "Hidan", d: "Orochimaru"},
        correct: "c"
      },
       {
        question: "In the Naruto manga, which jinchuuriki was the first to be captured?",
        answers: {a: "Four-Tails", b: "Two-Tails", c: "Five-Tails", d: "Three-Tails"},
        correct: "d"
      },
       {
        question: "Which ninja has Doujutsu?",
        answers: {a: "Kimimaro", b: "Guy", c: "Hinata", d: "Jugo"},
        correct: "c"
      },
       {
        question: "Who justified ending the life of a fellow Akatsuki member on the grounds of winning a battle?",
        answers: {a: "Deidara", b: "Kisame", c: "Sasori", d: "Pain"},
        correct: "a"
      },
       {
        question: "Who was the head of the Intelligence Division in the Fourth Great Ninja War?",
        answers: {a: "Shikaku", b: "Inoichi", c: "Shizune", d: "Mabui"},
        correct: "b"
      },
       {
        question: "Who destroyed the boulder to get into the cave?",
        answers: {a: "Tenten", b: "Rock Lee", c: "Sakura", d: "Neji"},
        correct: "c"
      }
    ],
    images: [
      "https://pa1.narvii.com/6205/b510947621b57ab75c4b2889be95b9bed6108522_hq.gif",
      "https://pa1.narvii.com/5817/4aee35592b74df5c6bde77067d36905923a4f727_hq.gif",
      "https://media1.tenor.com/images/9f089e4a7a13a68a2ef9ff3d517ee31f/tenor.gif?itemid=9351564",
      "https://i.pinimg.com/originals/d2/2d/dc/d22ddc165e2e230078bb58dbc90f4ea3.gif",
      "https://media1.giphy.com/media/3oG1IHpcn5P2M/giphy.gif",
      "https://thumbs.gfycat.com/BlaringContentCollie-size_restricted.gif",
      "https://media3.giphy.com/media/2mBFWqH55R8By/200.gif",
     "https://media.giphy.com/media/ZZbeDmvt91Vio/source.gif",
      "http://33.media.tumblr.com/tumblr_lvxzqgcd2b1ql676ko1_250.gif",
      "https://i.pinimg.com/originals/00/c2/ba/00c2ba2530413bbe5e52d709c88bc4a0.gif"
      ],
    trivia: [
      "Naruto's natural affinity is Wind Release, which he learned from Asuma Sarutobi to flow into his weapons to increase their offensive might. Using shadow clones, he couple the complete difficult task of adding his elemental nature to the Rasengan, something no one, including his father, had been able to succeed at. ",
      "The size and form of the release markings may depend on how much chakra is being released from the seal, as Sakura and Tsunade's seals had only spread around a small area.",
      "In an effort to make sure that Sasuke survived until they could fight so that he could kill him personally, Dosu challenged Gaara, Sasuke's first opponent, on the roof top of Kikyō Castle to a fight. Despite Dosu's confidence, Gaara promptly killed him, while Baki and Kabuto Yakushi witnessed it.",
      "The Fireball Jutsu uses a combination of hand signs in the given order: Serpent, Ram, Monkey, Boar, Horse, Tiger",
      "Hidan (飛段, Hidan) is an S-rank missing-nin who defected from Yugakure and later joined the Akatsuki. Hidan encountered the Akatsuki, attempted to kill Kakuzu, and managed to destroy one of his hearts. The confrontation led Konan to offer Hidan the chance to join their organisation, which he accepted, mainly because he took an interest in Kakuzu since he was a pioneer in immortality as well",
      "The Three Tails was first captured by Tobi and Diedara ( Then members of Akatsuki )",
      "Hinata Uzumaki (うずまきヒナタ, Uzumaki Hinata, née Hyūga (日向)) is a kunoichi and the former heiress of the Hyūga clan. All members born into Hyūga clan possess the Byakugan, a kekkei genkai that gives them extended fields of vision and the ability to see through solid objects and even the chakra circulatory system, amongst other things. Members of this clan also possess the unique ability to expel chakra from any of the tenketsu in their body.",
      "Deidara ranked 3rd in one official character popularity poll shortly after his debut, just one rank above Naruto. He also ranked higher than any other member of Akatsuki (though at the point that poll was taken, only about half of Akatsuki's members were formally introduced).",
      "Inoichi was placed in charge of the Intelligence Division of the Allied Forces, which was formed in an effort to tackle with Forth Great Ninja War",
      "Sakura is like a moving powerhouse. Sakura's strength is enough to destroy buildings or upend the earth, which Naruto constantly refers to as "monstrous strength". Furthermore, she can send chakra throughout her entire body to lift greater mass, and improve her ability to withstand crushing blows."
      ],
  },
}
function check_norepeat(arr, num){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === num){
      return 1;
    }
  }
  return 0;
}

function generate_random(){
  var num = [];
  var genNUm;
  for(let i = 0; i < 5; i++){
    genNum = Math.floor(Math.random() * 10);
    while(check_norepeat( num, genNum)){
      genNum = Math.floor(Math.random() * 10);
    }
    num.push(genNum);
  }
  console.log(num);
  return num;
}

function genRandom_Quiz(t){
  var num = generate_random();
  num.forEach((e) => {
    queries.questionList.push(workingQuiz[myQuiz.category[t]].questionList[e]);
    queries.images.push(workingQuiz[myQuiz.category[t]].images[e]);
    queries.trivia.push(workingQuiz[myQuiz.category[t]].trivia[e]);
  });
}

function calculateIndex() {
  var i = 0;
  for(i = 0; i < $('input[name="quizCategory"]').length; i++) {
    if($('input[name="quizCategory"]')[i].checked === true) {
      return i;
    }
  }
  return 0;
}

// Setting up the listeners

$(document).ready(() => {
  let i = -1;
  myQuiz.category.forEach((cate)=>{
    i++;
    $('#cat .Cats').append('<label class="a"><input type="radio" name="quizCategory" value="' + i + '"><span class="catname">' + cate + '</span></label><br>')
  })
});

var j ;

$("#begin").click((e) => {
  e.preventDefault();
  $('.intro').addClass('hidden');
  $('.questionForms').removeClass('hidden');
  // j = $('input[name="quizCategory"]:checked').val();
  j = calculateIndex();
  genRandom_Quiz(j);
  setTimeout(() => {console.log("WAIT!!!!!!!!!")}, 2000);
  let firstPage = queries.questionList[0];       //targets the first questionList object and assigns to variable
  $('#question').text(firstPage.question);      //adds the first question to the h4
  $('.a1').text(firstPage.answers.a);           //adds the first choice of answer
  $('.b2').text(firstPage.answers.b);           //adds the second choice of answer
  $('.c3').text(firstPage.answers.c);           //adds the third choice of answer
  $('.d4').text(firstPage.answers.d);
});


$('#submit').click(function(e){
  e.preventDefault();
  if (myQuiz.currentQuestion < queries.questionList.length - 1){
    var choice = $('input[name="myAnswer"]:checked').val();
    if (choice === queries.questionList[myQuiz.currentQuestion].correct){
      $('.questionForms').addClass('hidden');                // hides the question page
      $('.results').removeClass('hidden');                   // shows the results page
      $("h3#result").text(myQuiz.result[0]);                 // adds the text whether user is correct or not
      $("#picTrivia").attr('src', queries.images[myQuiz.currentQuestion]);   //adds the image associated with the current question
      $("p#textTrivia").text(queries.trivia[myQuiz.currentQuestion]); //adds the trivia text associated with the current question
      myQuiz.currentQuestion++;
      myQuiz.correctTally++;
    }else{
      $('.questionForms').addClass('hidden');                // hides the question page
      $('.results').removeClass('hidden');                    // shows the results page
      $("h3#result").text(myQuiz.result[1]);                   // adds the text whether user is correct or not
      $("#picTrivia").attr('src', queries.images[myQuiz.currentQuestion]);     //adds the image associated with the current question
      $("p#textTrivia").text(queries.trivia[myQuiz.currentQuestion]);    //adds the trivia text associated with the current question
      myQuiz.currentQuestion++;
    }
  }
  else{
    var choice = $('input[name="myAnswer"]:checked').val();
    if (choice === queries.questionList[myQuiz.currentQuestion].correct){
      $('.questionForms').addClass('hidden');                // hides the question page
      $('.results').removeClass('hidden');                   // shows the results page
      $("h3#result").text(myQuiz.result[0]);                 // adds the text whether user is correct or not
      $("#picTrivia").attr('src', queries.images[myQuiz.currentQuestion]);   //adds the image associated with the current question
      $("p#textTrivia").text(queries.trivia[myQuiz.currentQuestion]); //adds the trivia text associated with the current question
      $('.next').addClass('hidden');                         // hides the Next Question button
      $('.goToScore').removeClass('hidden');
      myQuiz.currentQuestion++;
      myQuiz.correctTally++;
    }
    else{
      $('.questionForms').addClass('hidden');                // hides the question page
      $('.results').removeClass('hidden');                    // shows the results page
      $("h3#result").text(myQuiz.result[1]);                   // adds the text whether user is correct or not
      $("#picTrivia").attr('src', queries.images[myQuiz.currentQuestion]);     //adds the image associated with the current question
      $("p#textTrivia").text(queries.trivia[myQuiz.currentQuestion]);
      $('.next').addClass('hidden');                         // hides the Next Question button
      $('.goToScore').removeClass('hidden');                 // shows the Next Question button
      myQuiz.currentQuestion++;
    }
  }
  $('input[name="myAnswer"]').prop('checked',false);
});

$('.results').on('click', '.next', function (e){        // if we receive a click on the next question button
  $('.results').addClass('hidden');
  $('.questionForms').removeClass('hidden');
  let restOfQues = queries.questionList[myQuiz.currentQuestion];       //targets the first questionList object and assigns to variable
  $('#question').text(restOfQues.question);      //adds the first question to the h4
  $('.a1').text(restOfQues.answers.a);           //adds the first choice of answer
  $('.b2').text(restOfQues.answers.b);           //adds the second choice of answer
  $('.c3').text(restOfQues.answers.c);           //adds the third choice of answer
  $('.d4').text(restOfQues.answers.d);           //adds the fourth choice of answer
  $('input[name="myAnswer"]').prop('checked',false);
});

$('.results').on('click', '.goToScore', function (e){        // if we receive a click on the next question button
  $('.results').addClass('hidden');
  $('.end').removeClass('hidden');
  $('#score').text(`You scored ${myQuiz.correctTally} out of ${queries.questionList.length} questions.`);
  if(myQuiz.correctTally === queries.questionList.length){
     $('#scorepic').attr('src', 'https://s-media-cache-ak0.pinimg.com/736x/ef/9e/3c/ef9e3c2faf229f595b6a59fb8731e30a--disney-cats-disney-cruiseplan.jpg');
  }
  else if (myQuiz.correctTally/queries.questionList.length > .50 ){
     $('#scorepic').attr('src', 'https://i.imgflip.com/1jm073.jpg');
  }
  else {
    $('#scorepic').attr('src', 'https://s-media-cache-ak0.pinimg.com/736x/62/37/0b/62370b0061eb6c4f2b62389c1116982c--grumpy-kitty-grumpy-cat-meme.jpg');
  }
  $('input[name="myAnswer"]').prop('checked',false);
});

$('.end').on('click', '#restart', function (e) {
  myQuiz.correctTally = 0;
  myQuiz.currentQuestion = 0;
  $('.end').addClass('hidden');
  $('.intro').removeClass('hidden');
  $('.goToScore').addClass('hidden');
  $('.next').removeClass('hidden');
  console.log(myQuiz.correctTally);
  console.log(myQuiz.currentQuestion);
  queries = {
    questionList: [],
    images: [],
    trivia: []
  };
});
