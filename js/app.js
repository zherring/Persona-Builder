
new Vue({
    el: '#personaMain',
    data: {
        header: "Persona Creator",
        people: [
            {
                name: "Jeff",
                attrData: [
                { name: "Attr Name", range: 57, notes: "Nada"},
                { name: "Attr Name2", range: 67, notes: "Nada"},
                { name: "Attr Name3", range: 98, notes: "Nada"}
                ]
              },
        ],
        attributes: ["Attribute 1", "Attribute 2", "Attribute 3"]
    },
    methods: {
        createPersona: function() {
            this.people.push({
            name: "John Doe",
            attrData: [
            { name: "Attr Name", range: 57, notes: "Nada"},
            { name: "Attr Name2", range: 67, notes: "Nada"},
            { name: "Attr Name3", range: 98, notes: "Nada"}
            ]
          });
        },
        deletePersona: function(index) {
                this.people.splice(index, 1);
        },
        addAttr: function() {
            this.attributes.push("New Attribute");

        },
        removeAttr: function(index) {
                this.attributes.splice(index, 1);
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
