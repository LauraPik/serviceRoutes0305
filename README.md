Endpoints

Register

    Endpoint: /api/v1/users/register
    Method: POST

{
    "name": "Jonas",
    "email": "jonas@gmail.com",
    "password": "123456789",
    "passwordConfirm": "123456789"
}

Login

    Endpoint: /api/v1/users/login
    Method: POST

{
    "email": "jonas@gmail.com",
    "password": "123456789"
}

Logout(neveikia)

    Endpoint: /api/v1/users/logout
    Method: GET AUTH

Create a service

    Endpoint: http://localhost:8882/api/v1/services
    Method: POST AUTH

{
    "name": "Servisas123",
    "address": "Vieversiu g. 23, Kaunas",
    "manager": "Laima Servisas",         
    "foreman": "id"
}


Get All services

    Endpoint: http://localhost:8882/api/v1/services
    Method: GET
    Description: available filtering by fields and url parameters: sort, fields, page

Get service

    Endpoint:  http://localhost:8882/api/v1/services/:id
    Method: GET


Delete a service
    Endpoint:  http://localhost:8882/api/v1/services/:id
    Method: delete



Service Workers:

Create a foreman

    Endpoint: http://localhost:8882/api/v1/foreman
    Method: POST AUTH

{
    "firstname":"Algis",
    "surname":"Algutis",
    "specialization":"mechanic",
    "photo":"https://lh3.googleusercontent.com/proxy/3cHt48HkL8SFYon-NF2X4IO5eo5zHC…",
    "city":"Kaunas"
}


Update a foreman

    Endpoint: http://localhost:8882/api/v1/foreman/:id
    Method: PATCH
    Description: available filtering by fields and url parameters: sort, fields, page



Delete a service
    Endpoint:   http://localhost:8882/api/v1/foreman/:id
    Method: delete