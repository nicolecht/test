# django-pokemon-react

## Steps to run this program:
1. Git clone
2. cd django-pokemon-react
3. Set up virtual enviroment 
```
pipenv shell
```
4. Install dependencies
```
 pip install django djangorestframework django-cors-headers djangorestframework-simplejwt djoser
```
5. Run Server
```
python manage.py runserver
```
6. Open another new terminal
```
cd django-pokemon-react/poke_project_frontend
```
7. Run React
```
npm start
```

## Requirements I struggled with and have not complete
1. Setting up User Authentication
2. Setting up User Database
3. Core Functionality - automatically capture a pokemon if user guess the correct number within 3 tries
4. Core Functionality - automatically refresh and generate new pokemon if user cannot guess the correct number within 3 tries
5. Updating unowned pokemon after success capture
6. Setting up the APIs endpoints correctly (User database not set up)
7. Deployment

## Solved Requirements
1. Accessible "catch pokemon" tab
2. Generate a random pokemon for capture
3. Implementing a simple "guess the number" game but missed out on the maximum 3 tries
4. Each user may own any number of pokemons
5. Each pokemon has a random level between 1-100 upon capture

## New knowledge gained from this project
1. React basics
2. Django basics
3. Python
4. SQLite
5. APIs and using Axios

## Improvements needed
1. More practice on React, Django, and Python
2. Study more about how databases and apis work
3. Research more about AWS and deployment
4. Resolve remaining requirements
