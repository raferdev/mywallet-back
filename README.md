<p align="center">
 <img width=200px height=200px src="./readme.png" alt="Project logo">
</p>

<h3 align="center">Mywallet API</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-closed-red.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/raferdev/mywallet-back.svg)](https://github.com//raferdev/mywallet-back/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/raferdev/mywallet-back/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> 
This is a backend part of FullStack project. The frontend you can see <a href="https://github.com/raferdev/mywallet-front">here</a>. This project was built using NodeJS, and simulate one wallet service, which user can register payments, transactions, and see your account history.
</p>

---

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Built Using](#built_using)
- [Authors](#authors)

---

## 🧐 About <a name = "about"></a>

This project was built on one week and encrease my consepts about javascript enviroment, using ReactJS, and NodeJS to create one web app completly. This backend simulate one web API that user can create one account and register account transactions.You can clone and run the project on your machine, its better with frontend <a href="https://github.com/raferdev/mywallet-back">(link)</a>.

---

## 🏁 Getting Started <a name = "getting_started"></a>

You can clone the project and start on your local host like below.

### Prerequisites
You need install ***GIT*** if you don't already have, to clone project,.

<a href="https://git-scm.com/downloads">Click here</a> or Acess: 

```
https://git-scm.com/downloads
```


You need install ***Docker*** on your machine if you don't already have.

<a href="https://docs.docker.com/get-docker">Click here</a> or Acess: 
```
https://docs.docker.com/get-docker/
```
And use the step-by-step doc to download and install on your specific system.

### Installing

1 - Clone on your local system

 ```
 git clone https://github.com/raferdev/batepapo-uol-api
 ```

2 - Go to project path 

```
cd batepapo-uol-api
```

3 - Create env file

You can rename the ".env.exemple" file to ".env", just removing ".exemple" and save, or follow this steps to create new one:

- Open a text editor or other editor do you prefeer, create this variables like below and save file with name '.env'.


 ```
MONGO_URL=mongodb://mongodb:27017/
DATA_BASE=mywallet
PORT=5000
```
You can change the values of variables if you want or need.

### Start

Use on terminal:
```
npm run start
```
*The attached console will show "Hello i'm running on port = (PORT)" and after some mongodb logs.*

---
## 🎈 Usage <a name="usage"></a>

Now you will need one tool to make requests and interact whith your API. Some famous API Clients are <a href="https://insomnia.rest/download">Insomnia</a>, <a href="https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client">Thunder CLient</a> to VSCode users, <a href="https://www.postman.com/">Postman</a> and many others, like browsers plugins. If you dont use to complex jobs any of these will help you.

- **GUIDE** : 

    **HTTP METHOD** - */route* -  Little description of it behaviour.

  ```
    Received or sended object schema.
    Ex: {
    "text":"Lorem ipsum..."
    }
  ```
  *Final thoughts about API behaviour*

  ---
  Exemple:

  **GET** - */health* - API return status 200 with object below.
  ```
  {
    "message":"I'm Alive!"
  }
  ```
  Simple way to verify if API is up. *Maybe is not implemented on this project*
  
  ---
  **Usage** - In this case you will make a GET request on http://localhost:5000/health. And will receive the JSON object "message: I'm Alive!" on the console, terminal or display, depending on the case.
  
  ---

**LET'S GO** - API description.

**POST** - */sign-in* - Send user credentials to API, email must be valid format and password need be a string with 3 - 20 length characters.

```
  {
  "email":"",
  "password":""
  }
```
If are valid and registered credentials user can login and receive one token like below.

*response:*
```
{
  "token": "afbf3c09-bc88-424d-b3e2-ab042733a244"
}
```

**POST** - */sign-up* - Send user credentials to API to register on MongoDB. Email must be valid format, password and name need be a string with 3 - 20 length characters.

```
  {
  "name":""
  "email":"",
  "password":""
  }
```
**GET** - */home/logs* - Send message to API redirect for one user or all chat.

header:
```
{
  "authorization":"Bearer TOKEN"
}
```
 body:
```
{}
```
*response:*

```
{
  "_id": "637293ec0b25527b0d34716f",
  "email": "exemple@exemple.com",
  "storage": 97889,
  "hist": [
    {
      "id": 1668453511312,
      "date": "14/11 19:18",
      "operation": "in",
      "type": "New Job Freelancer",
      "value": "100000"
    },
    {
      "id": 1668453593732,
      "date": "14/11 19:19",
      "operation": "out",
      "type": "Java Course",
      "value": "1099"
    }...
  ]
}
```


**POST** - */new-payment* - User can declare new payment on API

header:

```
{
  "authorization":"Bearer TOKEN"
}
```
body:
```
{
  "type":"",                 
  "value": (integer number)
}
```
*Type* is the description of transaction

*response:*

```
Redirect to /home
```

**POST** - */new-deposit* -  User can declare new deposit on API
```
{
  "authorization":"Bearer TOKEN"
}
```
body:
```
{
  "type":"",                 
  "value": (integer number)
}
```
*Type* is the description of transaction

*response:*

```
Redirect to /home
```

**GET** - */logout* - User can close his session.

header:
```
{
  "authorization":"Bearer TOKEN"
}
```
body:
```
{
}
```
*response:*

```
Redirect to /sign-in
```



---

## ⛏️ Built Using <a name = "built_using"></a>

- [NodeJS](https://nodejs.org/en/docs/) - Backend Language
- [Express](https://expressjs.com/pt-br/) - Node Framework
- [Docker](https://www.docker.com/) - Container Technology


---
## ✍️ Authors <a name = "authors"></a>

- [@raferdev](https://github.com/raferdev)
