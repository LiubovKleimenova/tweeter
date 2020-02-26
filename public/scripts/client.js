/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const loadTweets = function () {
  $.ajax({
    url: `/tweets`,
    type: "GET",
    dataType: "JSON",
    success: response => {
      //console.log(response.data)
      renderTweets(response);
    }
  })
}

const SECONDS = 86400000; //24*60*60*1000 number of milliseconds in 1 day

const renderTweets = function(tweets) {
  $(".tweet-container").empty()
  for (let tweet of tweets) {
    $(".tweet-container").prepend(createTweetElement(tweet));
  }
};

const createTweetElement = function(tweet) {
  //let {name, avatar, handle} = tweet.user;
  let tweetContent = tweet.content.text;
  let tweetDate = tweet.created_at;
  let $tweet = `<article class="tweet">
        <header class="tweet-header">
          <div>
            <img class="userphoto" src="${
              tweet.user.avatars
            }" alt="user photo" width="70" height="70">
            <span>${tweet.user.name}</span>
          </div>
          <p class="username">${tweet.user.handle}</p>
          
        </header>
     
        <main class="tweet-main">
          ${tweetContent}
        </main>
        <footer class="tweet-footer">
          <p>${Math.round((Date.now() - tweetDate) / SECONDS)} days ago</p>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </footer>
      </article>`;

  return $tweet;
};

$(document).ready(function() {
  loadTweets();

  //add 
  $('#new-tweet').submit(function (event) {
    event.preventDefault();
    $.ajax({
      url: "/tweets/",
      type: "POST",
      data: $("textarea").serialize(),
      success: loadTweets()
    });
    //loadTweets();
  });



  
});
