new Vue({
    el: '#personaMain',
    data: {
        header: "Persona Creator",
        people: [
            {
            name: "Jim",
            notes: "Nada",
            attributes: [
                {range : 5}
                ]
            },
            {
            name: "Ted",
            notes: "Nada",
            attributes: [
                {range : 1}
                ]
            }
        ],
        attributes: [ { title : "Reading" } ]
    },
    methods: {
        randomizeUser: function(personIndex) {
            let VueThis = this;

            fetch("https://randomuser.me/api/?inc=name,picture")
                .then(blob=>blob.json())
                .then(function(data) {
                    return VueThis.people[personIndex].name = data.results[0].name.first + " " + data.results[0].name.last;
                    // return console.log("logging results", data.results[0].picture.medium);
                    // return VueThis.people[personIndex].picLarge = data.results[0].picture.medium;
                    // return VueThis.people[personIndex].picSmall = data.results[0].picture.thumbnail;

                    return VueThis.people[personIndex].picSmall = "New Default";
                    //         this.people[newInd]

                    // return name = "Sam";
                });
                // .then(data => name = data);
                // .then(data => name = `${data.results.name.first} ${data.results.name.last}`);


                console.log(name);
                // return randoName = `${results.name.first} ${results.name.last}`
                // return randoPictureLarge = results.picture.medium;
                // return randoPictureThumb = results.picture.thumbnail;
        },
        createPersona: function() {
            if (this.people.length <= 4) {
            const newInd = this.people.length;

            let name = "Default";
            let picLarge = "Default";
            let picSmall = "Default";

            this.people.push({
                name: name,
                notes: "Nada",
                picLarge: picLarge,
                picSmall: picSmall,
                attributes: []
            })
            this.randomizeUser(newInd);
            this.attributes.forEach(entry => this.people[newInd].attributes.push({range: 3}))

        } else { window.alert("Too many Personas. Stahp."); }
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
