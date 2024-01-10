# How to use it for new project

## 1. Keep original git history
1. Make a new repo on Github for example SecondProject.

2. Locally clone this project

3. Set new remote

```
git remote set-url origin git@github.com:yourname/SecondProject.git
```

4. Push it.

```
git push --set-upstream origin main --force
``` 

## 2. Clean git history
1. Make a new repo on Github for example SecondProject.

2. Locally clone this project

3. remove .git directory

4. Initialize git

```
git init
```

4. Set new remote

```
git remote set-url origin git@github.com:yourname/SecondProject.git
```

5. Push it.

```
git push --set-upstream origin main --force
``` 