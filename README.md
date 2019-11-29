# github_api
<br/>
This is my github API project . My inital plan (which I have left at the bottom of this file) was to try and implement a graph to display the 10exer contributors to a repository.

<br />
Without much planning I blasted ahead in an attempt to pull the data from GitHub and then display it. It being my first time working with html, css, javascript, api's and libraries I really had no idea of the massive undertaking this project and intial concept would be.

I made fast progress and managed to create API calls which would return the data of commits, contributors, issues and paginate through pages and return the data in a json package.

I then fell upon the problem of paginating through hundreds of pages of data to obtain what I wanted: the top contributors to a repo. I couldn't figure it out. I investigated so many libraries like ocktokit and query.js but I really couldn't figure out how they worked and it was too late to try and learn another language like ruby and try use libraries with that. So I attempted to adapt and overcome. I decided to switch my focus to developing a web page that would search a repo/user and return data related to that user and graph info like commit history, activity log and favourite languages. I was able to query the API and get data for users and repos but when it came to trying to use a d3 graph to visualize this data, I was unable to figure it out fully and ran out of time.
<br />
Below is a video demonstration of how the webpage works and a read me on how to set it up. 

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/LixstKccpN0/0.jpg)](https://www.youtube.com/watch?v=LixstKccpN0)

https://www.youtube.com/watch?v=LixstKccpN0

To launch the app yourself just change your directory to
cd../github_api/reactapp/graph-app
npm start

<br />
# Final Thoughts
It being my first time using most of these languages, interacting with an API and libraries I found it very difficult but I am proud of what I have achieved and I have learned a great deal. Stephen told us to push ourselves and that reaching for a more intriguing project and not being able to finish it was better than doing an easy project and I feel like I have tried to do this.
































Initial Plan for SWENG Project
I want to see if I can build a website that takes a repo and find’s out who are the
10exer’s of this repo. I want to then shortlist this group of 10exers to who is the
10exer of the 10exers .ie the 1% of the 1%
Behind the scenes my measurement of a 10 exer are the programmers with;
1. Most Commits
2. Most Issues
3. Most Pull Requests
I will graph the top 10 of each of these fields into graphs
I will then try to find if there is anyone that is present in all of these fields
I will then try graph them
This general idea may change in the future depending on how possible it is to do
