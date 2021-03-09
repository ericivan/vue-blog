<template>
  <div class="header layout">
    <div class="navbar-left">
      <a href="#">
        <span><img src="@/assets/logo_dark.svg" alt=""></span>
      </a>
    </div>

    <div class="navbar-right">
      <div class="search">
        <a href="">
          <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-pie-chart"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>
          <span class="caret"></span>
        </a>

      </div>

      <div class="form_group">
        <form action="">
          <div class="search_group">
            <input type="text" id="search_input" autocomplete="off" required placeholder="请输入关键词搜索...">

            <span class="submit_btn">
                    <button type="submit">
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></span>
                    </button>
                    </span>
          </div>

        </form>
      </div>

      <div class="right_bar">
        <div class="my_audio">
          <audio src="" preload="auto"></audio>
          <div class="skPlayer-picture">
            <img src="@/assets/109951163623736002.jpg" alt="" width="40px" height="40px">
          </div>

          <div class="skPlayer-control">
            <p class="skPlayer-name">杀手</p>
            <div class="playController">
              <div class="preMusic">
                            <span>
                                <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon></svg>
                            </span>
              </div>
              &nbsp;&nbsp;
              <div class="playBtn">
                            <span>
                                <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                            </span>
              </div>
              &nbsp;&nbsp;
              <div class="nextMusic">
                            <span>
                                <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polygon points="13 19 22 12 13 5 13 19"></polygon><polygon points="2 19 11 12 2 5 2 19"></polygon></svg>
                            </span>
              </div>
            </div>
            <div class="music-percent">
              <div class="total-percent"></div>
              <div class="current-percent"></div>
            </div>
          </div>

          <div class="skPlayer-volume">
                    <span>
                        <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
                    </span>
          </div>

        </div>

        <ul>
          <li><a href="">
            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-key"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>
            <span class="caret"></span>
          </a></li>
          <li><a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitch"><path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path></svg>
          </a></li>
          <li><a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-disc"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle></svg>
          </a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Top"
    }
</script>

<style scoped lang="scss">
  a {
    text-decoration: none;
  }

  .layout {
    width: 1170px;
    margin-left: 0;
  }

  .header {
    background-color: #212121;
    height: 50px;
    display: flex;
  }

  .navbar-left {
    width: 220px;
    height: 100%;
    border-radius: 4px;
  }

  .navbar-left a {
    display: inline-block;
    height: 100%;
    padding: 0 20px;

  }

  .navbar-left img {
    width: 130px;
    height: 40px;
    vertical-align: middle;
    background-color: #212121;
    display: inline;
    margin: 0 auto;
  }

  .navbar-left span {
    background-color: #FFFFFF;
  }


  .navbar-right {
    width: 950px;
    height: 100%;
    /*background-color: blue;*/
    display: flex;
  }

  .search {
    width: 59px;
    height: 100%;
    /*padding-top: 15px;*/
    box-sizing: border-box;
    color: #777;
  }

  .search a {
    color: #777;
    display: block;
    width: 59px;
    height: 50px;
    text-align: center;
    padding-top: 15px;
    box-sizing: border-box;
  }

  .search a:hover {
    background-color: #1F1F1F;
  }

  .search svg {
    vertical-align: middle;
  }


  .caret {
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: 2px;
    vertical-align: middle;
    border-top: 4px dashed;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
  }

  .form_group {
    width: 204px;
    margin-left: 15px;
  }

  .form_group form {
    width: 100%;
    height: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  #search_input {
    background-color: #212113;
    width: 107px;
    height: 20px;
    padding: 5px 15px;
    margin-left: 0;
    outline: none;
    border: 2px solid #212113;
    font-size: 12px;
  }

  #search_input:focus {
    border: 2px solid #253653;
    outline: none;
    border-radius: 500px;
    border-bottom-right-radius: 0px;
    border-top-right-radius: 0px;
  }


  .search_group {
    height: 30px;
    width: 185px;
  }

  .search_group .submit_btn {
    display: inline-block;
    width: 37px;
    height: 32px;
    margin-left: -5px;
    text-align: center;
    box-sizing: border-box;
    vertical-align: middle;
  }
  .submit_btn button{
    cursor: pointer;
  }

  .search_group button {
    background-color: #191919;
    outline: none;
    border: 0;
    line-height: 30px;
    height: 30px;
    color: #fff;
    width: 100%;
    border-bottom-right-radius: 30px;
    border-top-right-radius: 30px;
  }

  .search_group svg {
    vertical-align: middle;
  }


  .right_bar {
    width: 600px;
    margin-left: 70px;
    display: flex;
    justify-content: flex-end;
  }

  .right_bar .my_audio {
    width: 200px;
    /*background-color: red;*/
    height: 50px;
    position: relative;
  }

  .direct_right {
    background-color: pink;
    height: 50px;
  }

  .right_bar ul {
    list-style-type: none;
    height: 50px;
    width: 200px;
    text-align: center;
  }

  .right_bar ul li {
    float: right;
    height: 50px;
    width: 46px;
    line-height: 50px;
    cursor: pointer;
  }

  .right_bar ul li a {
    color: #575757;
  }

  .right_bar ul li:nth-child(3) {
    width: 58px;
  }

  .right_bar ul li:hover {
    background-color: #1F1F1F;
  }

  .skPlayer-picture {
    width: 40px;
    height: 40px;
    margin-top: 5px;
    border-radius: 20px;
    float: left;
    overflow: hidden;
  }

  .skPlayer-control {
    width: 150px;
    height: 50px;
    float: right;
    font-size: 13px;
    color: #737373;
    position: relative;
  }

  .skPlayer-name {
    padding-top: 10px;
    padding-bottom: 2px;
  }

  .playController {
    display: flex;
  }

  .preMusic {
    cursor: pointer;
  }

  .playBtn {
    cursor: pointer;
  }

  .nextMusic {
    cursor: pointer;
  }

  .music-percent {
    width: 100%;
    height: 3px;
  }

  .music-percent {
    position: absolute;
    bottom: 0;
    background-color: transparent;
    display: none;
  }

  .total-percent {
    background-color: #d3d3e0;
    position: absolute;
    bottom: 0;
    height: 3px;
    width: 150px;
  }

  .current-percent {
    background-color: #191919;
    position: absolute;
    bottom: 0;
    height: 3px;
    width: 0%;
  }

  .skPlayer-volume {
    position: absolute;
    right: 0;
    bottom: 21px;
    color: #737373;
    display: none;
  }

  .skPlayer-volume span {
    position: absolute;
    right: 0;
    top: -5px;
    cursor: pointer;

  }
</style>
