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

## heroku open 
### or just go to the link your where given when you made the project



# to see logs
## heroku logs --tail