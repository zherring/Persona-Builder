Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
}

new Vue({
    el: '#personaMain',
    data: {
        header: "Persona Creator",
        people: [ ],
        notes: "Biography",
        ol1: "Goals",
        ol2: "Fears",
        attributes: [ ],
        titlesAuto: ["The Specialist", "The Optimizer", "The Intern", "The Community Organizer"],
        starterOl1: ["Easy Prioritization","Strategic thinking","Listening","Coaching","Financial acumen","Cross-functional knowledge and perspective"],
        starterOl2: ["appearing selfish","This is as good as it’ll get","I’m settling","never getting promoted","being undervalued","too late to market","too early to market","getting overwhelmed"],
    },
    methods: {
        randomizeUser: function(personIndex) {
            let VueThis = this;

            fetch("https://randomuser.me/api/?inc=name,picture")
                .then(data => data.json())
                .then(function(myBlob) {
                    VueThis.people[personIndex].name = `${myBlob.results[0].name.first} ${myBlob.results[0].name.last}`;
                    VueThis.people[personIndex].pics = myBlob.results[0].picture.large;
                });
        },
        createPersona: function() {
            if (this.people.length <= 4) {
            const newInd = this.people.length;

            this.people.push({
                name: "",
                title: this.titlesAuto.randomElement(),
                notes: "Nada",
                ol1: [this.starterOl1.randomElement()],
                ol2: [this.starterOl2.randomElement()],
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
        },
        toggleActiveArea: function(area) {

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
