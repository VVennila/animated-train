# animated-train
node -v
npm init
Install Dependencies: npm install
mongod -> mongod: command not found
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo gpg --dearmor -o /usr/share/keyrings/mongodb.gpg
echo "deb [signed-by=/usr/share/keyrings/mongodb.gpg] https://repo.mongodb.org/apt/ubuntu focal/multiverse amd64 Packages" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
sudo apt update
sudo apt install -y mongodb-org
sudo rm /etc/apt/sources.list.d/mongodb-org-6.0.list
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo gpg --dearmor -o /usr/share/keyrings/mongodb.gpg

sudo systemctl start mongod
sudo systemctl enable mongod
sudo systemctl status mongod
mongo


