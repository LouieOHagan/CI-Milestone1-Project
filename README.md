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
All pages have 3 main components in common, a Navigation bar, hero image and footer and all share
the same basic structure in terms of the layout of sections (except the contact us page). 

The pages start with text information, the second section is the main section of the page which contains
the content most relevant to the page and the bottom section is some type of redirection so that the user 
doesnt get to the bottom of the page and feel isoltated and just close the tab. The users are always offered somewhere
new to go whether its to an external platform of the organisation eg Facebook page or to another page on the site.

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
    on the right hand side of the screen with a plain background to ensure the dog is in focus. All images have also been given a gaussian
    blur overlay but the the blur over the dog has been erased to maintain the focus. To the left hand side
    of each hero image there is a circular container that houses call to action text along with a blue rounded button
    which matches the style of all buttons in the project. Each button is assigned to the first section of the page,
    so when clicked it will initiate the smooth scroll function found in the index.js file until it reaches its target location. 
    The function is set to complete the scroll in 800 milliseconds / 0.8 seconds.

    - As the screen width size reduces the dog remains over the right handside of the screen while keeping the circular
    container to the right, briefly overlapping until the mobile view and small screen sized devices breakpoint is met.

    - In mobile view & smaller screen sized devices (screen width sizes under 576px) both the dog in the image and the 
    circular container are centered along with the rest of the page content which is one section per row and is also centered. 

- **The Footer**
    - The footer is made up of 4 main sections. Social Media Icons, Newsletter Subscription Input, copyright information and 
    the developer signature/information. The Social Media icons are located to the left hand side of the footer followed by the
    newsletter subscription section to the right. Underneath that row there is a second row in the footer which houses the 
    copyright information for the organisation "My Furry Friend" along with the website developers information.

    - The footer is fully responsive however there are no major changes other than the size of some objects until the size width size
    hits the mobile view. 

    - In mobile view & smaller screen sized devices (screen width sizes under 576px) the footer is split from 2 rows in to 3 each taking up the full width of the screen. 
    On the top of the footer in the first row are the social media icons, beneath them in the middle row is the newsletter subscription
    section followed by the copyright information and developer information at the bottom in the last row of the footer.

##### Home Page

- **Orgnisation Information Section**
    - In desktop view (screen width size of 992px and above) the design is simple. The section is split in to two, the "About Us" section
    and the "What We Do ?" section. Above the title is a blue Font Awesome icon and below them is a blue horizontal rule that has a width of 10rem
    and a border width of 50% to give the shape it has. 

    - In tablet view (screen width sizes between 992px to 767px) it is the same as the desktop view but all content is fully responsive
    to ensure it fits on the page and remains aesthetically pleasing. 

    - In mobile view & smaller screen sized devices (screen width sizes under 576px) the 2 sections are stacked one on top of the other
    each taking up the full width of the screen and all content is fully responsive.

- **Testimonials Section**
    - In desktop view (screen width size of 992px and above) the section is split in to 2 rows. The title is on top which has the styled horizontal
    rule underneath it which will be seen site wide under all section headers. All horizontal rules have a width of 15rem exc: the ones in the Orgnisation Information 
    Section above. Underneath the header are three rounded images of a site user and thier dog, each accompanied by their testimonial and name.

    - In tablet view (screen width sizes between 992px to 767px) the middle image is removed leaving only two images and their accompanying testimonials
    to maintain a clean look as after testing three images didnt look well beside eachother at that sized screen.

    - In mobile view & smaller screen sized devices (screen width sizes under 576px) the middle image is displayed again, resulting in three images 
    stacked one on top of the other. The text for each image is also underneath its desingated image.

- **Redirection Section**
    - In desktop view (screen width size of 992px and above) the section is split in to two rows. The title is on top which has the styled horizontal
    rule underneath. The second row has three cards, offering the user three seperate locations to try out. On the bottom of each card is a styled blue
    button that the user can click to go to their desired location.

    - In tablet view (screen width sizes between 992px to 767px) the card tow turns in to two seperate rows which displays two cards on the top row
    and the third card is centered underneath the other two cards. 

    - In mobile view & smaller screen sized devices (screen width sizes under 576px) the three cards are stacked one on top of the 
    other to match the rest of the page style on small screen size devices.


##### Walk With Us Page

- **Why Walk With Us Information Section**
    - In desktop view (screen width size of 992px and above) 

    - In tablet view (screen width sizes between 992px to 767px) 

    - In mobile view & smaller screen sized devices (screen width sizes under 576px)

- **Walking Locations Section**
    - In desktop view (screen width size of 992px and above) 

    - In tablet view (screen width sizes between 992px to 767px) 

    - In mobile view & smaller screen sized devices (screen width sizes under 576px)  

- **Redirection Section**
    - In desktop view (screen width size of 992px and above) 

    - In tablet view (screen width sizes between 992px to 767px) 

    - In mobile view & smaller screen sized devices (screen width sizes under 576px) 

##### Our Favourites Page

- **Our Furry Friends Favourites Information Section**
    - In desktop view (screen width size of 992px and above) 

    - In tablet view (screen width sizes between 992px to 767px) 

    - In mobile view & smaller screen sized devices (screen width sizes under 576px)

- **Top Three's Section**
    - In desktop view (screen width size of 992px and above) 

    - In tablet view (screen width sizes between 992px to 767px) 

    - In mobile view & smaller screen sized devices (screen width sizes under 576px)  

- **Redirection Section**
    - In desktop view (screen width size of 992px and above) 

    - In tablet view (screen width sizes between 992px to 767px) 

    - In mobile view & smaller screen sized devices (screen width sizes under 576px)

##### Contact Us Page

The Contact Us Page is made up of 2 main sections excl: the navigation bar, hero image and footer.
- **Contact Us Form Section**
    - In desktop view (screen width size of 992px and above) 

    - In tablet view (screen width sizes between 992px to 767px) 

    - In mobile view & smaller screen sized devices (screen width sizes under 576px)

- **Alternative Contact Section**
    - In desktop view (screen width size of 992px and above) 

    - In tablet view (screen width sizes between 992px to 767px) 

    - In mobile view & smaller screen sized devices (screen width sizes under 576px)  


### Existing Features
- Feature 1 - allows users X to achieve Y, by having them fill out Z
- ...

For some/all of your features, you may choose to reference the specific project files that implement them, although this is entirely optional.

In addition, you may also use this section to discuss plans for additional features to be implemented in the future:

### To Do List
- Make Location/Language buttons work.
- Modal popup after form is submitted on Contact Page.
- Change all measurements from "px" to "rem".
- Add small border radius to border for text input fields.
- Add paw prints in between social icons and newsletter section on footer.
- Put library code (eg bootstrap css file) in library folder so site not dependent on external sources.
###### Last Updated: 17:39pm GMT - 02/20/20 

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
    - Balsamiq was used to create the [wireframes](https://github.com/LouieOHagan/CI-Milestone1-Project#skeleton) during the design process. 

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