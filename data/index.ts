export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-2 md:col-span-4 md:row-span-2 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-1 md:col-span-2 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-1 md:col-span-2 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-0.5 md:col-span-1 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building a JS Animation library",
      description: "The Inside Scoop",
      className: "md:col-span-2 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-1 md:col-span-1 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Filly Bar Chocolate",
      des: "Fillybar Chocolate is a delightful treat, offering rich, creamy chocolate in a compact, easy-to-enjoy form.",
      img: "/p1.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "https://github.com/Felix273/fillybar-chocolate",
    },
    {
      id: 2,
      title: "Travel App",
      des: "A travel application designed to simplify your journeys, offering features like trip camping and hotel bookings, itinerary management, and real-time updates.",
      img: "/p2.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "https://feltravels-bh3kds9cp-fel-inc-africa.vercel.app/",
    },
    {
      id: 3,
      title: "Portfolio Application",
      des: "A portfolio website designed to showcase your professional work, skills, and achievements in a visually appealing and organized manner.",
      img: "/p3.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "https://felixngitariportfolio.netlify.app/",
    },
    {
      id: 4,
      title: "Mobile Application ",
      des: "A Sushi app mobile application offering a seamless way to explore, order, and enjoy your favorite sushi dishes.",
      img: "/p4.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "https://github.com/Felix273/Sushiapp",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Felix Ngitari is a true professional who goes above and beyond to deliver exceptional results. His attention to detail and ability to understand our needs made the entire process seamless. Felix played a crucial role in bringing our vision to life, and we couldn't be happier with the outcome. I highly recommend Felix for any web or mobile development project.",
      name: "Japheth Musyoka",
      title: "CEO of JEMSA Media Services",
    },
    {
      quote:
        "Working with Felix was an outstanding experience. His passion for development shines through in every project he takes on. Felix is not just a developer but a creative thinker who provides innovative solutions. His work on our mobile app was nothing short of impressive, and I look forward to collaborating with him on future projects.",
      name: "Ayub Eleli",
      title: "CEO of ELELI Afrika",
    },
    {
      quote:
        "Felix Ngitari is a developer you can count on. His dedication to delivering high-quality work, coupled with his deep understanding of both web and mobile technologies, makes him a valuable asset to any team. Felix is always ready to tackle challenges head-on and consistently produces results that exceed expectations.",
      name: "Alvin Otuya",
      title: "Senior Developer",
    },
    {
      quote:
        "Felix's work on our website was a game-changer. His ability to transform our ideas into a user-friendly and visually appealing site was remarkable. Felix is not only skilled but also incredibly easy to work with. His professionalism and commitment to excellence were evident throughout the entire project, and we couldn't be more pleased with the final product.",
      name: "Festus Kir",
      title: "Director of Film Kenya",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Frontend Engineer Intern",
      desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Mobile App Dev - JSM Tech",
      desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Freelance App Dev Project",
      desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Lead Frontend Developer",
      desc: "Developed and maintained user-facing features using modern frontend technologies.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
    },
    {
      id: 2,
      img: "/twit.svg",
    },
    {
      id: 3,
      img: "/link.svg",
    },
  ];