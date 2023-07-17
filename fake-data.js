 const UserList = [
    {
        id: 1,
        name: "Manuel",
        username: "manu",
        age: 20,
        nationality: "DOMINICANO",
        friends: [
          {
            id: 2,
            name: "Saul",
            username: "Pinales",
            age: 20,
            nationality: "PERUANO",
          },
          {
            id: 5,
            name: "Jose",
            username: "JoseElFuerte",
            age: 5,
            nationality: "CHILENO",
          },
        ],
      },
      {
        id: 2,
        name: "Saul",
        username: "Pinales",
        age: 20,
        nationality: "PERUANO",
      },
      {
        id: 3,
        name: "Sarah",
        username: "LaSarah",
        age: 25,
        nationality: "VENEZOLANO",
        friends: [
          {
            id: 2,
            name: "Saul",
            username: "Pinales",
            age: 20,
            nationality: "PERUANO",
          },
        ],
      },
      {
        id: 4,
        name: "JuanGuarnizo",
        username: "Granizo",
        age: 30,
        nationality: "MEXICANO",
      },
      {
        id: 5,
        name: "Jose",
        username: "JoseElFuerte",
        age: 5,
        nationality: "CHILENO",
      },
    ];

    const MovieList = [
      {
        id: 1,
        name: "SPIDERMAN: ACROSS THE SPIDERVERSE",
        yearOfPublication: 2023,
        DisponibleCine: true,
      },
      {
        id: 2,
        name: "JHON WICK 4",
        yearOfPublication: 2023,
        DisponibleCine: false,
      },
      {
        id: 3,
        name: "AVENGERS",
        yearOfPublication: 2012,
        DisponibleCine: false,
      },
      {
        id: 4,
        name: "BLUE BEETLE",
        yearOfPublication: 2023,
        DisponibleCine: false,
      },
    ];
    
    module.exports = {UserList, MovieList}
   