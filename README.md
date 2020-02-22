<h1 align="center">My Furry Friend Responsive Website Project</h1>

<h2 align="center"><a href="https://github.com/LouieOHagan/CI-Milestone1-Project#ux"><img src="https://i.ibb.co/SJyjBvN/btn.png"></a><img src="https://i.ibb.co/zRBpyQP/logo.png"><a href="https://louieohagan.github.io/CI-Milestone1-Project/index.html"><img src="https://i.ibb.co/pn9BGdY/live-btn.png"></a></h2>

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


### Current Pages & Features

**1. Site Wide**

The site is made up of 4 pages, "Home", "Walk With Us", "Our Favourites" and "Contact Us". 
All pages have 3 main components in common, a Navigation bar, hero image and footer and all share
the same basic structure in terms of the layout of sections (except the contact us page). 

The pages start with text information, the second section is the main section of the page which contains
the content most relevant to the page and the bottom section is some type of redirection so that the user 
doesnt get to the bottom of the page and feel isoltated and just close the tab. The users are always offered somewhere
new to go whether its to an external platform of the organisation eg Facebook page or to another page on the site.

- ##### The Navigation Bar
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

- ##### Hero Images
    - There is a hero image on each of the 4 pages. All images take up 60% Viewport Height and have the same style, each have a white dog [to maintain the simplistic white theme] 
    on the right hand side of the screen with a plain background to ensure the dog is in focus. All images have also been given a gaussian
    blur overlay but the blur over the dog has been erased to maintain the focus. To the left hand side
    of each hero image there is a circular container that houses call to action text along with a blue rounded button
    which matches the style of all buttons in the project. Each button is assigned to the first section of the page,
    so when clicked it will initiate the smooth scroll function found in the index.js file until it reaches its target location. 
    The function is set to complete the scroll in 800 milliseconds / 0.8 seconds.

    - As the screen width size reduces the dog remains over the right handside of the screen while keeping the circular
    container to the right, briefly overlapping until the mobile view and small screen sized devices breakpoint is met.

    - In mobile view & smaller screen sized devices (screen width sizes under 576px) both the dog in the image and the 
    circular container are centered along with the rest of the page content which is one section per row and is also centered. 

- ##### The Footer
    - The footer is made up of 4 main sections. Social Media Icons, Newsletter Subscription Input, copyright information and 
    the developer signature/information. The Social Media icons are located to the left hand side of the footer followed by the
    newsletter subscription section to the right. Underneath that row there is a second row in the footer which houses the 
    copyright information for the organisation "My Furry Friend" along with the website developers information.

    - The footer is fully responsive however there are no major changes other than the size of some objects until the size width size
    hits the mobile view. 

    - In mobile view & smaller screen sized devices (screen width sizes under 576px) the footer is split from 2 rows in to 3 each taking up the full width of the screen. 
    On the top of the footer in the first row are the social media icons, beneath them in the middle row is the newsletter subscription
    section followed by the copyright information and developer information at the bottom in the last row of the footer.

**2. Home Page**

- ##### Organization Information Section
    - In desktop view (screen width size of 992px and above) the design is simple. The section is split into two, the "About Us" section
    and the "What We Do ?" section. Above the title is a blue Font Awesome icon and below them is a blue horizontal rule that has a width of 10rem
    and a border width of 50% to give the shape it has. 

    - In tablet view (screen width sizes between 992px to 767px) it is the same as the desktop view but all content is fully responsive
    to ensure it fits on the page and remains aesthetically pleasing. 

    - In mobile view & smaller screen sized devices (screen width sizes under 576px) the 2 sections are stacked one on top of the other
    each taking up the full width of the screen and all content is fully responsive.

- ##### Testimonials Section
    - In desktop view (screen width size of 992px and above) the section is split into 2 rows. The title is on top which has the styled horizontal
    rule underneath it which will be seen site wide under all section headers. All horizontal rules have a width of 15rem exc: the ones in the Organization Information 
    Section above. Underneath the header are three rounded images of a site user and their dog, each accompanied by their testimonial and name.

    - In tablet view (screen width sizes between 992px to 767px) the middle image is removed leaving only two images and their accompanying testimonials
    to maintain a clean look as after testing three images didn't look well beside each other at that sized screen.

    - In mobile view & smaller screen sized devices (screen width sizes under 576px) the middle image is displayed again, resulting in three images 
    stacked one on top of the other. The text for each image is also underneath its designated image.

- ##### Redirection Section
    - In desktop view (screen width size of 992px and above) the section is split in to two rows. The title is on top which has the styled horizontal
    rule underneath. The second row has three cards, offering the user three separate locations to try out. On the bottom of each card is a styled blue
    button that the user can click to go to their desired location.

    - In tablet view (screen width sizes between 992px to 767px) the card row turns in to two separate rows which displays two cards on the top row
    and the third card is centered underneath the other two cards. 

    - In mobile view & smaller screen sized devices (screen width sizes under 576px) the three cards are stacked one on top of the 
    other to match the rest of the page style on small screen size devices.


**3. Walk With Us Page**

- ##### Why Walk With Us Information Section
    - In desktop view (screen width size of 992px and above) the section is split into two rows. The title is on top which has the 
    styled horizontal rule underneath it. Underneath the section header there are three paragraphs of text which are centered in the row.

    - In tablet view (screen width sizes between 992px to 767px) there is not much change other than sizing of content but it is 
    all responsive.

    - In mobile view & smaller screen sized devices (screen width sizes under 576px) again there is little change except for sizing but 
    once again the section is fully responsive.

- ##### Walking Locations Section
    - In desktop view (screen width size of 992px and above) the section is split into three rows overall which each contain 2 rows each, a header and a 
    row of three cards. The title is on top which has the styled horizontal rule underneath. The second row has three cards, showcasing seperate locations in
    the area that the title specifies eg Dublin Spots with three walking locations in Dublin. Each card has a picture of the location with text underneath
    displaying when the walk is in that specific location and details about it.

    - In tablet view (screen width sizes between 992px to 767px) the section headers remain the same other than a bit of difference in sizing however 
    the card row turns into two separate rows which displays two cards on the top row and the third card is centered underneath the other two cards.

    - In mobile view & smaller screen sized devices (screen width sizes under 576px) the three cards are stacked one on top of the other to match the rest 
    of the page style on small screen size devices.

- ##### Redirection Section
    - In all views there are three rows, the top two with text with a question/call to action. Underneath there is a blue styled button that will 
    redirect the user to the contact us page.

**4. Our Favourites Page**

- ##### Our Furry Friends Favourites Information Section
    - In desktop view (screen width size of 992px and above) the section is split into two rows. The title is on top which has the 
    styled horizontal rule underneath it. Underneath the section header there is two paragraphs of text which are centered in the row.

    - In tablet view (screen width sizes between 992px to 767px) there is not much change other than sizing of content but it is 
    all responsive.

    - In mobile view & smaller screen sized devices (screen width sizes under 576px) again there is little change except for sizing but 
    once again the section is fully responsive.

- ##### Top Three's Section
    - In desktop view (screen width size of 992px and above) the section is split into three rows overall which each contain 2 rows each, a header and a 
    row of three cards. The title is on top which has the styled horizontal rule underneath. The second row has three cards, showcasing three of the favourite
    products in that specific section eg Top Three Foods. Each card has a picture of the product, with a short description of it underneath along with a blue 
    styled button to an external site where the product can be purchased. 

    - In tablet view (screen width sizes between 992px to 767px) the section headers remain the same other than a bit of difference in sizing however 
    the card row turns into two separate rows which displays two cards on the top row and the third card is centered underneath the other two cards.
    The cards increase in size slightly as there is additional space now that the cards are spread over two rows.

    - In mobile view & smaller screen sized devices (screen width sizes under 576px) the three cards are stacked one on top of the other to match the rest 
    of the page style on small screen size devices. 

- ##### Redirection Section
    - In desktop view (screen width size of 992px and above) the section is split into two rows. The title is on top which has the 
    styled horizontal rule underneath it. Underneath the section header there is card that has information about more cool items for your
    that can be found on the organisations Facebook page. This is a great incentive to get more members in to the facebook community to help
    both the page and organisation expand and get more exposure. The card itself has a Font Awesome icon at the top, a brief description in the
    middle along with a blue styled button that directs you to an external page (it would direct to the Facebook however for the purpose of the project it
    directs to the facebook home page in a new tab). 

    - In tablet view (screen width sizes between 992px to 767px) the section stays the same, the card in facts increases in size to maintain uniformity with the 
    rest of the cards on the page which increase in size as there is a bit of extra room when the three cards on one row transforms into two rows.

    - In mobile view & smaller screen sized devices (screen width sizes under 576px) the card once again increases in size to maintain uniformity with the 
    rest of the cards on the page which increases in size as they are now stacked on top of eachother and only have 1 card per row.

**5. Contact Us Page**

The Contact Us Page is made up of 2 main sections excl: the navigation bar, hero image and footer.
- ##### Contact Us Form Section
    - In desktop view (screen width size of 992px and above) the section is made up of 13 rows. The title is on top which has the 
    styled horizontal rule underneath it. Underneath the section header there are five text input boxes each of which have a label above them.
    The form requires the "First Name", "Last Name", "Email Address", & "Description" (each of which have a red asterisk beside their label to indicate
    they are required) to be filled out in order to be able to submit. The last input field is the "Phone Number" which is not required to be filled out 
    as it is created in a way that it requires 10 numbers in a row from 1-9 in order to be valid and submitted. Some users may have a foreign number or will 
    input their number in a different way which could frustrate them if it restricts them from submitting the form which would be bad UX. For this reason 
    the email address is taken too which can be used as the method of contact if a phone number is not attached.

    - In tablet view and mobile view (screen width sizes under 992px) the form is fully responsive. The section headers text reduces in size at the 576px
    breakpoint and the text input fields keep the same percentage width the whole time resulting in them reducing when the page size is reduced.

- ##### Alternative Contact Section
    - In all views there are two rows, both contain text adding that instead of filling out the form, an alternative method of contact would be contacting
    them on social media. Right below this section is the footer which contains links to all of the organisations social media accounts. 

### To Do List
- Make Location/Language buttons work.
- Modal popup after form is submitted on Contact Page.
- Change all measurements from "px" to "rem".
- ~~Add small border radius to border for text input fields.~~ - **Implemented 21/2/20**
- Add paw prints in between social icons and newsletter section on footer.
- Put library code (eg bootstrap css file) in library folder so site not dependent on external sources.
- ~~Add custom alt attribute to all images that arent embedded in css.~~ - **Implemented 21/2/20**
- ~~Fix bug with text coming out of cards on medium sized screens on Walk With Us Page.~~ - **Implemented 22/2/20**
- ~~Re-beautify code as Gitpod beautify command distorts code in GitHub.~~ - **Implemented 21/2/20**
###### Last Updated: 11:06am GMT - 22/02/20 

### Features Left to Implement
##### These are features that have not been added at the time of development due to various reasons such as time limitations.

- Add buttons on location cards that open modal with google maps so that user can easily find the location
in the click of a few buttons.
- Make the site have a more interactive frontend with JavaScript eg Sections fading in or sliding in as you 
get to them. 
- Setup  and connect Email service such as EmailJS to contact form so that form responses are
sent to organisations email.
- Add Gallery Page with images showcasing some of the events the organisation have hosted and walks
that they go on, on a weekly basis.
- Add carousel for testimonials in order to showcase more than 3 testimonials on the page without
taking up too much room on the page.
- Add cookies and/or Google Analytics to gather data about users who visit the site in order to maximise the 
effect of any digital marketing the organisation is doing. 
- Add back to top button that appears down the bottom right of the screen after scrolling down the page 
past the first section.

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
1. [Screen to GIF](https://www.screentogif.com/)
    - Screen to GIF was used to record the screen to create GIF's to demonstrate a specific task in video for the README.md file.
1. [HTML Formatter](https://htmlformatter.com/)
    - HTML Formatter was used to beautify code to keep the code neat and easy to read. Was utilised as Beautify Cmd (Shift + Alt + F) in GitPod distorted code in GitHub.

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

### GitHub Pages
The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/LouieOHagan/CI-Milestone1-Project)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
    - Alternatively Click [Here](https://raw.githubusercontent.com/LouieOHagan/CI-Milestone1-Project/master/readMe-assets/github-pages-deployment.gif) for a GIF demonstrating the process starting from Step 2.
3. Sroll down the Settings page unti you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refesh.
6. Scroll back down through the page to locate the now published site [link](https://louieohagan.github.io/CI-Milestone1-Project/index.html) in the "GitHub Pages" section.

### Forking the GitHub Repository
By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/LouieOHagan/CI-Milestone1-Project)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/LouieOHagan/CI-Milestone1-Project)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type ```git clone```, and then paste the URL you copied in Step 3.
```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```
7. Press Enter. Your local clone will be created.
```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `Spoon-Knife`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```
Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above proccess.

## Credits

### Code
- [Matt Rudge](https://github.com/lechien73): For code in style.css from line 159 - 161 to transition. The code was used to ease in and out
the bottom border than I created when the Navigation Bar links were hovered over.
```    
transition: all .2s ease-in-out;
-moz-transition: all .2s ease-in-out;
-webkit-transition: all .2s ease-in-out;
```

- [w3schools](https://www.w3schools.com/): For Smooth Scrolling JavaScript function as ```scroll-behavior:  smooth;``` CSS element does not support Safari browser which a 
large amount of mobile users would utilize. Tutorial Found [Here](https://www.w3schools.com/howto/howto_css_smooth_scroll.asp)

- [Boostrap4](https://getbootstrap.com/docs/4.4/getting-started/introduction/): Bootstrap Library used throughout project mainly to make site responsive using the Bootstrap Grid System. 

- [MDN Web Docs](https://developer.mozilla.org/) : For Pattern Validation code. Code was modified to better fit my needs and to match an Irish phone number layout to ensure
correct validation. Tutorial Found [Here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/tel#Pattern_validation)

### Content
- All content (excl: Content on Top Three Cards) was written by the Developer Louie O Hagan.

- Top Three Cards: All content inside of the product cards on the "Our Favourites" Page was written by the products company. Each company site
is linked to the "Read More" button on the bottom of each card.

### Media
- [Pixabay](https://pixabay.com/): All the Hero Images and Testimonial pictures obtained from Pixabay.

- [Google Images](https://www.google.com/imghp?hl=en): All Location Images and Product Images obtained from Google Images.

- All Hero Images and Location Images were edited by the Developer Louie O Hagan.
    - All Hero images were given a gaussian blur overlay but the blur over the dog was been erased to maintain the focus on the white dog
    
    - All Location card images colouring on "Walk With Us" page were edited to maintain bright, appealing and colourful pictures that matched eachother 
    and complimented the simplicity of the websites colours.

### Acknowledgements

- My Mentor Adegbenga Adeye for continous helpful feedback and ideas to better improve both myself as a developer and my project.

- The idea of locating the dog to the right handside with as little around it to keep focus on the dog was
inspired by the "House My Dog" [website](https://housemydog.com/).