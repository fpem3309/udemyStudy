const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer'];

for (let i = 0; i < subreddits.length; i++) {
  console.log(`Visit reddit.com/r/${subreddits[i]}`)
}

/* for ~ of문으로 변경 */
for(let sub of subreddits){
  console.log(`Visit reddit.com/r/${sub}`)
}

for(let char of 'Hello, world!'){
  console.log(char)
}