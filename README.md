# Networking

Equipo #2

Integrantes:
Francisco Paulino 1106084
Víctor Santos 1105977
José Leonardo Cruz 1106529
Saul Pinales- 1104770
Manuel Sánchez - 1104904


Querys: 

query GetAllUsers{ users { id name age nationality friends { name age } } }

query GetUser($userId: ID!) { user(id: $userId) { name age nationality friends { name } } }

query GetAllMovies{ movies { id name yearOfPublication DisponibleCine } }

query GetMovie($name: String!) { movie(name: $name) { name yearOfPublication DisponibleCine } }

Mutaciones

mutation CrearUser($input: CrearUserInput!) { crearUsuario(input: $input) { id name age } }

{ "crearUsuarioInput2": { "name": "Pedro", "age": 20, "username": "Alcacer" } }

mutation ActualizarName($updateUsernameInput: UpdateUsernameInput!){ UpdateUsername(input: $updateUsernameInput) { id username } }

{ "updateUsernameInput": { "id": "4", "newUsername": "Alejandro" } }

mutation Borrar($deleteUserId: ID!) { deleteUser(id: $deleteUserId) { id } }

{ "deleteUserId": "6" }
