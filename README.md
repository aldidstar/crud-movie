# crud-movie

## GET STARTED

- run "npm i"
- create database with name "crud-movie"
- run sequelize commands "npx sequelize-cli db:migrate" to setup database
- copy file .env.example, paste and rename it to .env
- replace JWT_SECRET to actual secret key
- run "npm run dev"

### Add New Movie (POST) /movies

- body

```
{   "title" : "Pengabdi Setan 3 Comunion",
    "description" : "dalam",
    "rating" : 7.5,
    "image" : ""
}
```

- response

```
{
    "id": 1,
    "title": "Pengabdi Setan 3 Comunion",
    "description": "dalam",
    "rating": 7.5,
    "image": "",
    "updatedAt": "2023-10-10T12:42:15.824Z",
    "createdAt": "2023-10-10T12:42:15.824Z"
}
```

### List of Movie (GET) /movies

- response

```
[
    {
        "id": 1,
        "title": "Pengabdi Setan 3 Comunion",
        "description": "dalam",
        "rating": 7.5,
        "image": "",
        "createdAt": "2023-10-10T12:42:15.824Z",
        "updatedAt": "2023-10-10T12:42:15.824Z"
    },
    {
        "id": 2,
        "title": "Pengabdi Setan 2 Comunion",
        "description": "dalam",
        "rating": 7.5,
        "image": "",
        "createdAt": "2023-10-10T12:45:03.803Z",
        "updatedAt": "2023-10-10T12:45:03.803Z"
    }
]
```

### Detail of Movie (GET) /movie/:id

- response

```
{
    "id": 1,
    "title": "Pengabdi Setan 3 Comunion",
    "description": "dalam",
    "rating": 7.5,
    "image": "",
    "createdAt": "2023-10-10T12:42:15.824Z",
    "updatedAt": "2023-10-10T12:42:15.824Z"
}
```

### Update Movie (PATCH) /movies

- body

```
{   "title" : "Pengabdi Setan 1 Comunion",
    "description" : "dalam",
    "rating" : 7.5,
    "image" : ""
}
```

- response

```
{
    "id": 2,
    "title": "Pengabdi Setan 1 Comunion",
    "description": "dalam",
    "rating": 7.5,
    "image": "",
    "createdAt": "2023-10-10T12:45:03.803Z",
    "updatedAt": "2023-10-10T12:48:40.345Z"
}
```

### Delete Movie (DELETE) /movie/:id
