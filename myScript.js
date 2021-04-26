/*Snack 1:
  Creare un array di oggetti:
  Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.*/

  var bikes = [
  {nome:"Graziella", weight:13},
  {nome:"Bhoss", weight:11},
  {nome:"Trek", weight:9},
  {nome:"Kona", weight:10},
  ];

  /*Stampare a schermo la bici con peso minore utilizzando destructuring e template literal*/

  var lighter

  for(var i = 0; i < bikes.length; i++){  //confronto il peso delle bici

      if((bikes[0].weight < bikes[1].weight) && (bikes[0].weight < bikes[2].weight) && (bikes[0].weight < bikes[3].weight)){
        lighter = bikes[0];

      } else if ((bikes[1].weight < bikes[0].weight) && (bikes[1].weight < bikes[2].weight) && (bikes[1].weight < bikes[3].weight)){
        lighter = bikes[1];

      }else if ((bikes[2].weight < bikes[1].weight) && (bikes[2].weight < bikes[0].weight) && (bikes[2].weight < bikes[3].weight)){
        lighter = bikes[2];

      }else if ((bikes[3].weight < bikes[1].weight) && (bikes[3].weight < bikes[2].weight) && (bikes[3].weight < bikes[0].weight)){
        lighter = bikes[3];
      }
  }

  var {nome, weight} = lighter; //nome e peso della bici più leggera
  console.log(`La bicicletta col peso minore è ${nome} con un peso di ${weight} kg`)


/*Snack2
  Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
  Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.*/

  var teams = [
    {aName:"Inter", points:0, fouls:0},
    {aName:"Milan", points:0, fouls:0},
    {aName:"Juventus", points:0, fouls:0},
    {aName:"Atalanta", points:0, fouls:0},
  ];
  
  /*Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.*/
  for(let i = 0; i < teams.length; i++){
    teams[i].points = Math.floor(Math.random() * 100) + 10;
    teams[i].fouls = Math.floor(Math.random() * 400) + 200
  }
console.log(teams)

  /*Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/
  var newArray =[];
    for(let i = 0; i < teams.length; i++){
    var {points, fouls} = teams[i];
    newArray.push(points, fouls);
    }
  console.log(newArray);











