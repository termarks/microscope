.grid-block, .main, .post, .comments li, .comment-form {
  background: #fff;
  border-radius: 3px;
  padding: 10px;
  margin-bottom: 10px;
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15); }

body {
  background: #eee;
  color: #666666; }

#main {
  position: relative;
}
.page {
  position: absolute;
  top: 0px;
  width: 100%;
}

.navbar {
  margin-bottom: 10px; }
  /* line 32, ../sass/style.scss */
  .navbar .navbar-inner {
    border-radius: 0px 0px 3px 3px; }

#spinner {
  height: 300px; }

.post {
  /* For modern browsers */
  /* For IE 6/7 (trigger hasLayout) */
  *zoom: 1;
  position: relative;
  opacity: 1; }
  .post:before, .post:after {
    content: "";
    display: table; }
  .post:after {
    clear: both; }
  .post.invisible {
    opacity: 0; }
  .post.instant {
    -webkit-transition: none;
    -moz-transition: none;
    -o-transition: none;
    transition: none; }
  .post.animate{
    -webkit-transition: all 300ms 0ms;
    -moz-transition: all 300ms 0ms ease-in;
    -o-transition: all 300ms 0ms ease-in;
    transition: all 300ms 0ms ease-in; }
  .post .upvote {
    display: block;
    margin: 7px 12px 0 0;
    float: left; }
  .post .post-content {
    float: left; }
    .post .post-content h3 {
      margin: 0;
      line-height: 1.4;
      font-size: 18px; }
      .post .post-content h3 a {
        display: inline-block;
        margin-right: 5px; }
      .post .post-content h3 span {
        font-weight: normal;
        font-size: 14px;
        display: inline-block;
        color: #aaaaaa; }
    .post .post-content p {
      margin: 0; }
  .post .discuss {
    display: block;
    float: right;
    margin-top: 7px; }

.comments {
  list-style-type: none;
  margin: 0; }
  .comments li h4 {
    font-size: 16px;
    margin: 0; }
    .comments li h4 .date {
      font-size: 12px;
      font-weight: normal; }
    .comments li h4 a {
      font-size: 12px; }
  .comments li p:last-child {
    margin-bottom: 0; }

.dropdown-menu span {
  display: block;
  padding: 3px 20px;
  clear: both;
  line-height: 20px;
  color: #bbb;
  white-space: nowrap; }

.load-more {
  display: block;
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.05);
  text-align: center;
  height: 60px;
  line-height: 60px;
  margin-bottom: 10px; }
  .load-more:hover {
    text-decoration: none;
    background: rgba(0, 0, 0, 0.1); }

.posts .spinner-container{
  position: relative;
  height: 100px;
}

.jumbotron{
  text-align: center;
}
.jumbotron h2{
  font-size: 60px;
  font-weight: 100;
}

@-webkit-keyframes fadeOut {
  0% {opacity: 0;}
  10% {opacity: 1;}
  90% {opacity: 1;}
  100% {opacity: 0;}
}

@keyframes fadeOut {
  0% {opacity: 0;}
  10% {opacity: 1;}
  90% {opacity: 1;}
  100% {opacity: 0;}
}

.errors{
  position: fixed;
  z-index: 10000;
  padding: 10px;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  pointer-events: none;
}
.alert {
          animation: fadeOut 2700ms ease-in 0s 1 forwards;
  -webkit-animation: fadeOut 2700ms ease-in 0s 1 forwards;
     -moz-animation: fadeOut 2700ms ease-in 0s 1 forwards;
  width: 250px;
  float: right;
  clear: both;
  margin-bottom: 5px;
  pointer-events: auto;
}