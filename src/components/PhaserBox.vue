<template>
  <div id="phaser">

  </div>
</template>
<script>
import Phaser from '../assets/phaser-arcade-physics'
export default {
  name: 'PhaserBox',
  data () {
    return {
      imgUrlArr:[
        require('../assets/logo.png')
      ]
    }
  },
  mounted() {
    let self=this;
    console.log(Phaser)
    var game = new Phaser.Game(document.documentElement.clientWidth*2, document.documentElement.clientHeight*2, Phaser.AUTO, 'phaser', { preload: preload, create: create });
    console.log(game)
    function preload() {
      game.load.image('logo',self.imgUrlArr[0]);
    }
    function create() {
      game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      game.stage.backgroundColor='#fff';
      let logo=game.add.image(game.world.centerX,game.world.centerY,'logo');
      logo.anchor.set(.5);
      logo.scale.set(document.documentElement.clientWidth/375);
    }
  },
}
</script>
<style scoped>
#phaser{
  
}
</style>
