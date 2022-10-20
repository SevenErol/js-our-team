
const container = document.querySelector(".container");

const row = document.querySelector(".row");

const imagesList = [
    "./assets/img/wayne-barnett-founder-ceo.jpg",
    "./assets/img/angela-caroll-chief-editor.jpg",
    "./assets/img/walter-gordon-office-manager.jpg",
    "./assets/img/angela-lopez-social-media-manager.jpg",
    "./assets/img/scott-estrada-developer.jpg",
    "./assets/img/barbara-ramos-graphic-designer.jpg"
];


const team = [

    {
        Name: "Wayne Barnett",

        Role: "Founder CEO",

        image: ""
    },

    {
        Name: "Angela Caroll",

        Role: "Chief Editor",

        image: ""
    },

    {
        Name: "Walter Gordon",

        Role: "Office Manager",

        image: ""
    },

    {
        Name: "Angela Lopez",

        Role: "Social Media Manager",

        image: ""
    },

    {
        Name: "Scott Estrada",

        Role: "Developer",

        image: ""
    },

    {
        Name: "Barbara Ramos",

        Role: "Graphic Designer",

        image: ""
    }
];

for (let i = 0; i < imagesList.length; i++) {

    team[i].image = imagesList[i];

}



for (let i = 0; i < team.length; i++) {

    const profile = team[i];

    const column = document.createElement("div");

    column.classList.add("col-4");

    const card = document.createElement("div");

    card.classList.add("card");

    card.classList.add("mb-5");

    const cardBody = document.createElement("div");

    cardBody.classList.add("card-body");

    const memberImage = document.createElement("img");

    memberImage.classList.add("img-fluid");

    const memberName = document.createElement("h5");

    memberName.classList.add("text-center");

    const memberRole = document.createElement("p");

    memberRole.classList.add("text-center");

    row.appendChild(column);

    column.appendChild(card);

    card.appendChild(memberImage);

    card.appendChild(cardBody);

    cardBody.appendChild(memberName);

    cardBody.appendChild(memberRole);

    for (const key in profile) {

        switch (key) {
            case "Name":

                memberName.innerHTML = profile[key];

                break;

            case "Role":

                memberRole.innerHTML = profile[key];

                break;

            case "image":

                memberImage.src = profile[key];

                break;

            default:
                break;
        }

    }
}
