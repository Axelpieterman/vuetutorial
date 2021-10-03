const app = Vue.createApp({
    data(){
        return{
        gunName: 'G-36',
        gunBrand: 'Hecklor & Koch',
        stock:'56',
        hide: true,
        x: 0,
        y: 0,
        

        guns: [
            {name: 'AR-15', brand: 'ArmaLite', url: 'https://www.youtube.com/watch?v=BSizVpfqFtw', img: 'assets/ar-15.png', isFav: true},
            {name: 'HK-416', brand: 'Hecklor & Koch', url: 'https://www.youtube.com/watch?v=pbImvaiXGFU', img: 'assets/hk-416.png', isFav: false},
            {name: 'Scar-L', brand: 'FNH USA', url: 'https://www.youtube.com/watch?v=DAUIi05Rckc', img: 'assets/scar-l.png', isFav: true}
        ]
    }
  },
  methods: {
      changeTitle(title){
          this.title = title
      },
      toggleShowGuns(){
        this.hide = !this.hide
      },
      handleEvent(e){
        console.log(e)
      },
      handleMouseMove(e){
        this.x = e.offsetX,
        this.y = e.offsetY
      },
      changeFav(gun){
        gun.isFav = !gun.isFav
      }
  }
})

app.mount('#app')