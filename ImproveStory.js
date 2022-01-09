let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually'];

// Split the string into individual words and save them in a new array called storyWords.
const storyWords = story.split(' ');
 
 // Find total number of words in an array
const totalNumOfWords = storyWords.length;
 

let wordCount = 0;

//* There is an array of words that are unnecessary. Iterate over your array to filter out these words. Save the remaining words in an array called betterWords. *//

const betterWords = storyWords.filter(storyWords => {
if(!unnecessaryWords.includes(storyWords)) {
  return storyWords;
}
});
 


//* There is an array of words called overusedWords. These are words overused in this story. You want to let the user of your program know how many times they have used these overused words.  *//

// Count number of times overused words appear in story

betterWords.forEach(word => {
  if (word === overusedWords[0]){
    wordCount++;
  } else if (word === overusedWords[1]){
    wordCount++;
  } else if (word === overusedWords[2]){
    wordCount++;
  }});

/* iterate over the array and add 1 to a sentence counter variable for each word that has a period or exclamation mark as its final character. */

let sentenceCount = 0;
storyWords.forEach(word => {
  if(word[word.length-1] === '.' || word[word.length-1] === '!') {
    sentenceCount++;
  }
});


const logInfo = (wordCount, sentenceCount,totalNumOfWords) => {
   console.log('Overused words count: ' + wordCount);
    console.log('Sentence count: ' + sentenceCount);
   console.log('Total number of words: ' + totalNumOfWords);
};
 
logInfo(wordCount, sentenceCount,totalNumOfWords);

// Log the betterWords array to the console as a single string.
console.log(betterWords.join(' '));


 //console.log(wordCounter);
//  console.log(storyWords);
// console.log(betterWords);
 // console.log(sentenceCounter);
 
