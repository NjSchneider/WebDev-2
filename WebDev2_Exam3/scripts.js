var aryShows = [];

$(document).ready(()=>{            
    $.ajax({url:"https://api.themoviedb.org/3/tv/popular?api_key=88fa8cb9c6ebb34aaa7cc7e7e074c1a9&language=en-US&page=1", success: function(result){
        console.log(result.results);
        for(var i = 0; i < 3; i++){
            aryShows[i] = result.results[i];
        }        
        app.fillData();
    }})
})


var app = new Vue({
    el: '#app',             
    data: {
        showList: [],
        reviews: [],
        Show: function(id, image, name, overview, score, airDate){
            this.id = id;
            this.image = "https://image.tmdb.org/t/p/w500" + image;
            this.name = name;
            this.overview = overview;
            this.score = score;
            this.airDate = airDate;
        }     
    },
    methods: {
        fillData(){
            for(var i = 0; i < 3; i++){
                this.showList.push(new this.Show(aryShows[i].id, aryShows[i].poster_path, aryShows[i].name, aryShows[i].overview, aryShows[i].vote_average, aryShows[i].first_air_date));
            }
            console.log(this.showList);
        },
        reviewCall(id){
            console.log(this.reviews.length);
            var aryReviews = [];
            console.log(id);
            $.ajax({url:`https://api.themoviedb.org/3/tv/${id}/reviews?api_key=88fa8cb9c6ebb34aaa7cc7e7e074c1a9&language=en-US&page=1`, success: function(result){
                for(var i = 0; i < result.results.length; i++){
                    aryReviews[i] = result.results[i];
                }                
                app.reviews = aryReviews;
                console.log(app.reviews);
            }})            
        } 
    }     
})

Vue.component('review-modal', {    
    props: ['showreviews'],
    template:
    `        
        <div class="modal" id="modal" tabindex="-1" role="dialog">
            <div class="modal-dialog" id="review-modal" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Reviews</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div  v-if="showreviews.length === 0">
                        <div class="modal-body">
                            <h4 class="text-muted">No reviews currently...</h4>
                        </div>
                    </div>
                    <div v-else-if="showreviews.length > 0">
                        <div class="modal-body" v-for="(review, index) in showreviews" :key="index">
                            <h4>User: {{review.author}}</h4>
                            <div class="reviewText">
                                {{review.content}}
                            </div>
                        </div>
                    </div>                
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>           
    `
})
