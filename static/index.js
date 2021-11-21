async function convert_data(event){
  fetch("/login").then(res => res.text()).then(text => {
    console.log(text)
  })
}

snippets = snippets.replaceAll("&#34;", "\"")
snippets = snippets.replaceAll("&#39;", "'")
snippets = JSON.parse(snippets)
if(snippets.length > 30):
  snippets = snippets.slice(0,30)
let score = 0
let index = 0
let outof = snippets.length
let snippet = snippets[index][0]
let artist = snippets[index][1]
let choices = [artist]
for(let i = 1; i < 4; i++){
  let rand = Math.floor(Math.random() * 3)
  choices[i] = snippets[rand][1]
}
choices = shuffle_choices(choices)
number.innerText = index + "/" + outof
question.innerText = "\"" + snippet + "\""
song1.innerText = choices[0]
song2.innerText = choices[1]
song3.innerText = choices[2]
song4.innerText = choices[3]


function shuffle_choices(choices){
  for (var i = choices.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = choices[i];
        choices[i] = choices[j];
        choices[j] = temp;
    }
  return choices
}

function determineWin(choice){
  if(choice == artist){
    score += 1
  }
  index +=1
  snippet = snippets[index][0]
  artist = snippets[index][1]
  choices = [artist]
  for(let i = 1; i < 4; i++){
    let rand = Math.floor(Math.random() * 3)
    choices[i] = snippets[rand][1]
  }
  choices = shuffle_choices(choices)
  number.innerText = index + "/" + outof
  question.innerText = "\"" + snippet + "\""
  song1.innerText = choices[0]
  song2.innerText = choices[1]
  song3.innerText = choices[2]
  song4.innerText = choices[3]
}

