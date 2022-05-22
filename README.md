# Starting test project for a collaboration among IES El Rincón, CIFP San Cristóbal and Guías Sabios Intérpretes

This project was created as a starting point to create a VR App based on "Sabios Guías Intérpretes" page.

The resources were created by turism students from CIFP San Cristóbal.

From this starting point ICT Students in IES El Rincón will create the VR App.

## Prerequisites

You need a working environment with:
* [Git](https://git-scm.com) - You can install it from https://git-scm.com/downloads.
* [Node.js](https://nodejs.org) - Install node.js from https://nodejs.org/es/download/. It's advisable to install the LTS version.

## General Installation instructions

The best option to start with this project is cloning it in your PC:

```
git clone https://github.com/tcrurav/SabiosGuiasReactTestProject.git
```

Once you have cloned your project install all dependencies.

```
cd SabiosGuiasReactTestProject
npm install
```

Finally to start enjoying this project.

```
cd SabiosGuiasReactTestProject
npm start
```

Enjoy!!!

## Home Page

This Home Page was built with some components. 

The first one is the header and its sidebar (if you are on mobile phone). The chosen color was this to connect with the theme of the project itself. 

![Image text](https://github.com/JohanSantanaGalvanJob/My-React-Page/blob/master/README-FILES/header.PNG)

Secondly, there is a completely functional carousel made with a library that uses as a dependency bootstrap styles. This carousel has six images inserted.

![Image text](https://github.com/JohanSantanaGalvanJob/My-React-Page/blob/master/README-FILES/carousel.PNG)

When it comes to the real body part of the Home Page, I decided to make a simple yet effective text area where you can see an image, a title attached to it, and some text (only in spanish at the moment) that works as an introduction to this project.

![Image text](https://github.com/JohanSantanaGalvanJob/My-React-Page/blob/master/README-FILES/body.PNG)

![Image text](https://github.com/JohanSantanaGalvanJob/My-React-Page/blob/master/README-FILES/dark_body.PNG)

Finally, there it is a footer that contains images that redirects to their own websites, some text with contact Number, address, etc.

![Image text](https://github.com/JohanSantanaGalvanJob/My-React-Page/blob/master/README-FILES/footer.PNG)

## All Routes

This page has been taken from our teacher Tiburcio that led us this page. It serves as a connection to information of some of the routes if you want a web style from the routes if you don't want to touch anything related to A-frame.

![Image text](https://github.com/JohanSantanaGalvanJob/My-React-Page/blob/master/README-FILES/all_routes_body.PNG)

## Route Detail

This page is related and linked from the all routes page. This one contains information about one of the selected routes and also has a location in the map of the route. 

![Image text](https://github.com/JohanSantanaGalvanJob/My-React-Page/blob/master/README-FILES/route_detail_body.PNG)

## Components Explained

React has allowed me to recycle the code that I need in some pages (like the header or the footer) easily by using components.

In the source code, you can see a folder called 'components' and another one called 'pages'. The pages folder is only a subgroup of components practically. It works like the HTML Files and it contains the Home and the AllRoutes. 

For the component Folder you can see many other folders with the name of the components (this was made because some components has the core code and the styles). These components are: The carousel used for the Home Page, the footer, the header and its sidebar, a complete folder only for the A-frame part called AFrameScript, the cards that contains an image and text, the RSS with the .xml file, the information of the routes, and the scroll to top that is nothing less that a button that puts you at the top of the page. 

## Built With

* [Visual Studio Code](https://code.visualstudio.com/) - The Editor used in this project
* [React](https://reactjs.org/) - React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
* [Leaflet](https://leafletjs.com/) - an open-source JavaScript library for mobile-friendly interactive maps.
* [react-leaflet](https://react-leaflet.js.org/) - React-Leaflet uses ⚛️ React's lifecycle methods to call the relevant Leaflet handlers, which has a few consequences.

## Acknowledgments
* https://css-tricks.com/snippets/css/a-guide-to-flexbox/. A Complete Guide to Flexbox.
* https://zellwk.com/blog/how-to-write-mobile-first-css/. How to write mobile first CSS (Media Queries).
* https://gist.github.com/PurpleBooth/109311bb0361f32d87a2. A very complete template for README.md files.

## Sources of my code
* https://youtu.be/g459Eia-bxw. The footer that I have used.
* https://youtu.be/Nl54MJDR2p8. From 00:00 to 01:14:21 there is the header and the sidebar that I used.
* https://youtu.be/5RNAg4r_f4c. The final carousel that I used.

## External Libraries Used

* https://react-bootstrap.github.io/getting-started/introduction For the carousel.
* https://github.com/fisshy/react-scroll React Scroll.
* https://react-icons.github.io/react-icons/ React Icons.

