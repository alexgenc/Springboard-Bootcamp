Write the following terminal commands to perform the following tasks:

Part I
Q:
1.  make a directory called first
2. change directory to the first folder
3. create a file called person.txt
4. change the name of person.txt to another.txt
5. make a copy of the another.txt file and call it copy.txt
6. remove the copy.txt file
7. make a copy of the first folder and call it second
8. delete the second folder

A:
1.  mkdir first
2.  cd first
3.  touch person.txt
4.  mv person.txt another.txt
5.  cp another.txt copy.txt
6.  rm copy.txt
7.  cp -r first second
8.  rm -rf second


Part II
Q:
1.  What does the man command do? Type in man rm. How do you scroll and get out?
2.  Look at the man page for ls. What does the -l flag do? What does the -a flag do?
3.  How do you jump between words in the terminal?
4.  How do you get to the end of a line in terminal?
5.  How do you move your cursor to the beginning in terminal?
6.  How do you delete a word (without pressing backspace multiple times) in terminal?
7.  What is the difference between a terminal and shell?
8.  What is an absolute path?
9.  What is an relative path?
10. What is a flag? Give three examples of flags you have used.
11. What do the r and f flags do with the rm command?

A:
1.  Man command is short for manual. It gives more information about terminal commands. I’m on Windows and Gitbash doesn’t have the man command so I wasn’t able to try it out myself so I’m not sure about scrolling but I remember Colt saying you exit by hitting Q  (I think).
2.  ls -a lists all files and folders including hidden ones and ls -l lists more information about each file and folder but doesn’t list hidden ones. You can combine both: ls -al
3.  Alt + left/right (For Windows)
4.  Ctrl + e
5.  Ctrl + a
6.  Ctrl + w (For Windows)
7.  Shell runs the commands, terminal is an interface. As an analogy, shell is the engine and terminal is the hood?
8.  Absolute path is the path of a file/folder relative to the root file
9.  Relative path is the path of a file/folder relative to your current directory
10. Flags give additional functionality to the commands. ls -a ls -l cp -r
11. r stands for recursive and f stands for force. Combined together, they force the recursive removal of a directory.
