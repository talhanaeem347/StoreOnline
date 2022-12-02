import { createStore } from "vuex";

export default createStore({
  state: {
    cart: 0,
    love: 0,
    siteName: "Store Online",
    active: false,
    event : "Summer"
  },
  mutations: {
    increaseLove(state) {
      state.love += 1;
    },
    increaseCart(state) {
      state.cart += 1;
    },
    setEvent(state,value){
      state.event = value
    }
  }
})

