# Linear PPL
## A mobile responsive workout app

This app was built with Node, Express, React, and MongoDB.

![App front page](https://image.ibb.co/gO7YNR/Screen_Shot_78.png)
![Exercise page](https://image.ibb.co/g1qbbm/Screen_Shot_79.png)

### The Linear PPL
The Linear PPL is a popular but hard to follow weight lifting routine that covers a strict 6-day cycle with alternating exercise groups (Push, Pull, and Legs) and follows a linear progression. Depending on successful completion of a given exercise at a given weight the weight should be incremented up or down (by how much depends on which exercise). Certain exercises are to be performed a set number of repetitions others however are to be performed AMRAP (as many reps as possible). Due to how specific and strict the workout can be at times finding a suitable app to assist with logging one's personal history can be tricky. This app takes care of the mental gymnastics involved in recalling what exercise group to perform next and whether the previous attempt at a lift was a success (and if not how many times has it been unsuccessfully attempted). A failure of three times results in a 10% decrease in weight to be lifted during the next cycle.

### Enter The Linear PPL App
My goal with this app was to take the guesswork out of this complicated routine. One need only simply follow the exercises of the app and it will automatically increment or decrement the weight. It's impossible to forget which exercise group you are supposed to perform on any given day because the database can recall which day was performed last and deliver the next set of exercises. Current exercise state is preserved in local storage until the workout is logged (an option that becomes available once the workout is complete) which prevents the user from accidentally refreshing their browser and losing their progress for the day.

Another issue some lifters run into is quickly figuring out the math of how much weight should go on either side of a barbell. For barbell exercises on the app a barbell icon will appear and give the user a graphic that displays how much weight should rest on either side of the bar once the weight of the bar itself has been subtracted. Perhaps a small feature, but definitely a time saver.

### Next Steps

* Moving forward I'd like to implement custom timers for specific exercises.
* An insights and analytics page to provide graphs and charts of a user's progression.
* And the ability to further customize workouts.
	In theory, an app like this could be programmed to run any number of complicated workout routines running on a 3, 6, 10, or even 30 day cycle with different exercise groups each day. As it stands anyone who'd like to use this would need to set up their own MongoDB database and program the exercises in. It would be nice to create a more user friendly adaptation at some point.

Test drive the app deployed @ **Heroku**:
[https://pacific-sierra-59887.herokuapp.com](https://pacific-sierra-59887.herokuapp.com/)
