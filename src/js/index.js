window.onload = function () {
    // PLACE URL TO API HERE:
    var url = "http://austin.iiens.net/mock.php?q="

    var service = function(query){
        fetch(url+query.value
            //, 
            //{headers:{
            //mode:"cors",
            //headers:{
            //    "Content-Type":"application/json",
            //    'Access-Control-Request-Headers':'*'
            //},
            //referrer:"no-refferer"
            //}
            //}
    ).then(function (response) {
            console.log(response);
            return response.json();
        })
    }


    var app = new Vue({
        el: '#app',
        data: {
        posts: [],
        question: null
        },
        methods: {
            sendQuestion: function () {
                console.log(question.value);
                var v = this;
                fetch(url+question.value)
                .then(function(response) {
                    // The response is a Response instance.
                    // You parse the data into a useable format using `.json()`
                    return response.json();
                  }).then(function(data) {
                    // `data` is the parsed version of the JSON returned from the above endpoint.
                    console.log(data);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
                    v.posts = data;
                  });
            }
        }
    })
}