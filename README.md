Welcome to In2Indie
==================
By: Jonathan Piatos

In2Indie is a CMSI402: Senior Project Laboratory Project. 

#AS OF MAY 12, 2014, I HAVE MOVED THE WORKING-IN-PROGRESS IN2INDIE INTO BITBUCKET!

#IF YOU PULL, PULL KNOWING THAT I LAST PUSHED ON MAY 8, 2014!!!

Overview:
------------
In2Indie is a web- application that hosts Indie- genre products that include (but are not limited to) video games, music, and movies. This application will serve as a way for these producers/ developers to not only advertise their product, but also reward them some money for any of their products sold on this application. The Indie producer/ developers can upload their product online to a remote server, which will be turned into a viewable product on In2Indie. Other users (the community) can view a certain product a limited amount of time on this application and download and purchase that product.

To access In2Indie:
-------------------

###Via web browser: 
    54.187.138.161  //URL Domain name TBD

###For Developers:
I assume you have the following installed:
    Node.js
    NPM
    
If not, please refer to [NodeJS Github README](https://github.com/joyent/node) or [Isaac's Gist on installing node and NPM](https://gist.github.com/isaacs/579814)

####To Install and run:

    npm install    //installs the node modules 
    node app.js    //runs In2Indie's web application

####To Create Database AND load sample data

*NOTE*I am assuming you have a PostgreSQL Database named `postgres` running on your machine.

First, you must delete/create the PostgreSQL Database and then load sample data.  To do so, do the following:
    
    bash delete-createdb.sh
    bash load-sample-data.sh 

For more details, please refer to the [In2Indie Wiki] (https://github.com/DJchopstix13/in2indie/wiki)


