Q:
1.  Create a folder called learn_git_again.
2.  cd into the learn_git_again folder.
3.  Create a file called third.txt.
4.  Initialize an empty git repository.
5.  Add third.txt to the staging area.
6.  Commit with the message “adding third.txt”.
7.  Check out your commit with git log.
8.  Create another file called fourth.txt.
9.  Add fourth.txt to the staging area.
10. Commit with the message “adding fourth.txt”
11. Remove the third.txt file
12. Add this change to the staging area
13. Commit with the message “removing third.txt”
14. Check out your commits using git log
15. Change your global setting to core.pager=cat - you can read more about that [here](https://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration).
16. Write the command to list all of the global configurations for git on your machine. You can type git config --global to find out how to do this

A:
1.  mkdir learn_git_again
2.  cd learn_git_again
3.  Touch third.txt
4.  Git init
5.  Git add third.txt
6.  Git commit -m “adding third.txt”
7.  Git log
8.  Touch fourth.txt
9.  Git add fourth.txt
10. Git commit -m “adding fourth.txt”
11. Rm third.txt
12. Git add third.txt
13. Git commit -m “removing third.txt”
14. Git log
15. git config --global core.pager “cat”
16. git config --global --list
