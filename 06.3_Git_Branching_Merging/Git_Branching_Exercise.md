Part I
Q:
1.  What git command creates a branch?
2.  What is the difference between a fast-forward and recursive merge?
3.  What git command changes to another branch?
4.  What git command deletes a branch?
5.  How do merge conflicts happen?

A:
1.  git branch [name] - creates a new branch called [name]  OR 
    git checkout -b [name] - creates a new branch called [name] and switches to that branch.
2.  Fast forward merge is when git can tell when each commit happened and put them in chronological order. In order for this to happen, the master branch needs to not have any new commits while new commits are being added in the secondary branch. If different commits happen at different times on both the master branch and the secondary branch, git will use recursive merge because commits are not chronological. 
3.  git checkout 
4.  git branch -d [name] if the branch has been merged OR
    git branch -D [name] if the branch hasn’t been merged.

5.  Merge conflicts happen if there are changes to the same file or folder on different branches. Git won’t be able to merge them because git doesn’t know which code you actually want.


Part II
1.  Practice with fast forward and recursive merges! Make a branch and add and commit onto it and merge it back into master.

2.  Try to create your own merge conflict by modifying the same file on two separate commits on two separate branches.