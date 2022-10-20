
const container = document.querySelector(".container");

const row = document.querySelector(".row");

const team = [

    {
        name: "Wayne Barnett",

        role: "Founder CEO",

        image: "wayne-barnett-founder-ceo.jpg"
    },

    {
        name: "Angela Caroll",

        role: "Chief Editor",

        image: "angela-caroll-chief-editor.jpg"
    },

    {
        name: "Walter Gordon",

        role: "Office Manager",

        image: "walter-gordon-office-manager.jpg"
    },

    {
        name: "Angela Lopez",

        role: "Social Media Manager",

        image: "angela-lopez-social-media-manager.jpg"
    },

    {
        name: "Scott Estrada",

        role: "Developer",

        image: "scott-estrada-developer.jpg"
    },

    {
        name: "Barbara Ramos",

        role: "Graphic Designer",

        image: "barbara-ramos-graphic-designer.jpg"
    }
];

// function for generating URL 

function generateURL(objectList) {

    for (let i = 0; i < objectList.length; i++) {

        let stringImage = objectList[i].image;

        let imageURL = "./assets/img/" + stringImage;

        objectList[i].image = imageURL
    }
    
}

generateURL(team);

for (let i = 0; i < team.length; i++) {

    const profile = team[i];

    // created column 

    const column = document.createElement("div");

    column.classList.add("col-4");

    // created card

    const card = document.createElement("div");

    card.classList.add("card");

    card.classList.add("mb-5");

    // created card body

    const cardBody = document.createElement("div");

    cardBody.classList.add("card-body");

    // created image fluid

    const memberImage = document.createElement("img");

    memberImage.classList.add("img-fluid");

    // created title for member name

    const memberName = document.createElement("h5");

    memberName.classList.add("text-center");

    // created paragraph for member role

    const memberRole = document.createElement("p");

    memberRole.classList.add("text-center");

    // append all elements nested

    row.appendChild(column);

    column.appendChild(card);

    card.appendChild(memberImage);

    card.appendChild(cardBody);

    cardBody.appendChild(memberName);

    cardBody.appendChild(memberRole);

    // dynamically added name role and image

    memberName.innerHTML = profile['name'];

    memberRole.innerHTML = profile["role"];

    memberImage.src = profile["image"];

}
