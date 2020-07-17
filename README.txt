Hi Owen.

My apologies for the delay in getting this across to you. I spent the last week or so in Birmingham staying with my 
brother but it proved impossible for me to work there for several reasons so yesterday I returned home to complete your
task. I'm now staying here so I can work more reliably moving forward.

My main previous webb-app building experience involved Flash Player, Netbeans, Tomcat and Postgresql. While I enjoyed working 
with them I didn’t particularly want to buy a Flash Player license, especially as I am always keen to learn something new, 
so I thought I might have a go at the task using your technology. I learnt how to get Rails going on my PC and dived into the task 
front-end first with React.

What I have here for you is most of an MVP paradigm for the user interface written in React with the proxy partially 
ready to be hooked up to a back end. I was hoping to get the backend working as well but I only got React configured 
correctly yesterday and I decided to instead focus on what I hope is a good coding paradigm. If I have the time next week, 
I will probably look into tying in the back end just so I have the experience, so if that’s something you’d be interested 
in seeing let me know.

-----------------------------------------------------------------------------------------------------------------------------------

CONFIG

I am hoping it will work with your set-up as they should be similar ("rails s" on CMD followed by localhost:3000). The technologies I used were Yarn, Webpacker, 
Rails, React and Postgres.

I did have to create a PostgreSQL database at one point to get it working even though I never used it. I set all the 
database config as the same for development, test and production:

database: Bambank_test
username: postgres
password: postgresql


-----------------------------------------------------------------------------------------------------------------------------------


THING TO LOOK OUT FOR

-If, in the transfer form, you type in the same “username” as you already have, or an “amount” that isn’t a number, then 
it demonstrates an error messages.

-If you follow through the chain of events that leads from the log in button through to the forms changing I think 
this demonstrates a good coding practice, with the password and username intended to be sent to the backend through the proxy 
to be checked against a hash there for security.

-----------------------------------------------------------------------------------------------------------------------------------

ASSUMPTIONS AND REFLECTIONS

-I would have put the logic to decide when the bank forms are visible in the app.jsx rather than the BankModel.jsx, that 
was just because I was running out of time. I think it works fine for this simple task but I wrote the app as if it 
would accomplish more in the future so I think having that logic in a Model is quite limiting.

-No logging is bad; I do usually stick to good logging practices. I usually write more comments as well.

-I think there are some inconsistencies between when I use “” and ‘’ for strings I have noted this for next time.

-I quite like React! The state/props is a neat way of writing an object oriented program.

-I know I still have a lot to learn though, I would appreciate feedback, especially if there are big design flaws 
I have missed.

Thanks for your time.

William



 


