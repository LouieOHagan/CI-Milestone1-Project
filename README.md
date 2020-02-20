# **My Furry Friend Responsive Website Project**

This is website for an organisation called 'My Furry Friend'. My Furry Friend is operational in 3 countries, Ireland, England and Sweden. Their vision is to create a friendly community of people who share the common love for dogs along with their goal to bring dogs and their owners from all around the country together to meet, play, walk and talk. The website will be used to provide information to visitors about the organisation in conjuction with dog accessories reccomendations and multiple methods of contact.

The website has 4 main pages, "Home", "Walk With Us", "Our Favourites" and "Contact Us", each of which have 3 variants. As My Furry Friends is operational in 3 countries, the website will come with a dropdown bar to allow users to change their location and language, the website content will be updated retrospectively for ease of use.
 
## UX

* ### User stories


* ### Strategy


* ### Scope


* ### Structure


* ### Skeleton
    * Home Page Wireframe - [View](https://github.com/LouieOHagan/CI-Milestone1-Project/blob/master/readMe-assets/wireframes/1.%20Index.html%20Wireframe.jpg)   

    * Walk With Us Page Wireframe - [View](https://github.com/LouieOHagan/CI-Milestone1-Project/blob/master/readMe-assets/wireframes/2.%20walk-with-us.html%20Wireframe.jpg)

    * Our Favourites Page Wireframe - [View](https://github.com/LouieOHagan/CI-Milestone1-Project/blob/master/readMe-assets/wireframes/3.%20Our%20Favourites%20Wireframe.jpg)

    * Contact Us Page Wireframe - [View](https://github.com/LouieOHagan/CI-Milestone1-Project/blob/master/readMe-assets/wireframes/4.%20Contact%20Us%20Wireframe.jpg)

    * Click [Here](https://github.com/LouieOHagan/CI-Milestone1-Project/blob/master/readMe-assets/wireframes/All%20Wireframes%20Document.pdf) for Document containing all Wireframes in .pdf format.


* ### Surface


## Features

##### Site Wide

The site is made up of 4 pages, "Home", "Walk With Us", "Our Favourites" and "Contact Us". 
All pages have 3 main components in common, a Navigation bar, hero image and footer.

- **The Navigation Bar**
    - The navigation bar is fully responsive and is aesthetically pleasing on all platforms. 
    
        - In desktop view (screen width size of 992px and above) the logo is placed at the very left hand side of the navigation bar followed
        by the links to the other pages. There is a blue rounded button located to the very right hand side
        of the bar with the format of "Country (Language)" which can be used to switch to your country of residence which 
        will update the walking locations and language of the website (if necessary).

        - In tablet view (screen width sizes between 992px to 767px) the logo remains over the left hand side
        and the Location button remains over the right hand side of the navigation bar. The links to other pages are 
        centered and remain in the middle of the navigation bar until the screensize hits the 767px breakpoint.

        - In mobile view & smaller screen sized devices (screen width sizes under 767px) the navigation bar remains in place
        with the logo over the left hand side however the button and the page links disappear and can be found inside of the
        burger menu icons. When pressed, the navigation bar drops down pushing all content beneath down with it while exposing
        the page links and Location button.

- **Hero Images**
    - There is a hero image on each of the 4 pages. All images take up 60% Viewport Height and have the same style, each have a white dog [to maintain the simplistic white theme] 
    on the right handisde of the screen with a plain background to ensure the dog is in focus. All images have also been given a gaussian
    blur overlay but the the blur over the dog has been erased to maintain the focus. To the left hand side
    of each hero image there is a circluar container that houses call to action text along with a blue rounded button
    which matches the style of all buttons in the project. Each button is assigned to the first section of the page,
    so when clicked it will initiate the smooth scroll function found in the index.js file until it reaches its target location. 
    The function is set to complete the scroll in 800 milliseconds / 0.8 seconds.

    - As the screen width size reduces the dog remains over the right handside of the screen while keeping the circluar
    container to the right, briefly overlapping until the mobile view and small screen sized devices break point is met.

    - In mobile view & smaller screen sized devices (screen width sizes under 767px) both the dog in the image and the 
    circluar container are centered along with the rest of the page content which is one section per row and is also centered. 

- **The Footer**
    - A

##### Home Page

##### Walk With Us Page

##### Our Favourites Page

##### Contact Us Page
 


### Existing Features
- Feature 1 - allows users X to achieve Y, by having them fill out Z
- ...

For some/all of your features, you may choose to reference the specific project files that implement them, although this is entirely optional.

In addition, you may also use this section to discuss plans for additional features to be implemented in the future:

### Features Left to Implement
- Another feature idea

## Technologies Used

### Languages Used

- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)

### Frameworks, Libraries & Programs Used
1. [Boostrap 4.4.1:](https://getbootstrap.com/docs/4.4/getting-started/introduction/) 
    - Bootstrap was used to assist with the responsiveness and styling of the website.
1. [Hover.css:](https://ianlunn.github.io/Hover/)
    - Hover.css was used on the Social Media icons in the footer to add the float transition while being hovered over.
1. [Google Fonts:](https://fonts.google.com/)
    - Google fonts were used to import the 'Titillium Web' font into the style.css file which is used on all pages throughout the project.
1. [Font Awesome:](https://fontawesome.com/)
    - Font Awesome was used on all pages throughout the website to add icons for aesthetic and UX purposes.
1. [jQuery:](https://jquery.com/)
    - jQuery came with Bootstrap to make the navbar responsive but was also used for the smooth scroll function in JavaScript. 
1. [Git](https://git-scm.com/)
    - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
1. [Gitpod:](https://www.gitpod.io/)
    - Gitpod was the primary IDE used throughout the entirety of the project. 
1. [GitHub:](https://github.com/)
    - GitHub is used to store the projects code after being pushed from Git.
    - The website is also deployed using GitHub Pages.
1. [Photoshop:](https://www.adobe.com/ie/products/photoshop.html)
    - Photoshop was used to create the logo, resizing images and editing photos for the website. 
1. [Balsamiq:](https://balsamiq.com/)
    - Balsamiq was used to create the [wireframes](https://github.com/LouieOHagan/CI-Milestone1-Project/blob/master/TestMe.md#skeleton) during the design process. 

## Testing

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:
- Different values for environment variables (Heroku Config Vars)?
- Different configuration files?
- Separate git branch?

In addition, if it is not obvious, you should also describe how to run your code locally.


## Credits

### Code

### Content
- The text for section Y was copied from the [Wikipedia article Z](https://en.wikipedia.org/wiki/Z)

### Media
- The photos used in this site were obtained from ...

### Acknowledgements

- I received inspiration for this project from X