
const container = document.querySelector(".container");

const row = document.querySelector(".row");

const team = [

    {
        name: "Wayne Barnett",

        role: "Founder CEO",

        image: "./assets/img/wayne-barnett-founder-ceo.jpg"
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
            case "name":

                memberName.innerHTML = profile[key];

                break;

            case "role":

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
