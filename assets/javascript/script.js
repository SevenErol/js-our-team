
const container = document.querySelector(".container");

const imagesList = [
    "./assets/img/wayne-barnett-founder.ceo.jpg",
    "./assets/img/angela-caroll-chief-editor.jpg",
    "./assets/img/walter-gordon-office-manager.jpg",
    "./assets/img/angela-lopez-social-media-manager.jpg",
    "./assets/img/scott-estrada-developer.jpg",
    "./assets/img/barbara-ramos-graphic-designer.jpg"
];

const team = [

    {
        name: "Wayne Barnett",

        role: "Founder CEO",

        image: "./assets/img/wayne-barnett-founder.ceo.jpg"
    },

    {
        name: "Angela Caroll",

        role: "Chief Editor",

        image: "./assets/img/angela-caroll-chief-editor.jpg"  
    },

    {
        name: "Walter Gordon",

        role: "Office Manager",

        image: "./assets/img/walter-gordon-office-manager.jpg"
    },

    {
        name: "Angela Lopez",

        role: "Social Media Manager",

        image: "./assets/img/angela-lopez-social-media-manager.jpg"
    },

    {
        name: "Scott Estrada",

        role: "Developer",

        image: "./assets/img/scott-estrada-developer.jpg"
    },

    {
        name: "Barbara Ramos",

        role: "Graphic Designer",

        image: "./assets/img/barbara-ramos-graphic-designer.jpg"
    }
];

for (let i = 0; i < team.length; i++) {

    const profile = team[i];

   for (const key in profile) {

    const myDiv = document.createElement("div");

    const singleInfo = key + ":" + profile[key];

    myDiv.innerHTML = singleInfo;

    container.appendChild(myDiv);
    
   }
}