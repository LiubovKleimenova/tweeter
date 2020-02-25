/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 $(document).ready(function() {
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
      $(".tweet-container").append(createTweetElement(tweet))
    }
  };

  const createTweetElement = function(tweet) {
    //let {name, avatar, handle} = tweet.user;
    let tweetContent = tweet.content.text;
    let tweetDate = tweet.created_at;
    let $tweet = `<article>
          <header>
            <div>
              <img class="userphoto" src="${tweet.user.avatars}" alt="user photo" width="70" height="70">
              <span>${tweet.user.name}</span>
            </div>
            <p class="username">${tweet.user.handle}</p>
            
          </header>
       
          <main>
            ${tweetContent}
          </main>
          <footer>
            <p>${Math.round((Date.now()-tweetDate)/86400000)} days ago</p>
          </footer>
        </article>`;

    
    return $tweet;
  };

  renderTweets(data);
 }) 

