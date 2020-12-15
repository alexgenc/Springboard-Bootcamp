# HEALTHY LIVING - CAPSTONE PROJECT 1 - ALEX GENC

## ABOUT THE PROJECT
The intention of this project is to create a full-stack web application using all the technologies learned up to this point (~40%) in Springboard's Software Engineering Career Track course.

This project, called Healthy Living, uses the following technologies:
  - HTML
  - CSS
  - JavaScript
  - Ajax
  - Python
  - Flask
  - Jinja
  - WTForms
  - PostgreSQL
  - SQLAlchemy

## API
**Exercises API:** https://wger.de/en/software/api  
**Meals API:** https://www.themealdb.com/api.php  
**News API:** https://developer.nytimes.com/  

## Database Schema Design
[![Database-Schema-Design.jpg](https://i.postimg.cc/VvmntCtK/Database-Schema-Design.jpg)](https://postimg.cc/r0ZDXzQ4)

**Meal information is directly fetched from the API and therefore, not stored in the database.**
 
## User Flows

Users who are not logged in will be able to view latest news on the homepage, exercise and meal categories, as well as the list of exercises and meals for each category. However, they will not be able to view specific meal or exercise pages.

Logged in users will be able to view specific meal and exercise pages, post comments on meals and exercises, add meals and exercises to their favorites. Logged in users also have access to their user dashboard, which they can use to update their account information and change password. User dashboard also displays a user's favorite meals, exercises, as well as their comments on different meals and exercises.