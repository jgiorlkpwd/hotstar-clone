let movies = [
    {
      name: "falcon and the winter soldier",
      des:
        "The Falcon and the Winter Soldier is an American television miniseries created by Malcolm Spellman for the streaming service Disney+, based on Marvel Comics featuring the characters Sam Wilson / Falcon and Bucky Barnes / Winter Soldier.",
      image: "slider 2.PNG"
    },
    {
      name: "loki",
      des:
        "Who is Loki? In Norse mythology Loki is a cunning trickster who has the ability to change his shape and sex. Although his father is the giant Fárbauti, he is included among the Aesir (a tribe of gods). Loki is represented as the companion of the great gods Odin and Thor.",
      image: "slider 1.PNG"
    },
    {
      name: "wanda vision",
      des:
        "The storyline revealed Wanda is a nexus being, a person who greatly affects timelines. By influencing Wanda to tap into her nexus energies, Immortus caused her increase in power and the creation of the children. Immortus wishes to use her to warp reality, but Wanda comes to her senses and gives up her nexus energies.",
      image: "slider 3.PNG"
    },
    {
      name: "raya and the last dragon",
      des:
        "Kelly Marie Tran as Raya, the fierce and virtuous warrior princess of Heart who has been training to become a Guardian of the Dragon Gem. To change her father from stone back into himself and restore peace to Kumandra, she embarks on a search for the last dragon. Awkwafina as Sisu, the last dragon in existence.",
      image: "slider 4.PNG"
    },
    {
      name: "luca",
      des:
        "Pixar's “Luca,” an Italian-set animated fairy tale concerning two young sea monsters exploring an unknown human world, offers the studio's hallmark visual splendor, yet fails to venture outside of safe waters.",
      image: "slider 5.PNG"
    }
  ];
  
  const carousel = document.querySelector(".carousel");
  let sliders = [];
  
  let slideIndex = 0; // to track current slide index.
  
  const createSlide = () => {
    if (slideIndex >= movies.length) {
      slideIndex = 0;
    }
  
    // creating DOM element
    let slide = document.createElement("div");
    var imgElement = document.createElement("img");
    let content = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
  
    // attaching all elements
    imgElement.appendChild(document.createTextNode(""));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);
  
    // setting up image
    imgElement.src = movies[slideIndex].image;
    slideIndex++;
  
    // setting elements classname
    slide.className = "slider";
    content.className = "slide-content";
    h1.className = "movie-title";
    p.className = "movie-des";
  
    sliders.push(slide);
  
    if (sliders.length) {
      sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
        30 * (sliders.length - 2)
      }px)`;
    }
  };
  
  for (let i = 0; i < 3; i++) {
    createSlide();
  }
  
  setInterval(() => {
    createSlide();
  }, 3000);
  
  //Video Cards
  
  const videoCards = [...document.querySelectorAll(".video-card")];
  
  videoCards.forEach((item) => {
    item.addEventListener("mouseover", () => {
      let video = item.children[1];
      video.play();
    });
    item.addEventListener("mouseleave", () => {
      let video = item.children[1];
      video.pause();
    });
  });
  
  //card sliders
  
  let cardContainers = [...document.querySelectorAll(".card-container")];
  let preBtns = [...document.querySelectorAll(".pre-btn")];
  let nxtBtns = [...document.querySelectorAll(".nxt-btn")];
  
  cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
  
    nxtBtns[i].addEventListener("click", () => {
      item.scrollLeft += containerWidth - 200;
    });
  
    preBtns[i].addEventListener("click", () => {
      item.scrollLeft -= containerWidth + 200;
    });
  });
  