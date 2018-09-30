--- Start ---
Create a single page web application (and any additional services if required) that displays the temperature data from one sensor for an interval of one month. The page should also display the current most recent temperature reading from the sensor (note - the sensor is sending data every minute). While the page is open the new data readings should be updated in the monthly graph and the current status.
Your solution should also include simulation of the sensor sending temperature readings.
 
You can use any language, framework, package or software to complete the project.
 
Bonus: package your solution in a single or multiple Docker containers.
 
Include documentation describing your architecture and how different components are being used as well as instructions for a peer developer on how to run and test the solution.
 
Upload your solution to a public or private git repository and share the location as soon as it’s ready.
--- End ---

Documentation:
I took some temperature data which I have created an array of numbers which selects randomly.
I created two components and one service to achieve the requirements.
First component is used for Monthly wise sensor data report
Second component is used for Minutes wise data report
and Service is used for to get mock data of temperature Sensor.
 
I added two buttons one is for monthly wise data and another one is for Minute wise data.
Here I used angular routing to navigate between these two components, 
and also added one timer indication, because in daily wise data for every minute we need to update report. (For every min we can see the updated report/chart)
I used chart.js to show the graphs (Here I used line graph)

Installation and Testing:
-----------------------------------------------------------------
•	First we need to download Node.js in order to test the application.
•	Second we need to install the Angular CLI and use the below commands.
              i)	npm install -g @angular/cli
•	Download Project from Repository
•	Run npm install 
•	Run ng serve
•	Open the localhost:4200 in browser
•	By default we can see Minute wise report, wait for 2 or 3 mins to see the updated report (dynamically every minute chart was updated)
•	Click on Monthly wise report button to see monthly wise report.

# TemperatureSensor

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

### Development Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
