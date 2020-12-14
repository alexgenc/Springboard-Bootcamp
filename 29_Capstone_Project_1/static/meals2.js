video = document.getElementsByClassName('youtube');
youtubeUrl = video[0].id;
console.log(youtubeUrl);
// console.log(video);


newYoutubeUrl = youtubeUrl.replace("watch?v=", "embed/");

console.log(newYoutubeUrl);

// video[0].attributes.src = newYoutubeUrl;

video[0].attributes[4].value = newYoutubeUrl;