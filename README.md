# Heroku Notes? (I'm not so sure what I'll put here)

# ! make sure you have a 'npm start' command...

# deploying app to heroku

## heroku create (name?)
### output : 
``` 
›   Warning: heroku update available from 7.21.0 to 7.25.0
Creating app... done, ⬢ young-refuge-24539
https://young-refuge-24539.herokuapp.com/ | https://git.heroku.com/young-refuge-24539.git
```

## git push heroku master
### just another remote in your git

## heroku ps:scale web=1
### output :
```
›   Warning: heroku update available from 7.21.0 to 7.25.0
Scaling dynos... done, now running web at 1:Free
```

## heroku open (path?)
### or just go to the link your where given when you made the project



# to see logs
## heroku logs --tail

# run heroku app locally
```
heroku local web
```
## http://localhost:5000 is where the app will run

# Add Ons!
## tl;dr but here's the [link](https://devcenter.heroku.com/articles/getting-started-with-nodejs#provision-add-ons)

# Remote Console in Dyno
```
heroku run bash
```
## Don’t forget to type exit to exit the shell and terminate the dyno.
## BTW this will create a new dyno, you can't access the one your app is running on

# Config Variables
## See all config var
```
heroku config
```
## Set/create config var
```
heroku config:set SHANE=may
```
## Get config var
```
heroku config:get SHANE
```
## Delete config var
```
heroku config:unset SHANE
```