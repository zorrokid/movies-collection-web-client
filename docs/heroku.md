
$ docker build -t registry.heroku.com/zorrokid-movie-client/web .

$ heroku container:login

$ docker push registry.heroku.com/zorrokid-movie-client/web

$ heroku container:release -a zorrokid-movie-api web