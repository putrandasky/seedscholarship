<template>
  <a href="#" class="float" @click.prevent="sendWhatsapp('+6281290001300')">
    <i class="fa fa-whatsapp my-float"></i>
  </a>
</template>
<script>
  export default {
    name: 'WaButton',
    data: function() {
      return {}
    },
    created() {},
    methods: {
      sendWhatsapp(number) {
        let yourMessage = "Halo, mau tanya tentang  SEED Scholarship"
        let message = yourMessage.split(' ').join('%20')
        let ua = navigator.userAgent.toLowerCase();
        let isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
        let isIos = ua.indexOf("iphone") > -1; //&& ua.indexOf("mobile");
        if (isAndroid || isIos) {
          // Do something!
          // Redirect to Android-site?
          let win = window.open('whatsapp://send?phone=' + number + '&text=%20' + message, '_blank');
          win.focus();
        } else {
          let win = window.open('https://web.whatsapp.com/send?phone=' + number + '&text=%20' + message, '_blank');
          win.focus();

        }

      }
    },
  }
</script>
<style scoped>
  .float {
    position: fixed;
    width: 60px;
    height: 60px;
    bottom: 40px;
    right: 40px;
    background-color: #25d366;
    color: #FFF;
    border-radius: 50px;
    text-align: center;
    font-size: 30px;
    box-shadow: 2px 2px 3px #999;
    z-index: 100;
  }

  .my-float {
    margin-top: 16px;
  }
</style>
