<template>
  <div class="premium-cards">
    <section class="content-block">
      <article>
        <h2 class="txt-c f-40">Alege-ți abonamentul Premium</h2>
        <h3 class="txt-c f-16">Asculți nelimitat pe telefon, în boxe și pe alte dispozitive.</h3>
        <div class="cards">
          <div class="header-cards" v-for="({free, pachet, price, account}) in headerOne"
          :key="free">
                <span class="span-cards">{{ free }}</span>
            <h3>{{ pachet }}</h3>
            <p>{{ price }}</p>
            <span>{{ account }}</span>
          <hr/>
          </div>

          <ul class="ul-cards">
            <li v-for="{name,icon} in featuresFour" 
            :key="name">
              <i v-html="icon"/>
              <span>{{ name }}</span>
            </li>
          </ul>

          
          <div class="button-footer">
            <button v-for="item in footerOne" :key="item">
              <a v-for="link in item.links" :href="link.url" :key="link.name">
                {{ link.name }}
              </a>
            </button>
          </div>
          <div class="terms-cards">
            <p><a class="cards-link" href="https://www.spotify.com/legal/premium-promotional-offer-terms">Se aplică Termeni și condiții.</a>
              Luna gratuită nu este disponibilă utilizatorilor care au încercat deja versiunea Premium.
            </p>
          </div>
          </div>
          

        
      </article>
    </section>
  </div>
</template>

<script>
export default {
  name: 'CardsSection',
  data() {
    return {
      features: [
        {
          name: "Reducere specială pentru studenții eligibili care urmează cursurile unei universități",
          icon:  ` <svg>
                  <polyline points="3.32 12.86 8.9 19.4 20.99 5.26" fill="none" stroke="#181818"></polyline>
                </svg> `
        },
        {
          name: "Ascultă muzică fără reclame",
          icon: `  <svg>
                  <polyline points="3.32 12.86 8.9 19.4 20.99 5.26" fill="none" stroke="#181818"></polyline>
                </svg> `
        },
        {
          name: "Redai de oriunde – chiar și offline",
          icon: `  <svg>
                  <polyline points="3.32 12.86 8.9 19.4 20.99 5.26" fill="none" stroke="#181818"></polyline>
                </svg> `
        },
        {
          name: "Redare la cerere",
          icon: `  <svg>
                  <polyline points="3.32 12.86 8.9 19.4 20.99 5.26" fill="none" stroke="#181818"></polyline>
                </svg> `
        },
  ],
   featuresTwo:[
     {
       name: "6 conturi Premium pentru membrii familiei care locuiesc împreună",
       icon: `  <svg>
                  <polyline points="3.32 12.86 8.9 19.4 20.99 5.26" fill="none" stroke="#181818"></polyline>
                </svg> `
     },
     {
       name: "Blochezi muzica având conținut explicit",
       icon: `  <svg>
                  <polyline points="3.32 12.86 8.9 19.4 20.99 5.26" fill="none" stroke="#181818"></polyline>
                </svg> `
     },
     {
       name: "Asculți muzică fără reclame, redai offline și la cerere",
       icon: `  <svg>
                  <polyline points="3.32 12.86 8.9 19.4 20.99 5.26" fill="none" stroke="#181818"></polyline>
                </svg> `
     }
   ],
      featuresThree: [
        {
          name: "2 conturi Premium pentru un cuplu care locuiește împreună",
          icon: `  <svg>
                  <polyline points="3.32 12.86 8.9 19.4 20.99 5.26" fill="none" stroke="#181818"></polyline>
                </svg> `
        },
        {
          name: "Asculți muzică fără reclame, redai offline și la cerere",
          icon: `  <svg>
                  <polyline points="3.32 12.86 8.9 19.4 20.99 5.26" fill="none" stroke="#181818"></polyline>
                </svg> `
        }
      ],
      featuresFour: [
        {
          name: "Ascultă muzică fără anunțuri",
          icon: `  <svg>
                  <polyline points="3.32 12.86 8.9 19.4 20.99 5.26" fill="none" stroke="#181818"></polyline>
                </svg> `
        },
        {
          name: "Redai de oriunde – chiar și offline",
          icon: `  <svg>
                  <polyline points="3.32 12.86 8.9 19.4 20.99 5.26" fill="none" stroke="#181818"></polyline>
                </svg> `
        },
        {
        name: "Redare la cerere",
        icon: `  <svg>
                  <polyline points="3.32 12.86 8.9 19.4 20.99 5.26" fill="none" stroke="#181818"></polyline>
                </svg> `
              }
            ],
  headerOne:[{
    free: "O lună gratuit",
    pachet: "Individual",
    price: "4.99 EUR/lună după perioada ofertei",
    account: "Un cont"
  }],
  headerTwo:[{
    free: "O lună gratuit",
    pachet: "Duo",
    price: "6.49 EUR/lună după perioada ofertei",
    account: "2 conturi"
  }],
  headerThree:[{
    free: "O lună gratuit",
    pachet: "Familie",
    price: "7.99 EUR/lună după perioada ofertei",
    account: "Maximum 6 conturi"
  }],
  headerFour:[{
    free: "O lună gratuit",
    pachet: "Student",
    price: "2.49 EUR/lună după perioada ofertei",
    account: "Un cont"
  }],
  footerOne: [{
    links: [
  {name:'SĂ ÎNCEPEM', url: '#'}
    ]
  },
  {
  links: [
    {name:'SĂ ÎNCEPEM', url: '#'}
  ]}]
         }
      }
  }
</script>

<style lang="scss">
@import "../styles/vars";
.premium-cards {
  background-color: $cards-background;
 article {
  hr {
    border-color: rgb(204, 204, 204);
  }
  padding: 75px 15px;
  h2 {
    margin: 0;
  }
  h3 {
    margin: 10px 0;
    font-weight: 400;
  }
 }
  .cards {
    display: grid;
    grid-template-rows: repeat(4, auto);
    grid-auto-flow: column;
    grid-template-columns: repeat(4, 1fr);
    justify-content: center;
    margin: 50px 0 26px;
  }
  .header-cards {
    padding: 16px 16px 30px 16px;
    margin:0 16px 0 0;
    border-radius: 10px 10px 0 0;
    box-shadow:rgb(0 0 0 / 30%) 0 0 8px;
    background-color: rgb(255, 255, 255);
  h3 {
      font-size: 24px;
      font-weight: bold;
      line-height: 24px;
      margin: 0 0 5px;
    }
  }
.span-cards {
    border-radius: 4px;
    font-size: 14px;
    padding: 4px 8px;
    display: inline-block;
    margin: 0 4px 10px 0;
    margin-block: 0 10px;
    color: rgb(255, 255, 255);
    background-color: rgb(13, 114, 234);
  }
.ul-cards {
  padding: 20px 16px 16px 16px;
  list-style: none;
  box-shadow: -5px 0 5px -5px rgb(0 0 0 / 30%), 5px 0 5px -5px rgb(0 0 0 / 30%);
  margin: 0 16px 0 0;
  background-color: rgb(255, 255, 255);
}

.terms-cards {
  border-radius: 0 0 10px 10px;
  box-shadow: rgb(255 255 255) 0px -9px 0px 0px, rgb(0 0 0 / 30%) 0 0 8px;
  padding: 4px 16px 16px 16px;
  margin: 0 16px 16px 0;
  background-color:rgb(255, 255, 255);
p {
  margin-top: 12px;
  color: rgb(83, 83, 83);
  font-size: 12px;
  line-height: 16px;
  text-align: left;
a {
    color: rgb(83, 83, 83);
    text-decoration: underline;
    font-size: 12px;
    } 
  }
}
  svg {
    height: 24px;
    width: 24px;
  }
  i {
    width:24px;
    height: 66px;
    padding-right: 10px;
    align-items: center;
  }
}

.button-footer {
display: flex;
justify-content: center;
box-shadow: rgb(255 255 255) 0px -9px 0px 0px, rgb(0 0 0 / 30%) 0 0 8px;
padding: 4px 16px 16px 16px;
background-color:rgb(255, 255, 255);
margin: 0 16px 0 0;
  :hover {
  transform: scale(1.1);
}
button {
  text-transform: uppercase;
  font-weight: 600;
  width: 100%;
  padding-block: 14px;
  padding-inline: 32px;
  border-radius: 50px;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  a {
    color: #fff;
    text-decoration: none;
     }
  }
}

</style>