<template>
  <div class="home-view">
    <header-spotify/>
      <div class="content m-0">
        <div class="content-items">
        <h1>
          Ia-ți versiunea Premium gratuită timp de o lună
        </h1>
        <br>
        <h2 class="premium-h2">Doar 4.99 EUR/lună după. Anulezi oricând.</h2>
        <div class="btns-section">
        <div class="btn-header-one">
          <a href="https://www.spotify.com/ro-ro/purchase/offer/default-trial-1m?country=RO">SĂ ÎNCEPEM
            <div class="btn-focus-one"></div>
          </a>
        </div>
        <div class="btn-header-two">
          <a href="https://www.spotify.com/ro-ro/purchase/offer/default-trial-1m?country=RO">VEZI ABONAMENTELE
            <div class="btn-focus-two"></div>
          </a>
        </div>
          </div>
        <div class="footer-section">
          <p><a href="https://www.spotify.com/legal/premium-promotional-offer-terms">Se aplică Termeni și condiții.</a>
            Luna gratuită nu este disponibilă utilizatorilor care au încercat deja versiunea Premium.
          </p>
        </div>
        </div>
      </div>
    <section class="why-premium flex flex-col">
      <article class="pad-75-15">
        <header class="mid-section">
          <h2>
            De ce să treci la Premium?
          </h2>
        </header>
        <ul class="ul-style flex flex-row">
          <li class="mb-20">
            <div class="first-pic bullet-pic">
            </div>
            <div class="m-16-0 txt-c">
              <p class="p-bold">Descarci muzică.</p>
              <p>Asculți de oriunde.</p>
            </div>
          </li>

          <li class="mb-20">
            <div class="second-pic bullet-pic">
            </div>
            <div class="m-16-0 txt-c">
              <p class="p-bold">Ascultă muzică fără anunțuri.</p>
              <p>Te bucuri non-stop de muzică.</p>
            </div>
          </li>

          <li class="mb-20">
            <div class="third-pic bullet-pic">
            </div>
            <div class="m-16-0 txt-c">
              <p class="p-bold">Redă orice melodie.</p>
              <p>Chiar și pe dispozitivul mobil.</p>
            </div>
          </li>

          <li class="mb-20">
            <div class="fourth-pic bullet-pic">
            </div>
            <div class="m-16-0 txt-c">
              <p class="p-bold">Omiteri nelimitate.</p>
              <p>Doar apeși butonul Înainte.</p>
            </div>
          </li>
        </ul>
      </article>
    </section>
    <cards-section/>
    <footer-spotify/>
  </div>
</template>

<script>
import CardsSection from "@/components/CardsSection.vue";
import FooterSection from "@/components/FooterSection.vue";
export default {
  name: 'HomeView',
  components: {CardsSection},
}
</script>

<style lang="scss">
@import "../styles/helper-classes";
@import "../styles/vars";
.home-view {
  .content {
    min-height: 480px;
    background-color: $main-color;
    color: $text-color;
    padding: 72px 0 72px 0;
  }
  .content-items {
    display: flex;
    flex-direction: column; 
  }
  .premium-h2 {
    display: inline-block;
    font-size: 1.5rem;
    margin-top: 30px;
    font-weight: 400;
  }
  .footer-section {
    font-size: 12px;
    margin-top: 40px;
    font-weight: 400;
    font-family: Helvetica, Arial, sans-serif;
    line-height: 16px;
  }

  .footer-section a {
    color: white;
    text-decoration: underline;
    font-size: 0.7rem;
  }
  .footer-section p {
    font-size: 0.7rem;
  }

  .mid-section {
    margin-bottom: 72px;
    text-align: center;
    line-height: 1.5;
  }

  .first-pic {
    height: 142px;
    width: 142px;
    background-image: url('https://i.scdn.co/image/ab671c3d0000f43009302fbaf6259b4c117c704f');
    background-position: center top;
    flex-grow: 1;
    -webkit-box-flex: 1;
  }

  .second-pic {
    height: 142px;
    width: 142px;
    background-image: url('https://i.scdn.co/image/ab671c3d0000f43098292b95d24a697c20df5137');
    background-position: center top;
    flex-grow: 1;
    -webkit-box-flex: 1;
  }

  .third-pic {
    height: 142px;
    width: 142px;
    background-image: url('https://i.scdn.co/image/ab671c3d0000f4306998d3ffd58aad6da6afdf67');
    background-position: center top;
    flex-grow: 1;
    -webkit-box-flex: 1;
  }

  .fourth-pic {
    height: 142px;
    width: 142px;
    background-image: url('https://i.scdn.co/image/ab671c3d0000f430cd6c528745e510c5be63a012');
    background-position: center top;
    flex-grow: 1;
    -webkit-box-flex: 1;
  }
  .btns-section {
    display: flex;
    flex-direction: row;
    padding-top: 20px;
  }
  .btn-header-one {
    margin-right: 8px;
    border: 2px solid black;
    border-radius: 500px;
    padding-block: 14px;
    padding-inline: 32px;
    background-color: black;
    font-weight: 700;
    font-family: Helvetica,Arial,sans-serif;
  }
  .btn-focus-one {
    display: block;
    position: absolute;
    pointer-events: none;
    transition: border-color 200ms ease-in 0s;
    box-sizing: border-box;
    inline-size: calc(100% + 12px);
    block-size: calc(100% + 12px);
    top: -6px;
    left: -6px;
    background: transparent;
    border-radius: 500px;
    border: 3px solid transparent;
  }
  .btns-section a {
    box-sizing: border-box;
    text-decoration: none;
    color: white;
  }
  .btn-header-two {
      border: 2px solid white;
      border-radius: 500px;
    padding-block: 14px;
    padding-inline: 32px;
    letter-spacing: normal;
    font-weight: 700;
    font-size: 14px;
    font-family: Helvetica,Arial,sans-serif;;
  }
}
</style>


