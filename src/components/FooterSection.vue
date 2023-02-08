<template>
<footer class="main-footer">
  <div class="content-block">
  <a href="https://www.spotify.com/ro-ro/">
    <img class="logo" alt="Spotify" src="../assets/Logo.png">
</a>
<nav>
  <div v-for="({name, items}) in nav"
      :key="name">
    <span>{{ name }}</span>
    <a v-for="item in items" 
    :href="item.route"
    :key="item">
  {{ item.name }}
  </a>
  </div>
</nav>

<figure class="social-media">
  <a v-for="link in socialMedia" 
  :key="link"
  :href="link">
    <span />
  </a>
</figure>
</div>

<div class="content-block region">
  <a href="https://www.spotify.com/ro-ro/select-your-country-region/">
    <svg width="12" height="13" viewBox="0 0 12 13" xmlns="http://www.w3.org/2000/svg"><path d="M6 0.624023C8.07255 0.624023 9.90309 1.68041 10.9815 3.28299C10.9819 3.28367 10.9822 3.28403 10.9825 3.28438C11.0029 3.30998 11.0209 3.33677 11.0363 3.36446C11.6453 4.30352 12 5.42315 12 6.62402C12 9.92265 9.32436 12.6079 6.02962 12.624C6.02732 12.6241 6.02495 12.6241 6.02258 12.6241L6 12.624C2.69149 12.624 0 9.93253 0 6.62402C0 3.31571 2.69149 0.624023 6 0.624023ZM6 1.78528C5.80411 1.78528 5.61089 1.79698 5.42102 1.81972C5.39755 1.91375 5.34896 2.0023 5.2765 2.07641L3.75157 3.63714C3.64024 3.75103 3.48978 3.812 3.33616 3.812C3.26752 3.812 3.19848 3.7998 3.1318 3.77483C2.91623 3.69359 2.76891 3.49277 2.75652 3.26265L2.74444 3.04725C1.77228 3.93289 1.16125 5.20844 1.16125 6.62402C1.16125 6.90513 1.18535 7.1807 1.23158 7.44881L2.11909 8.18538C2.12814 8.19266 2.13699 8.20053 2.14564 8.20859L2.91981 8.93437C2.99003 9.00007 3.04274 9.08228 3.07323 9.17374L3.37633 10.0793L3.83343 10.3016H4.86133C5.01514 10.3016 5.16285 10.3625 5.27182 10.4715L6.25621 11.4561C8.80567 11.3224 10.8387 9.20617 10.8387 6.62402C10.8387 5.8726 10.6666 5.16063 10.3596 4.52549L9.45716 5.24616L9.62455 5.6122C9.65956 5.68812 9.67726 5.77053 9.67726 5.85393V6.60784C9.67726 6.78014 9.60075 6.94358 9.46857 7.05393C9.3362 7.16407 9.16154 7.2103 8.99219 7.17902L8.05556 7.00751L8.52643 8.28855C8.58347 8.44354 8.57167 8.61544 8.49417 8.76139L7.67162 10.3097C7.58211 10.4783 7.41628 10.5907 7.22969 10.6136L7.15866 10.6179C6.94387 10.6179 6.74659 10.4991 6.64589 10.3093L6.25231 9.56742C6.24563 9.55444 6.23913 9.54126 6.23323 9.52788L5.91027 8.78833L5.5222 8.25412L4.15443 8.44118C4.0551 8.45475 3.9538 8.44255 3.86057 8.40518L2.68811 7.93765C2.46526 7.84855 2.3201 7.632 2.32244 7.39204L2.33879 5.84783C2.34095 5.65035 2.44304 5.46763 2.61022 5.3624L4.57554 4.12641C4.81058 3.97869 5.11781 4.01783 5.30801 4.22062L5.95905 4.91395L6.7818 5.23062L7.05303 5.13365L5.90181 3.48933C5.77849 3.3131 5.76256 3.08317 5.86051 2.89179L6.41732 1.80311C6.27976 1.7913 6.14057 1.78528 6 1.78528Z" fill="#8F8F8F"></path></svg>
    România (română)
  </a>
  </div>

<div class="content-block btm-links">
  <a v-for="link in bottomLinks"
  :key="link"
  :href="link">
  {{ link.name }}
  </a>
    <span>© 2022 Spotify AB</span>
  </div>

</footer>
</template>

<script>
  export default {
    name: 'FooterSection',
    data() {
      return {
        nav: [
          {
            name: 'COMPANIE',
            items: [
              {
                name: 'Despre',
                route: '#'
              },
              {
                name: 'Locuri de munca',
                route: '#'
              },
              {
                name: 'For the Record',
                route: '#'
              }
            ]
          },
          {
            name: 'COMUNITATI',
            items: [
              {
                name: 'Pentru Artiști',
                route: '#'
              },
              {
                name: 'Dezvoltatori',
                route: '#'
              },
              {
                name: 'Publicitate',
                route: '#'
              },
              {
                name: 'Investitori',
                route: '#'
              },
              {
                name: 'Furnizori',
                route: '#'
              }
            ]
          },
          {
            name: 'LINKURI UTILE',
            items: [
              {
                name: 'Asistență',
                route: '#'
              },
              {
                name: 'Player web',
                route: '#'
              },
              {
                name: 'Aplicație mobilă gratuită',
                route: '#'
              }
            ]
          },
],
        socialMedia: ['https://instagram.com/spotify', 'https://twitter.com/spotify', 'https://www.facebook.com/Spotify' ],
        bottomLinks: [
          {
            name: 'Legal (Informații juridice)',
            link: 'https://www.spotify.com/ro-ro/legal/'
          },
          {
            name: 'Centru de confidențialitate',
            link: 'https://www.spotify.com/ro-ro/privacy/'
          },
          {
            name: 'Politică de confidențialitate',
            link: 'https://www.spotify.com/ro-ro/legal/privacy-policy/'
          },
          {
            name: 'Setări pentru cookie-uri',
            link: '#'
          },
          {
            name: 'About Ads (Informații despre reclame)',
            link: 'https://www.spotify.com/ro-ro/legal/privacy-policy/#s3'
          },
        ]
      }
    },
  }
        
</script>

<style lang="scss">
@import 'src/styles/vars.scss';
@import 'src/styles/helper-classes';

.main-footer {
  padding: 80px 0 50px;
  background-color: black;
  
  .content-block {
    display: flex;
  }
  .region {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    a {
      font-size: 12px;
      text-decoration: none;
      color: #919496;
      &:hover {
        color: $hover-color;
      }
    }
    svg {
      margin-right: 8px;
    }
  }
  .btm-links {
    padding: 0 0 0 15px;
    span {
      margin: 0 15px 0 auto;
      font-size: 12px;
      display: flex;
      justify-items: flex-end;
      align-items: center;
      color:#919496 ;
    }
   a {
    text-decoration: none;
    margin-right: 24px;
    padding: 12px 0;
    font-size: 12px;
    color: #919496;
    &:hover {
      color: $hover-color;
    }
  }
}
  nav {
    margin-bottom: 72px;
    margin-left: 45px;
    display: flex;
    span {
      display: block;
      margin: 20px 0;
      color: #919496;
      font-size: 12px;
      font-weight: 900;
    }
div:nth-child(2) {
  margin: 0 60px;
}   
    a {
      display: block;
      padding: 3px 0 15px;
    }
  }
  .social-media {
    margin-left: auto;
    width: 220px;
    display: flex;
    justify-content: space-between;
    a {
      width: 60px;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background-color: #222326;
span {
      width: 30px;
      height: 30px;
      display: inline-block;
      color:white;
      }
    }
    a:first-child span { 
      background: no-repeat url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 448' fill='%23222326'%3E%3Cpath d='M0 230.126v-.793c.016 55.974.294 63.853 1.344 87.03 3.733 81.349 48.87 126.56 130.293 130.293C155.55 447.739 163.165 448 224 448H0V230.126zm229.242-189.75c55.006.014 62.368.256 85.291 1.307 60.704 2.762 89.059 31.565 91.822 91.821 1.05 22.905 1.275 30.266 1.287 85.272v10.487c-.014 55.022-.255 62.365-1.287 85.27-2.782 60.2-31.062 89.059-91.822 91.822-23.159 1.06-30.399 1.297-87.005 1.306h-7.054c-56.572-.009-63.848-.245-86.989-1.306-60.853-2.782-89.058-31.715-91.821-91.84-1.05-22.905-1.292-30.249-1.306-85.271v-8.77c.01-56.572.263-63.83 1.306-86.989 2.781-60.237 31.061-89.058 91.821-91.821 22.923-1.032 30.268-1.274 85.273-1.287h10.484zm-5.242 68.6c-63.523 0-115.024 51.501-115.024 115.024S160.477 339.043 224 339.043 339.024 287.54 339.024 224c0-63.523-51.501-115.024-115.024-115.024zm0 40.357c41.235 0 74.667 33.432 74.667 74.667 0 41.253-33.432 74.667-74.667 74.667S149.333 265.253 149.333 224c0-41.235 33.432-74.667 74.667-74.667zM343.579 77.56c-14.859 0-26.899 12.04-26.899 26.88s12.04 26.88 26.899 26.88c14.84 0 26.861-12.04 26.861-26.88s-12.021-26.88-26.861-26.88zM448 224v224H224c60.835 0 68.47-.261 92.363-1.344 81.274-3.733 126.597-48.87 130.274-130.293C447.74 292.469 448 284.835 448 224zm-1.344-92.344c-3.659-81.275-48.85-126.56-130.275-130.293C293.187.294 285.307.016 229.333 0H448v224c0-60.835-.261-68.45-1.344-92.344zM0 0h218.667c-55.973.016-63.834.294-87.011 1.344C50.306 5.077 5.096 50.214 1.363 131.637.299 154.722.019 162.62 0 217.873V0z'/%3E%3C/svg%3E"),#fff;
    }
    a:nth-child(2) span { 
      background: no-repeat url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 448' fill='%23222326'%3E%3Cpath d='M448 0v448H0V0h448zM299.75 64c-22.333 0-41.375 7.875-57.125 23.625S219 122.417 219 144.75c0 6 .667 12.167 2 18.5-33-1.667-63.958-9.958-92.875-24.875S74.667 103.583 54.5 78.75c-7.333 12.5-11 26.083-11 40.75 0 13.833 3.25 26.667 9.75 38.5 6.5 11.833 15.25 21.417 26.25 28.75-12.717-.49-24.637-3.77-35.76-9.841L43 176.5v1c0 19.5 6.125 36.625 18.375 51.375s27.708 24.042 46.375 27.875a83.54 83.54 0 01-21.25 2.75c-4.667 0-9.75-.417-15.25-1.25 5.167 16.167 14.667 29.458 28.5 39.875 13.833 10.417 29.5 15.792 47 16.125-29.333 23-62.75 34.5-100.25 34.5-7.167 0-13.667-.333-19.5-1C64.5 371.917 105.833 384 151 384c28.667 0 55.583-4.542 80.75-13.625s46.667-21.25 64.5-36.5 33.208-32.792 46.125-52.625c12.917-19.833 22.542-40.542 28.875-62.125 6.333-21.583 9.5-43.208 9.5-64.875 0-4.667-.083-8.167-.25-10.5 15.833-11.5 29.333-25.417 40.5-41.75-15.5 6.667-31 10.833-46.5 12.5C392 104 403.833 89.167 410 70c-16 9.5-33.083 16-51.25 19.5-16-17-35.667-25.5-59-25.5z'/%3E%3C/svg%3E"),#fff;
  }
  a:last-child span { 
    background: no-repeat url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 448' fill='%23222326'%3E%3Cpath d='M448 0v448H0V0h448zM276.877 16h-1.127c-28.833 0-51.917 8.542-69.25 25.625-17.16 16.912-25.826 40.645-25.997 71.197l-.003.928v54.5h-63.75v74h63.75V432H257V242.25h63.5l9.75-74H257V121c0-12 2.5-21 7.5-27 4.923-5.908 14.37-8.907 28.342-8.998L293.5 85h39.25V19c-13.085-1.938-31.336-2.938-54.754-2.997l-1.12-.003z'/%3E%3C/svg%3E"),#fff;
}
  }
}
</style>