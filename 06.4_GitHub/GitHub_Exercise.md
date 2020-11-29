Part I
Let’s start by taking a bit of time to practice the git workflow below. It is so valuable to just practice this workflow a couple times, since you will most likely doing it professionally as well as in your individual projects and open source contributions. Here are some things to do.

1. Create a local repository and add and commit some files
2. Create a remote repository and push your code from the local repo to the remote
3. Create a local branch and add and commit some files
4. Push that local branch to GitHub to create a remote branch

A:
mkdir test
cd test
touch test.html app.js style.css
git status
git init
git status
git add .
git commit -m “initial test files”
git remote add origin https://github.com/alexgenc/test.git
git push -u origin master
mv test.html index.html
git status
git add .
git commit -m “changed name to index.html”
git status
git push


Part II - Put your memory game on GitHub pages
Using GitHub pages, deploy your memory game from the previous unit so that you can share them with anyone!