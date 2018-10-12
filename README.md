# _DVC Tutors Dashboard:_
<!-- [DEMO](https://trex-rbp.herokuapp.com/) -->
<!-- ### Deployed on Heroku [here](https://itiner-ez.herokuapp.com/). -->
<!-- <img src="http://imgur.com/dTXjfrU.png" /> -->


## DESCRIPTION:
Student Project: Full-Stack REACT | Mongo | Express | Node
  * Student Tutors can login via O-Auth and document their tutoring dates and times on a calendar.
  * School Admins can login and see all tutors times in one place.

## Setup:
  - `npm i` to install dependencies
  - touch a ".env" file and add 3 variables
    * BASE_URL=http://localhost:3000/
    * DEPLOY_URL=(your deployed url)
    * NODE_ENV=development

    WARNING: You will not successfully spin up the app without doing this step.
  - `npm start` for development server
    * Once the "webpack built xxxxxx..." message appears (May take a few moments) the app will start.
  - `npm run build` for production server
    * This command will automatically change the NODE_ENV env variable to "production" and set off a chain of events for creating a bundle for production.


  NOTE: I Highly recommend running `npm update --save` to update package json before running `npm start` or `npm build`.

## Updates:
* October 12th 2018:
  - Project Genisis

<!-- ## ScreenShots:
* Terminal
  - <img src="http://i.imgur.com/RjJ7yfA.png" /> -->
