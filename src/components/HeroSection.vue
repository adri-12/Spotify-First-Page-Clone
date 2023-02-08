<template>
    <section class="hero-section">
        <div class="content-block">
            <h1 class="white">
            Ia-ți versiunea Premium gratuită timp de o lună</h1>
        <span class="white">Doar 4.99 EUR/lună după. Anulezi oricând.</span>
        <div class="action-btns">
            <button>SĂ ÎNCEPEM</button>
            <button class="white">VEZI ABONAMENTELE</button>
        </div>
        <p class="white">
            <a href="#" 
            class="white">
                Se aplică Termeni și condiții.
            </a>
            Luna gratuită nu este disponibilă utilizatorilor care au încercat deja versiunea Premium.
        </p>
    </div>
    </section>
</template>

<script>
export default {
    name: 'HeroSection'
}
    
    
</script>

<style lang="scss">
@import 'src/styles/vars.scss';
@import 'src/styles/helper-classes';

.hero-section {
    padding: 88px 0 60px;
    background-color: $main-color;
    h1 + span {
        font-size: 24px;
        font-weight: 400;
    }
    .action-btns button {
        margin: 48px 0 62px;
        border-radius: 50px;
        border: none;
        font-size: 14px;
        font-weight: 700;
        padding: 12px 24px;
        &:first-child {
            margin-right: 16px;
            background-color: black;
            color: white;
            border: 2px solid black;
        }
        &:last-child {
            background-color: transparent;
            border: 2px solid white;
        }

    }
    .action-btns button:hover {
        transform: scale(1.1);
        cursor: pointer;
    }
    p {
        font-size: 12px;
    }
    }

</style>