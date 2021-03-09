<template>
  <aside id="aside">
    <div class="aside-wrap">
      <div class="avatar-wraper">
        <div class="user-wraper">
          <div class="avatar-inner">
            <a href="#">
                        <span>
                             <img src="@/assets/avatar.jpg" alt="" width="96">
                        </span>
            </a>
          </div>
          <a href="" class="username">
            <span>Eirivan</span>
            <span>生活还得继续呢！</span>
          </a>
        </div>
      </div>

      <div class="link_direct">
        <ul>
          <li>导航</li>
          <li><a href="" @click.prevent="clickDirect('blog_index')">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                   class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline
                points="9 22 9 12 15 12 15 22"></polyline></svg>
            </span>
            <span>
              首页
            </span>
          </a></li>

          <li><a href="">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                   class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline
                points="9 22 9 12 15 12 15 22"></polyline></svg>
            </span>
            <span>
              首页
            </span>
          </a></li>

          <li><a href="">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                   class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline
                points="9 22 9 12 15 12 15 22"></polyline></svg>
            </span>
            <span>
              首页
            </span>
          </a></li>

          <li><a href="">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                   class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline
                points="9 22 9 12 15 12 15 22"></polyline></svg>
            </span>
            <span>
              首页
            </span>
          </a></li>

          <li><a href="">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                   class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline
                points="9 22 9 12 15 12 15 22"></polyline></svg>
            </span>
            <span>
              首页
            </span>
          </a></li>

          <li><a href="">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                   class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline
                points="9 22 9 12 15 12 15 22"></polyline></svg>
            </span>
            <span>
              首页
            </span>
          </a></li>

          <li><a href="">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                   class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline
                points="9 22 9 12 15 12 15 22"></polyline></svg>
            </span>
            <span>
              首页
            </span>
          </a></li>
        </ul>
      </div>

      <div class="link_compose">
        <ul>
          <li class="link_header">组成</li>
          <li>
            <a href="#" v-on:click.prevent="">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                   class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline
                points="9 22 9 12 15 12 15 22"></polyline></svg>
            </span>
              <span>
              分类
            </span>
              <span class="icon-ctrl" style="padding-left: 80px;margin-top:-3px;" @click="expland(0)"
                    ref="category-0-icon-right"></span>
              <span class="icon-ctrl1" style="padding-left: 80px;display: none;margin-top:-3px;" @click="collapse(0)"
                    ref="category-0-icon-down"></span>
            </a>
            <ul class="nav-sub" ref="nav-sub-0">
              <li class="category-0">
                <a href="#">
                  <b class="badge">11</b>
                  设计作品
                </a>
              </li>

              <li class="category-0">
                <a href="#">
                  <b class="badge">11</b>
                  设计作品
                </a>
              </li>

              <li class="category-0">
                <a href="#">
                  <b class="badge">11</b>
                  设计作品
                </a>
              </li>

              <li class="category-0">
                <a href="#">
                  <b class="badge">11</b>
                  设计作品
                </a>
              </li>

              <li class="category-0">
                <a href="#">
                  <b class="badge">11</b>
                  设计作品
                </a>
              </li>
            </ul>
          </li>
          <li><a href="">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                   class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline
                points="9 22 9 12 15 12 15 22"></polyline></svg>
            </span>
            <span>
              页面
            </span>
          </a></li>

          <li><a href="">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                   class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline
                points="9 22 9 12 15 12 15 22"></polyline></svg>
            </span>
            <span>
              友链
            </span>
          </a></li>

        </ul>
      </div>

      <div class="aside-buttom">

      </div>
    </div>

  </aside>
</template>

<script>
  export default {
    name: "Aside",
    data() {
      return {
        navigateBar: [
          {name: "blog_index", router: "blog"}
        ]
      }
    },
    methods: {
      expland(index) {
        let right = `category-${index}-icon-right`;
        let down = `category-${index}-icon-down`;

        let nav = `nav-sub-${index}`;

        this.$refs[right].style.display = "none";
        this.$refs[down].style.display = "block";
        this.$refs[nav].style.marginLeft = "0";

        this.$refs[nav].classList.add("is-active");
      },
      collapse(index) {
        let right = `category-${index}-icon-right`;
        let down = `category-${index}-icon-down`;
        let nav = `nav-sub-${index}`;

        this.$refs[right].style.display = "block";
        this.$refs[down].style.display = "none";

        this.$refs[nav].classList.remove("is-active");
        this.$refs[nav].style.marginLeft = "-50px";
      },
      clickDirect(name) {
        let link = this.navigateBar.filter((item) => {
          return item.name === name;
        })[0]

        if (link === undefined) {
          return '';
        }

        this.$router.push({path: link.router}).then((router) => {

        }).catch(e => {

        })
      }
    }
  }
</script>

<style scoped lang="scss">

  #aside {
    background-color: #212121;
    position: fixed;
  }

  .aside-wrap {
    width: 220px;
    height: 1000px;
    position: relative;
  }

  .avatar-wraper {
    height: 183px;
    border-bottom: 1px solid #252525;
  }

  .avatar-inner {
    text-align: center;
  }

  .user-wraper {
    padding: 10px;
  }

  .avatar-inner img {
    border-radius: 50%;
    transition: all 1s;
    margin-top: 10px;
  }

  .avatar-inner img:hover {
    transform: rotate(360deg);
  }


  .username {
    display: flex;
    flex-direction: column;
    text-align: center;
    color: #666666;
  }

  .username span:nth-child(2) {
    font-size: 12px;
  }

  .link_direct {
    color: #777;
    border-bottom: 1px solid #252525;

    ul {
      margin-top: 15px;

      li {
        list-style-type: none;
        line-height: 14px;
        width: 220px;
        height: 40px;


        &:nth-child(1) {
          font-size: 12px;
          padding-left: 15px;
          padding-bottom: 20px;
          height: 14px;
        }

        a {
          display: flex;
          color: #777;
          font-size: 14px;
          padding-left: 20px;

          span {
            display: block;
            width: 40px;
            height: 40px;
            text-align: center;
            line-height: 40px;

            svg {
              margin-top: 10px;
            }
          }

          span:nth-child(1) {
            padding-right: 5px;
            margin-left: -10px;
          }
        }
      }
    }


  }

  .link_compose {
    color: #777;
    border-bottom: 1px solid #252525;


    .link_header {
      font-size: 12px;
      padding-left: 15px;
      padding-bottom: 20px;
      height: 14px;
    }

    ul {
      margin-top: 15px;

      li {
        list-style-type: none;
        line-height: 14px;
        width: 220px;
        /*height: 40px;*/


        a {
          display: flex;
          color: #777;
          font-size: 14px;
          padding-left: 20px;

          span {
            display: block;
            width: 40px;
            height: 40px;
            text-align: center;
            line-height: 40px;

            svg {
              margin-top: 10px;
            }
          }

          span:nth-child(1) {
            padding-right: 5px;
            margin-left: -10px;
          }
        }
      }
    }

  }

  .badge {
    float: right !important;
    display: inline-block;
    background-color: #000;
    color: #aaa;
    border-radius: 10px;
    text-align: center;
    vertical-align: baseline;
    line-height: 1;
    font-size: 11px;
    text-shadow: 0 1px 0 rgb(0, 0, 0.2);
  }

  .nav-sub {

    background-color: #191919;
    border-left: 1px solid #191919;
    transition: all .2s ease-in-out 0s;
    height: 0;
    overflow: hidden;
    margin-left: -50px;

    li {
      width: 220px;
      height: 40px;

      a {
        display: block !important;
        height: 20px;
        width: 125px;
        padding-left: 55px !important;
        padding-top: 10px;
      }
    }
  }

  .is-active {
    height: auto;
    overflow: auto;
    opacity: 1;
  }

  .aside-buttom{
    background-color: #252525;
    height: 50px;
    width: 220px;
    position: absolute;
    /*top: 884px;*/
    bottom: 0px;
  }
</style>
