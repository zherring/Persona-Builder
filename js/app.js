new Vue({
    el: '#personaMain',
    data: {
        header: "Persona Creator",
        people: [ ],
        attributes: [ ]
    },
    methods: {
        randomizeUser: function(personIndex) {
            console.log("fired");
            let VueThis = this;
            var holder;

            fetch("https://randomuser.me/api/?inc=name,picture")
                .then(data => data.json())
                .then(function(myBlob) {
                    VueThis.people[personIndex].name = `${myBlob.results[0].name.first} ${myBlob.results[0].name.last}`;
                    VueThis.people[personIndex].pics = myBlob.results[0].picture.large  ;
                });
        },
        createPersona: function() {
            if (this.people.length <= 4) {
            const newInd = this.people.length;

            let name = " ";
            let picLarge = " ";
            let picSmall = " ";

            this.people.push({
                name: name,
                notes: "Nada",
                pics: [],
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
        addAttr: function(attrName = "Default Attribute") {
            this.attributes.push({title : attrName });
            this.people.forEach( person => person.attributes.push({ range : 3}));
        },
        removeAttr: function(index) {
                this.attributes.splice(index, 1);
                this.people.forEach( person => person.attributes.splice(index, 1));
        },
    },
    created: function () {
        this.createPersona();
        this.addAttr("Custom Attribute 1");
        this.addAttr("Custom Attribute 2");
        this.addAttr("Custom Attribute 3");
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
