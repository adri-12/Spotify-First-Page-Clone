 <template>
   <header class="main-header">
    <div class="content-block">
          <a href="https://www.spotify.com/ro-ro/">
               <img class="logo" alt="Spotify" src="../assets/Logo.png">
          </a>
      <nav>
        <a v-for="({name, route}, index) in nav"
        :key="name"
        :href="route">
        <span v-if="index === 3">|</span>
        {{ name }}
      </a>
      </nav>
      </div>
    </header>

  </template>


<script>
  export default {
  name: 'HeaderSpotify',
  data () {
    return {
      nav: [
        {
          name: 'Premium',
          route: '/premium-page'
        },
        {
          name: 'Asistenta',
          route: '/asistenta-page'
        },
        {
          name: 'Descarca',
          route: '/descarca-page'
        },
        {
          name: 'Inregistreaza-te',
          route: '/register-page'
        },
        {
          name: 'Conecteaza-te',
          route: '/login-page'
        },
      ]
    }
  }
}
</script>
<style lang="scss">
@import 'src/styles/vars.scss';
@import 'src/styles/helper-classes';

.main-header {
 >div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
 nav {
  span {
    display: inline-block;
    margin-right: 34px;
  }
  display: flex;
  a {
    padding: 28px 17px;
    color: white;
    text-decoration: none;
    font-size: 16px;
    &:hover {
      color: $hover-color;
    }
  }
 }
}
</style>