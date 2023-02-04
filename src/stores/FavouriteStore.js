import { defineStore } from "pinia";
export const useFavouriteStore = defineStore("FavouriteStore",{
    //state
     state:() => {
         return {
             favList: JSON.parse(localStorage.getItem("favourites"))||[]
         }
     },
     //getters
     getters:{
         getList:(state)=>state.favList
     },
     //actions
     actions:{
         setList(newFavourite){
             this.favList.push(newFavourite);
             localStorage.setItem("favourites",JSON.stringify(this.favList))
         }
    }
})