<template>
    <section class="subscription-section">
        <div class="content-block">
            <div>
            <span>De ce să treci la Premium?</span>
            </div>
    
<ul>
    <li v-for="({image, title, subtitle}) in lists"
    :key="title">
        <div class="svg-container it-c" 
        :style="{ backgroundImage: 'url(' + image + ')' }">
        </div>
        <div>
            <span>{{title}}</span>
            <span>{{subtitle}}</span>
        </div>
    </li>
</ul>
   
        </div>
        
        
    </section>
</template>

<script>
export default {
    name: 'SubscriptionSection',
    data () {
        return {
            lists: [
                {
                    image:'https://i.scdn.co/image/ab671c3d0000f43009302fbaf6259b4c117c704f',
                    title:'Descarci muzică.',
                    subtitle:'Asculți de oriunde.'
                },
                {
                    image:'https://i.scdn.co/image/ab671c3d0000f43098292b95d24a697c20df5137',
                    title:'Ascultă muzică fără anunțuri.',
                    subtitle:'Te bucuri non-stop de muzică.'
                },
                {
                    image:'https://i.scdn.co/image/ab671c3d0000f4306998d3ffd58aad6da6afdf67',
                    title:'Redă orice melodie.',
                    subtitle:'Chiar și pe dispozitivul mobil.'
                },
                {
                    image:'https://i.scdn.co/image/ab671c3d0000f430cd6c528745e510c5be63a012',
                    title:'Omiteri nelimitate.',
                    subtitle:'Doar apeși butonul Înainte.'
                }
            ]
        }
    }

}
    
    
</script>

<style lang="scss">
.subscription-section {
    display: flex;
    padding: 75px 15px;
    div {
        font-size: 40px;
        font-weight: 900;
        text-align: center;
        margin: 0 auto;
    }
    .content-block
    ul{
        display: flex;
        flex-direction: row;
        padding: 0px;
        margin: 0px;
        list-style: none;
        margin-top: 72px;

        li{
            align-items: center;
            display: block;
            span:first-child {
                font-size: 21px;
                font-weight: bold;
                margin-bottom: 10px;
            }
            span:last-child {
                font-weight: 400;
                font-size: 16px;
            }
        }
        li div:first-child {
            margin: 0 auto 40px;
        }
        
        li div:last-child {
            display: flex;
            flex-direction: column;
            margin: 16px 22px;
        }
    }}

</style>

