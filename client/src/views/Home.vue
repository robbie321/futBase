<template>
  <div class="container1">
  <!-- <h1>Welcome</h1>
  <p>Welcome to FUTBASE. -->
  <form @submit.prevent="formSubmitted(searchTerm)">
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
   <h3 v-if="seen">Showing results for : {{searchTerm}}</h3>

<div class="movie_card" id="bright"  v-for="card in cards" :key="card._id">
  <div class="info_section">
    <div class="movie_header">
      <img class="locandina" v-if="card.crestURL" :src="card.crestURL" :alt="card.name"/>
      <h1>{{card.name}}</h1>
      <h4>{{card.currentClub}}</h4>
      <span class="minutes">ST</span>
<!--       <p class="type">Action, Crime, Fantasy</p> -->
    </div>
    <div class="movie_desc">
      <p class="text">
       <div class="row">
                    <div class="col-md-4">
                      <p>Appearances<br>{{card.appearances}}</p>
                    </div>
                    <div class="col-md-4">
                      <p>Goals<br>{{card.goals}}</p>
                    </div>
                </div>
      </p>
    </div>
  </div>
    <div class="blur_back "><img  v-if="card.imageURL" :src="card.imageURL" :alt="card.name"/></div>
</div>






   <!-- <img v-if="loading" id="loadingImage" src="http://v3.preloaders.net/preloaders/211/Soccer%20ball-128.gif"> -->
 </section>
    <!-- <ul class="list-unstyled"  v-for="card in cards" :key="card._id">
            <li class="media">
              <img v-if="card.imageURL" class="mr-3" :src="card.imageURL" :alt="card.name">
              <div class="media-body">
                <h5 class="mt-0 mb-1">{{card.name}}: ({{card.dob}})</h5>
                <div class="row">
                    <div class="col-md-3">
                      <p>Club<br>{{card.currentClub}}</p>
                    </div>
                    <div class="col-md-4">
                      <p>Appearances<br>{{card.appearances}}</p>
                    </div>
                    <div class="col-md-4">
                      <p>Goals<br>{{card.goals}}</p>
                    </div>
                </div>
               <div class="row">
                    <div class="col-md-4">
                      <p>Previous Clubs<br>{{card.previousClubs}}</p>
                    </div>
                </div>
                 <div class="row">
                    <div class="col-md-3">
                      <p>Total</p>
                    </div>
                     <div class="col-md-4">
                      <p>Appearances<br>{{card.totalAppearances}}</p>
                    </div>
                     <div class="col-md-4">
                      <p>Goals<br>{{card.goals}}</p>
                    </div>
                </div>
                
              
              </div>
             
            </li>
             <hr>
    </ul>  -->
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
    seen: false,

  }),
  // mounted(){
  //   fetch(API_URL).then(response => response.json()).then(result => {
  //     this.cards = result;
  //     // console.log(result);
  //   });
  // },
  methods: {
   formSubmitted(name){
    fetch(API_URL+"/"+name).then(response => response.json())
    .then(cards =>{
            this.cards = cards
            this.seen = true;
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

h1,h2{
  margin-top: 0;
  margin-bottom: 0;
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
  max-width: 800px;
  height: auto;
}
hr{
  border-top: 1px solid orange;
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

.bright_back{
  /* background: url({{card: NaNimageURL}}); */
    /* background: url("http://localhost:2244/cards/0/imageURL"); */

  background: url("https://pre00.deviantart.net/686d/th/pre/f/2018/190/2/2/cristiano_ronaldo___welcome_to_juventus_by_individualdesign-dcgpu10.png");
}




@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700,800');
* {
  box-sizing: border-box;
  margin: 0;
}
html, body {
  margin: 0;
  background: white;
  font-family: 'Montserrat', helvetica, arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
}
.link {
  display: block;
  text-align: center;
  color: #777;
  text-decoration: none;
  padding: 10px;
}
.movie_card {
  position: relative;
  display: block;
  width: 800px;
  height: 350px;
  margin: 80px auto;
  overflow: hidden;
  border-radius: 10px;
  transition: all 0.4s;
  box-shadow: 0px 0px 120px -25px rgba(0, 0, 0, 0.5);
}
.movie_card:hover {
  transform: scale(1.02);
  box-shadow: 0px 0px 80px -25px rgba(0, 0, 0, 0.5);
  transition: all 0.4s;
}
.movie_card .info_section {
  position: relative;
  width: 100%;
  height: 100%;
  background-blend-mode: multiply;
  z-index: 2;
  border-radius: 10px;
}
.movie_card .info_section .movie_header {
  position: relative;
  padding: 25px;
  height: 40%;
}
.movie_card .info_section .movie_header h1 {
  color: black;
  font-weight: 400;
}
.movie_card .info_section .movie_header h4 {
  color: #555;
  font-weight: 400;
}
.movie_card .info_section .movie_header .minutes {
  display: inline-block;
  margin-top: 0;
  color: #555;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.05);
}
.movie_card .info_section .movie_header .type {
  display: inline-block;
  color: #959595;
  margin-left: 10px;
}
.movie_card .info_section .movie_header .locandina {
  position: relative;
  float: left;
  margin-right: 20px;
  height: 120px;
  box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.5);
}
.movie_card .info_section .movie_desc {
  padding: 25px;
  height: 50%;
}
.movie_card .info_section .movie_desc .text {
  color: #545454;
}
.movie_card .info_section .movie_social {
  height: 10%;
  padding-left: 15px;
  padding-bottom: 20px;
}
.movie_card .info_section .movie_social ul {
  list-style: none;
  padding: 0;
}
.movie_card .info_section .movie_social ul li {
  display: inline-block;
  color: rgba(0, 0, 0, 0.3);
  transition: color 0.3s;
  transition-delay: 0.15s;
  margin: 0 10px;
}
.movie_card .info_section .movie_social ul li:hover {
  transition: color 0.3s;
  color: rgba(0, 0, 0, 0.7);
}
.movie_card .info_section .movie_social ul li i {
  font-size: 19px;
  cursor: pointer;
}
.movie_card .blur_back {
  position: absolute;
  top: 0;
  z-index: 1;
  height: 100%;
  right: 0;
  background-size: cover;
  border-radius: 11px;
}
@media screen and (min-width: 768px) {
  .movie_header {
    width: 65%;
  }
  .movie_desc {
    width: 50%;
  }
  .info_section {
    background: linear-gradient(to right, #e5e6e6 50%, transparent 100%);
  }
  .blur_back {
    width: 80%;
    background-position: -100% 10% !important;
  }
}
@media screen and (max-width: 768px) {
  .movie_card {
    width: 95%;
    margin: 70px auto;
    min-height: 350px;
    height: auto;
  }
  .blur_back {
    width: 100%;
    background-position: 50% 50% !important;
  }
  .movie_header {
    width: 100%;
    margin-top: 85px;
  }
  .movie_desc {
    width: 100%;
  }
  .info_section {
    background: linear-gradient(to top, #e5e6e6 50%, transparent 100%);
    display: inline-grid;
  }
}


</style>

