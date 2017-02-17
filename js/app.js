new Vue({
    el: '#personaMain',
    data: {
        header: "Persona Creator",
        people: [ ],
        attributes: [ ]
    },
    methods: {
        randomizeUser: function(personIndex) {
            let VueThis = this;

            fetch("https://randomuser.me/api/?inc=name,picture")
                .then(data => data.json())
                .then(function(myBlob) {
                    VueThis.people[personIndex].name.first = myBlob.results[0].name.first;
                    VueThis.people[personIndex].name.last = myBlob.results[0].name.last;
                    VueThis.people[personIndex].pics = myBlob.results[0].picture.large;
                });
        },
        createPersona: function() {
            if (this.people.length <= 4) {
            const newInd = this.people.length;

            this.people.push({
                name: [],
                notes: "Nada",
                goals: ["Test", "Test Again", "Test A Third"],
                fears: ["Test", "Test Again", "Test A Third"],
                pics: [],
                attributes: []
            })
            this.randomizeUser(newInd);
            this.attributes.forEach(entry => this.people[newInd].attributes.push({range: 3}))
            } else { window.alert("Too many Personas. Stahp."); }
        },
        deletePersona: function(index) {
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
        addItem: function(listItems) {
            if(listItems.length < 5 ) {
              listItems.push(`New`);
          } else { window.alert("Too many!"); }
      },
      removeItem: function(listItems, itemIndex) {
          console.log(event.target.value.length, listItems.length);
              if(event.target.value.length < 1 && listItems.length > 1) {
                listItems.splice(itemIndex, 1);
            }
        }
    },
    created: function () {
        this.createPersona();
        this.addAttr("Custom Attribute 1");
        this.addAttr("Custom Attribute 2");
        this.addAttr("Custom Attribute 3");
      }
});

autosize(document.querySelector('.bio-textarea'));
