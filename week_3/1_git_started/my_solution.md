## Release 2: Basic Git Commands
Define the following commands and describe how they work/what they do.  


#### add
<!-- Your defnition here -->
add tells Git the file you are currently working on

#### branch
<!-- Your defnition here -->
create a new branch off of a repo

#### checkout
<!-- Your defnition here -->
navigate to a new repository to look at it

#### clone
<!-- Your defnition here -->
clones a local git repository from a remote source

#### commit
<!-- Your defnition here -->
commits changes to a repo--creates a saved version that you can revert back to in the future, if needed

#### fetch
<!-- Your defnition here -->
imports commits from another repository into your local repo

#### log
<!-- Your defnition here -->
lists the commands used on a branch

#### merge
<!-- Your defnition here -->
push changes from your local documents onto the master branch

#### pull
<!-- Your defnition here -->
pulls down onto your local repository the most updated master branch

#### push
<!-- Your defnition here -->
pushes changes from your local repository so they appear on GitHub

#### reset
<!-- Your defnition here -->
discards any changes you have and points the head to the current branch

#### rm
<!-- Your defnition here -->
removes files so their changes are no longer tracked

#### status
lists status (untracked, modified, staged) of files in the index

## Release 4: Git Workflow

- Push files to a remote repository
git add FileName
git commit -m 'comment' 
git push origin master

- Fetch changes
git remote -v
git fetch address
git pull address

- Commit locally
git add FileName
git commit -m 'comment'

## Release 5: Reflection
<!-- I confess I am still confused by the need for using git at the command line.  From what I have read,
	I need to use the command line because it is the only way that I can use my GitHub files locally.
	But I haven't used it for the last two weeks, and I've been able to access files locally while also
	pushing them up onto GitHub.  I'm really not opposed to using the command line--I kinda like it.  But 
	I'm also still confused as to the explanation of why the command line is needed.