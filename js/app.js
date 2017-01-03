
new Vue({
    el: '#personaMain',
    data: {
        header: "Persona Creator",
        people: [
            {
            name: "Jim",
            attributes: [
                {range : 5}
                ]
            },
            {
            name: "Ted",
            attributes: [
                {range : 1}
                ]
            }
        ],
        attributes: [ { title : "Reading" } ]
    },
    methods: {
        createPersona: function() {
            const newInd = this.people.length;
            this.people.push({
                name: "John Doe",
                attributes: []
            })
            this.attributes.forEach(entry => this.people[newInd].attributes.push({range: 3}))
        },
        deletePersona: function(index) {
                console.log(index);
                this.people.splice(index, 1);
                console.log(this.people);

        },
        addAttr: function() {
            this.attributes.push({title : "New Attribute"});
            this.people.forEach( person => person.attributes.push({ range : 3}));
        },
        removeAttr: function(index) {
                this.attributes.splice(index, 1);
                this.people.forEach( person => person.attributes.splice(index, 1));
        },
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
