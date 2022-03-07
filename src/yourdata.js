// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import facebookIcon from "./images/facebook.svg"
import linkedinIcon from "./images/linkedin.svg"
import whatsappIcon from "./images/whatsapp.svg"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------

  headerTagline: [
    //Line 1 For Header
    "Janashi Resanjana",
  ],
  //   Header Paragraph
  headerParagraph:
    "I am a student of the University of Sri Jayewardenepura",

  //Contact Email
  contactEmail: "janashirasa1021@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Project One", //Project Title - Add Your Project Title Here
      para:
        "I have successfully completed Library Management System Using Java language. ", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://149501111.v2.pressablecdn.com/wp-content/uploads/2020/12/Library-Management-System.jpg",
      //Project URL - Add Your Project Url Here
      url:
        "https://drive.google.com/drive/folders/1u01cCjxlvmPLxXMnEczFvolLxvhxEsAm?usp=sharing",
    },
    {
      title: "Project Two", //Project Title - Add Your Project Title Here
      para:
        "I have successfully completed Restaurant Management System Using HTML, CSS and JavaScript language.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://athemes.com/wp-content/uploads/Spoon-Restaurant-WordPress-Theme.jpg",
      //Project URL - Add Your Project Url Here
      url:
      "https://github.com/JanashiRJ/Web-Development.git",
    },
    {
      title: "Project Three", //Project Title - Add Your Project Title Here
      para:
        "I have successfully completed Health Information System Using Python language.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://cdn.dribbble.com/users/298587/screenshots/6356425/dribbble.jpg",
      //Project URL - Add Your Project Url Here
      url:
      "https://github.com/JanashiRJ/React-portfoilo",
    },
    {
      title: "Project Four", //Project Title - Add Your Project Title Here
      para:
        "I have successfully completed Gift Items Ordering and Delivery Application Using Javascript language.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://www.sketchappsources.com/resources/source-image/karamtaj-giftshop-app.png",
      //Project URL - Add Your Project Url Here
      url:
      "https://github.com/JanashiRJ/JanashiRJ.github.io.git",
    },
    {
      title: "Project Five", //Project Title - Add Your Project Title Here
      para:
        "I have successfully completed UI UX designs using Adobe XD software.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "data:image/jpeg;base64,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",
      //Project URL - Add Your Project Url Here
      url:
      "https://drive.google.com/file/d/1jTR8_n-mHTZVNuXssFDUA_4DM6sCdIrL/view?usp=sharing",
    },
    {
      title: "Project Six", //Project Title - Add Your Project Title Here
      para:
        "I am doings designs using Photoshop and Illustrators", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg-Ie622clx8Xoy_KtMilo5cKybhk5EuJOGvf5322e9h8ifxJ0SJm-VmmOnEzwSoUnLhg&usqp=CAU",
      //Project URL - Add Your Project Url Here
      url:
      "https://github.com/JanashiRJ/React-portfoilo",
    },


    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "I am Janashi Resanjana. I am 24 years old. I'm a student at university of Sri Jayewardenepura. I am a third year undergraduate. I am studying for a Bachelor of science degree in Information and Communication Technology. I have followed various courses related to IT.",
  aboutParaTwo:
    "I often like to gain knowledge from experience as well as through self study. I have good knowledge about several computer languages such as python, Java, and have now successfully completed several projects.",
  aboutParaThree:
    "I like UI UX design as well as graphic design. I'm currently doing graphic designs for variety of occasions.",
  aboutImage:
     "https://media-exp1.licdn.com/dms/image/C5603AQFQ3901kET6YA/profile-displayphoto-shrink_200_200/0/1645812304706?e=1651104000&v=beta&t=7BISIN7WutMN_nOJaa24qqbRtWT68HatOzbjEnQ902k",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: htmlIcon,
      para:
        "I have a good knowledge about HTML and have successfully completed several Projects.",
    },
    {
      img: cssIcon,
      para:
        "I have a good knowledge about CSS and have successfully completed several Projects.",
    },
    {
      img: jsIcon,
      para:
        "I have a good knowledge about Javascript language and have successfully completed several Projects.",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Education & Qualification",
  promotionPara:
    "I am a third-year student at the University of Sri Jayawardene Pura. I study a Bachelor of Science Information and communication technology degree program now. I am most interested in graphic designs. So I have successfully completed a graphic design course.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/JanashiRJ/React-portfoilo" },
    {
      img: facebookIcon,
      url: "https://www.facebook.com/janashi.vidanagamage",
    },
    {
      img: linkedinIcon,
      url: "https://www.linkedin.com/in/janashi-resanjana-281003233",
    },
    {
      img: whatsappIcon,
      url: "https://api.whatsapp.com/send?phone=94767483665",
    },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
