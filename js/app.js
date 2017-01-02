
let personas = [];
let personaTemplate = {
    name: "John Doe",
    attributes: [
        {
            name: "JohnDoe",
            range: 50,
            notes: "These are notes"
        }
    ]
};

new Vue({
    el: '#personaMain',
    data: {
        header: "Persona Creator",
        people: [
            { name: "Jeff",
              range: 97,
              notes: "Nada"
            }
        ]
    },
    methods: {
        createPersona: function() {
            this.people.push({
            name: "John Doe",
              range: 50,
              notes: "Nada"
          });
      },
        deletePersona: function(index) {
                this.people.splice(index, 1);
            }
    }
});

//
// new Vue({
//   el: '#giffy',
//   data: {
//     query: "batman",
//     header: {
//       first: "Sprint",
//       second: "Planning" },
//     results: [],
//     giffyUrl: "http://media4.giphy.com/media/7p3e2WCM0VEnm/giphy.gif"
//     },
//   methods: {
//       grabGiffy: function(e) {
//         var orig = this;
//         Vue.http.get("http://api.giphy.com/v1/gifs/search?q="+this.query+"&api_key=dc6zaTOxFJmzC&limit=16&offset=0", function(data){
//           orig.results = [];
//           for(index in data.data) {
// orig.results.push(data.data[index].images.original.url);
//           }
//       });
//     },
//     selectGiffy: function(index) {
//       this.giffyUrl = this.results[index];
//     }
//   }
//
// });
