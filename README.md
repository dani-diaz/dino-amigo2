# MERN-Stack Infrastructure

Clone this repo to provide the starter code for a comprehensive MERN-Stack project including token-based authentication.


<h1>Using mern-infrastructure to Create MERN-Stack Projects in the Future</h1>

Here's the process to create a new MERN-Stack project that starts with the infrastructure code:

Clone the mern-infrastructure repo: git clone <url of mern-infrastructure> <name-of-project>

Note that the folder created will be same as <name-of-project> instead of mern-infrastructure

cd <name-of-project>

Install the Node modules: npm i

Create a .env (touch .env) and add entries for DATABASE_URL and SECRET

Update the "name": "mern-infrastructure" in package.json to the name of your project.

Create a new repo on your personal GH account.

Copy the new GH repo's URL.

Update the remote's URL: git remote set-url origin <paste the copied GH url>

Make the initial commit: git add -A && git commit -m "Initial commit"

Push for the first time: git push -u origin main

Have fun coding your new project and don't forget to make frequent commits!

https://git.generalassemb.ly/SEI-CC/SEI-03-21-22/tree/main/work/w11/d3/03-mern-infrastructure-part-7