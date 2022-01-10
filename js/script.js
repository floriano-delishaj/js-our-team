const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: './img/wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: './img/angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: './img/walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: './img/angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: './img/scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: './img/barbara-ramos-graphic-designer.jpg',
    },
  ];

const container = document.querySelector('.team-container');

for (let i = 0; i < team.length; i++) {

    // creazione del div "team-card"
    const cardElement = document.createElement('div');
    cardElement.className = 'team-card';
    container.append(cardElement);

    //creazione del div "card-image"
    const cardImageBox = document.createElement('div');
    cardImageBox.className = 'card-image';
    cardElement.append(cardImageBox);

    //creazione del tag img da inserire all'interno di "card-image"
    const cardImage = document.createElement('img');
    cardImageBox.append(cardImage);
    cardImage.src = team[i].image;

    // creazione del div "card-text"
    const cardText = document.createElement('div');
    cardText.className = 'card-text';
    cardElement.append(cardText);

    //creazione del tag h3 da inserire all'interno di "card-text"
    const staffName = document.createElement('h3');
    staffName.innerHTML = team[i].name;
    cardText.append(staffName);

    //creazione del tag p da inserire all'interno di "card-text"
    const staffRole = document.createElement('p');
    staffRole.innerHTML = team[i].role;
    cardText.append(staffRole);

}

const button = document.getElementById('addMemberButton');

const newMembers = {
  
};

button.addEventListener('click', function () {

const inputName = document.getElementById('name').value;
const inputRole = document.getElementById('role').value;
const inputImage = document.getElementById('image').value;

newMembers.name = inputName;
newMembers.role = inputRole;
newMembers.image = inputImage;

team.push(newMembers);

})


