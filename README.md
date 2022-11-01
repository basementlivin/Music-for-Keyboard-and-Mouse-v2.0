# Music for Keyboard and Mouse (v2.0)
A browser-based percussion score for the solo performer. Conceptualized, designed, and developed by Erik Pedersen during a one-week sprint in late summer 2022.

#### FILE UNDER: MERN stack, Sass, web apps, sprint, contemporary art, percussion, experimental music.
#### TECH STACK & DESIGN TOOLS: HTML, SCSS, JavaScript, Express, Node.js, React, MongoDB, Mongoose, Figma.

![Man nodding slowly and peacfully with headphones on.](https://media.giphy.com/media/TbPh7p3cfUAPC/giphy.gif)

## Description & User Stories
The user enacts a deadpan piece of percussion music using only their keyboard and mouse (or trackpad). Drawing on traditions of [musique concrète](https://www.frontiersin.org/articles/10.3389/fpsyg.2021.672949/full), [noise music](https://www.theguardian.com/music/2008/nov/10/squarepusher-paul-hegarty-noise), and the chance techniques of [Marcel Duchamp](https://www.moma.org/learn/moma_learning/themes/dada/marcel-duchamp-and-the-readymade/) and [John Cage](https://www.jstor.org/stable/25597623), players are shown a series of prompts that they must complete before moving on to the next one. Instead of traditional musical notation, this score exists as plain text: "Tap the up arrow 42 times", "Press and hold the 3 key for 30 seconds" and so forth. In the relative "silence" of these simple acts, players may begin to pay closer attention to the sounds of their keystrokes and mouse clicks, the drone of their computer, their breath, and the everyday music of their immediate surroundings.


## Wireframes
<img width="1348" alt="Screen Shot 2022-10-17 at 9 37 31 AM" src="https://user-images.githubusercontent.com/109049703/196192651-2de7c5f1-3fd9-451e-b407-f76c73860c27.png">
<img width="1348" alt="Screen Shot 2022-10-17 at 9 37 43 AM" src="https://user-images.githubusercontent.com/109049703/196192658-5cd5c62f-dee5-4153-b15b-90056c4fbce1.png">
<img width="1348" alt="Screen Shot 2022-10-17 at 9 38 00 AM" src="https://user-images.githubusercontent.com/109049703/196192667-2ec7f6c6-ab4d-499c-9bd9-dd8b91ca8c8a.png">
<img width="1348" alt="Screen Shot 2022-10-17 at 9 38 08 AM" src="https://user-images.githubusercontent.com/109049703/196192677-c9c8204d-a75e-49ee-8d28-c35084f29293.png">
<img width="1348" alt="Screen Shot 2022-10-17 at 9 38 21 AM" src="https://user-images.githubusercontent.com/109049703/196192681-cc129ecf-b4d4-4762-8584-9bad2e4bc309.png">
<img width="1348" alt="Screen Shot 2022-10-17 at 9 38 33 AM" src="https://user-images.githubusercontent.com/109049703/196192841-9d5a9b4f-3675-477c-b596-ad2231753681.png">
<img width="1348" alt="Screen Shot 2022-10-17 at 9 38 53 AM" src="https://user-images.githubusercontent.com/109049703/196192847-77d11fee-772a-4c69-acdf-761c206f919e.png">
<img width="1348" alt="Screen Shot 2022-10-17 at 9 39 04 AM" src="https://user-images.githubusercontent.com/109049703/196192854-6b984ef9-eb31-46bd-a4f2-1340332aaa6d.png">
<img width="1348" alt="Screen Shot 2022-10-17 at 9 39 21 AM" src="https://user-images.githubusercontent.com/109049703/196192862-46818122-1b04-4b9b-a914-ad348617eb21.png">
<img width="1348" alt="Screen Shot 2022-10-17 at 9 39 49 AM" src="https://user-images.githubusercontent.com/109049703/196192868-5e081451-a350-49f6-856a-64d7c98c183d.png">
<img width="1348" alt="Screen Shot 2022-10-17 at 9 40 05 AM" src="https://user-images.githubusercontent.com/109049703/196192875-1859614d-8ea5-48db-bd88-42ba5084e5d4.png">


## Tools & Technologies Used
This performance piece was built using the MERN stack: the client-facing portion is built in React and styled with SCSS, while the server-side relies on MongoDB, Mongoose, Express, and Node. Text editor: VS Code. Wireframes and [prototype](https://www.figma.com/proto/N5TgSTHSMXEBsT0STQJlJR/Music-for-Keyboard-and-Mouse?node-id=1%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2) designed in Figma. Fonts: [Lausanne](https://www.weltkern.com/shop/detail-typeface/lausanne) (type.weltkern, 2017) and [Director](https://velvetyne.fr/degheest/director.html) (Velvetyne, 2022).

## Next Steps
Some planned features and debugs for the next update of "Music for Keyboard and Mouse":

• Allow users to write new performance prompts.

• Migrate performance prompt array from Performance.js to DB! The model could relate to the user who created it and maybe even have a play-count that increments whenever it shows up during a performance.

• Implement dark mode, plus a couple extra color schemes. Not everyone finds creamy yellow relaxing, so I’d like to give people some options here.

• Add filter options and a search feature to the recording archive, so you can parse through it more easily as it grows and becomes unwieldy.

• Make sure the design is highly responsive! I want this to work on desktops, laptops, tablets, and phones—this way, people can do their performances outside of their homes, coffee shops, and places with reliable internet.

• Add keycode recognition for operating systems beyong macOS. Correct key entry may not currently register for Windows users.

• Include timers and counters to help performers keep track of the number and length of keystrokes and mouse clicks. If they're not so busy counting, they'll be able to listen more intently to their surroundings.
