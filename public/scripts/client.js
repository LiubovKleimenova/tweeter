/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  //add 
  $('#new-tweet').submit(function (event) {
    event.preventDefault();
    $.ajax({
      url: "/tweets/",
      type: "POST",
      data: $("textarea").serialize()
    });
    loadTweets();
  });

  const loadTweets = function () {
    $.ajax({
      url: `/tweets`,
      type: "GET",
      dataType: "JSON"
    })
      .then(response => {
        renderTweets(response.data.children);
       
        //$("#app").append(renderedPosts);
        // document.getElementById('app').append(renderedPosts)
      })
      .catch(() => {
        const errorMessage = `
        <div class="error">
          <h1>Whoops, something went wrong!</h1>
        </div>
      `;

        $("#app").append(errorMessage);
      });
  }
  

  const SECONDS = 86400000; //24*60*60*1000 number of milliseconds in 1 day
  const data = [
    {
      user: {
        name: "Newton",
        avatars: "https://i.imgur.com/73hZDYK.png",
        handle: "@SirIsaac"
      },
      content: {
        text:
          "If I have seen further it is by standing on the shoulders of giants"
      },
      created_at: 1461116232227
    },
    {
      user: {
        name: "Descartes",
        avatars: "https://i.imgur.com/nlhLi3I.png",
        handle: "@rd"
      },
      content: {
        text: "Je pense , donc je suis"
      },
      created_at: 1461113959088
    }
  ];

  const renderTweets = function(tweets) {
    for (let tweet of tweets) {
      $(".tweet-container").append(createTweetElement(tweet));
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

  renderTweets(data);
});
