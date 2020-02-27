// client js logic

//function to load data for tweets from database
const loadTweets = function() {
  $.ajax({
    url: `/tweets`,
    type: "GET",
    dataType: "JSON",
    success: response => {
      renderTweets(response);
    }
  });
};

const SECONDS = 86400000; //24*60*60*1000 number of milliseconds in 1 day


//f-n that renders tweets in tweets container in HTML
const renderTweets = function(tweets) {
  $(".tweet-container").empty();
  for (let tweet of tweets) {
    $(".tweet-container").prepend(createTweetElement(tweet));
  }
};


//function to render one new tweet
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
          ${escape(tweetContent)}
        </main>
        <footer class="tweet-footer">
          <p>${Math.round((Date.now() - tweetDate) / SECONDS)} days ago</p>
          <ul class="icons">
            <li><img width="16" height="16" src="https://www.pinclipart.com/picdir/middle/0-3647_download-flag-icon-png-clipart-flag-clip-art.png"></li>
            <li><img width="16" height="16" src="https://cdn3.iconfinder.com/data/icons/twitter-20/512/166_Heart_Love_Like_Twitter-512.png"></li>
            <li><img width="16" height="16" src="https://www.pikpng.com/pngl/m/16-169951_retweet-twitter-png-retweet-icon-clipart.png"></li>
          </ul>
        </footer>
      </article>`;

  return $tweet;
};

//function to protect input form from malicious scripts
const escape = function(str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};


//main logic: when document is ready 
$(document).ready(function() {
  loadTweets();

  //fn to check input before submission
  $("#new-tweet").submit(function(event) {
    event.preventDefault();
    if ($("textarea").val().length > 140) {
      $(".error")
        .text("Your tweet is too long")
        .fadeIn(500);
    } else if ($("textarea").val().length == 0) {
      $(".error")
        .text("empty tweet")
        .fadeIn(500);
      $(".counter").text(140);
    } else {
      $(".error").text("");
      $.ajax({
        url: "/tweets/",
        type: "POST",
        data: $("textarea").serialize(),
        success: function() {
          loadTweets();
          $("textarea").val("");
          $(".counter").text(140);
          $(".error").text("");
        }
      });
    }
  });
});
