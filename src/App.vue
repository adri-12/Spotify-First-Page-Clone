<template>
  <div id="app">
    <HeaderSpotify />

    <HeroSection />

    <SubscriptionSection />

    <CardsSection />

    <FooterSection />
  </div>
</template>

<script>
import HeaderSpotify from './components/HeaderSpotify.vue';
import FooterSection from './components/FooterSection.vue';
import HeroSection from './components/HeroSection.vue';
import CardsSection from './components/CardsSection.vue';
import SubscriptionSection from './components/SubscriptionSection.vue';



export default {
  name: 'app',
  components: {
    HeaderSpotify,
    HeroSection,
    CardsSection,
    SubscriptionSection,
    FooterSection,
  }
}
</script>

<style lang="scss">
@import 'src/styles/vars.scss';
@import 'src/styles/helper-classes';

.content-block {
  max-width: 1170px;
  margin: 0 auto;
}
.main-header,
.main-footer {
  background-color:black ;
  nav {
    a {
      color: white;
      text-decoration: none;
      font-size: 16px;
      &:hover {
        color: $hover-color;
      }
    }
   }
}
.svg-container {
width: 142px;
height: 142px;
background-size: contain;
}
</style>


