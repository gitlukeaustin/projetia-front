new Vue({
    el: '#app',
    data: {
      posts: ["test","test","test"],
      question: null
    },
    methods: {
        sendQuestion: function () {
          vm = this;
          console.log(question.value)
        fetch('https://api.twitter.com/1.1/search/tweets.json?q='+question.value+'&count=5',{mode:"no-cors"})
        .then(function (response) {
          return response.json()
        })
        .then(function (data) {
          vm.posts = data
        })
      }
    }
  })