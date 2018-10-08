<template>
  <div class="container1">
  <!-- <h1>Welcome</h1>
  <p>Welcome to FUTBASE. -->
  <form @submit.prevent="formSubmitted()">
    <h2 class="textH2">Player Search</h2>
    <div id="custom-search-input">
                <div class="input-group">
                    <input v-model = "searchTerm" type="text" class="form-control input-lg" placeholder="Search" />
                    <span class="input-group-btn">
                        <button class="btn btn-info btn-lg" type="button">
                            <i class="glyphicon glyphicon-search "></i>
                        </button>
                    </span>
                </div>
            </div>
  </form>
 <section>
   <h3>{{searchTerm}}</h3>
   <!-- <img v-if="loading" id="loadingImage" src="http://v3.preloaders.net/preloaders/211/Soccer%20ball-128.gif"> -->
 </section>
    <ul class="list-unstyled"  v-for="card in cards" :key="card._id">
            <li class="media">
              <img v-if="card.imageURL" class="mr-3" :src="card.imageURL" :alt="card.name">
              <div class="media-body">
                <h5 class="mt-0 mb-1">{{card.name}}: ({{card.dob}})</h5>
                <div class="row">
                    <div class="col-3">
                      <p>Club<br>Barcelona</p>
                    </div>
                    <div class="col-4">
                      <p>Appearances<br>{{card._id}}</p>
                    </div>
                    <div class="col-4">
                      <p>Goals<br>{{card.goals}}</p>
                    </div>
                </div>
               <div class="row">
                    <div class="col-4">
                      <p>Previous Clubs<br>Barcelona</p>
                    </div>
                </div>
                 <div class="row">
                    <div class="col-3">
                      <p>Total</p>
                    </div>
                     <div class="col-4">
                      <p>Appearances<br>500</p>
                    </div>
                     <div class="col-4">
                      <p>Goals<br>{{card.goals}}</p>
                    </div>
                </div>
                
              
              </div>
             
            </li>
             <hr>
    </ul>

   
  </div>
</template>

<script>
// import API from './API';
const API_URL = 'http://localhost:2244/cards';
export default {
  name: 'home',
  data: () => ({
    cards: [],
    searchTerm: '',
    loading: false,

  }),
  // mounted(){
  //   fetch(API_URL).then(response => response.json()).then(result => {
  //     this.cards = result;
  //     // console.log(result);
  //   });
  // },
  methods: {
   formSubmitted(){
    fetch(API_URL).then(response => response.json())
    .then(cards =>{
            this.cards = cards
    });
    console.log(this.searchTerm);
    }
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Raleway:200');
body{
  background: #e9e4e4
}
i{
  color: orange
}
ul {
  list-style: none;
}
.padder{
  padding-left: 400px;
  margin: 1%;
}
img{
  max-width: 300px;
  height: auto;
}
hr{
  border-top: 1px solid rgb(151, 237, 233);
}

.textH2{
  margin-top: 300px;
 font-family: 'Raleway', sans-serif;
}

#custom-search-input{
    padding: 3px;
    border: solid 1px #E4E4E4;
    border-radius: 6px;
    background-color: #fff;
}

#custom-search-input input{
    border: 0;
    box-shadow: none;
}

#custom-search-input button{
    margin: 2px 0 0 0;
    background: none;
    box-shadow: none;
    border: 0;
    color: #666666;
    padding: 0 8px 0 10px;
    border-left: solid 1px #ccc;
}

#custom-search-input button:hover{
    border: 0;
    box-shadow: none;
    border-left: solid 1px #ccc;
}

#custom-search-input .glyphicon-search{
    font-size: 23px;
}
</style>

