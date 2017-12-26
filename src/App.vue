<template>
     <button @click="openmodal">打开</button>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {

    }
  },
  methods: {
    openmodal(){
      this.$alert({
        title: '我的第一个modal',
        content: '大家想想我做了多久'
      }).then((data)=>{
        this.name = 'dmy'
        alert(data)
      })
    }
  },
  mounted(){

  }
}
</script>

