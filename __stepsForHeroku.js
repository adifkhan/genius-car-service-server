/**
 * ------------------------------
 * only one time for a single pc
 * ------------------------------
 * 1. create heroku account
 * 2. verify email
 * 3. install heroku cli
 * 4. heroku login
 * ------------------------------
 * one time for each project
 * ------------------------------
 * 1. heroku create 
 * 2. push latest project to  github (for every changes)
 * 3. git push heroku main (for every changes)
 * 4. project>settings>reveal config vars
 * 5. copy paste config vars from .env file
 * 6. whitelist all ip address to access mongodb
 * --------------------------------
 * connect server with client & deploy
 * --------------------------------
 * 1. replace localhost5000 with  heroku link
 * 2. npm run build (client site)
 * 3. firebase deploy
 */