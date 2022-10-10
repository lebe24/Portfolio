const Project = [

    {
        name:"Space Walk",
        title:"informative planetary app",
        cat:'filter-mobile',
        git:"https://github.com/lebe24/spacewalk",
        link:" ",
        image:"https://github.com/lebe24/spacewalk/raw/master/assets/planetapp.png"
    },
    {
        name:"Uniswapclone",
        title:"web 3",
        cat:'filter-web',
        git:"https://github.com/lebe24/uniswap-clone-main",
        link:"https://kzswj8.sse.codesandbox.io/",
        image:"https://github.com/lebe24/uniswap-clone-main/raw/master/uniswap.png" 
    },
  {
      name:"fitness Guide",
      cat:'filter-web',
      title:"fitness app design using nextui by vercel",
      git:"https://github.com/lebe24/nextui",
      link:"https://nextui-byy.pages.dev/",
      image:"https://raw.githubusercontent.com/lebe24/fitness-nextui/master/src/assets/nextui.png"
  },
//   {
//       name:"3d Apple Store",
//       title:"Apple 3d Store Ui design",
//       git:"https://github.com/lebe24/3d",
//       link:"https://github.com/lebe24/3d",
//       image:"./assets/project-img/Apple.png"
//   },
    {
        name:"flutter iot ui",
        cat:'filter-mobile',
        title:"flutter iot design",
        git:"https://github.com/lebe24/flutter-iot-ui",
        link:" ",
        image:"./assets/img/portfolio/flutter-iot.gif"
    },
//   {
//       name:"nextjs portfolio",
//       title:"next portfolio app still in development",
//       git:"https://github.com/lebe24/lebepage-nextjs-portfolio",
//       link:"https://4mebp4.sse.codesandbox.io/",
//       image:"./assets/project-img/nextjspage.png"
//   },
  {
      name: "E-Card ",
      title: "A smart E-card Design",
      git:'https://codesandbox.io/s/fq9zcl',
      link: "https://fq9zcl.csb.app/",
      image: "./assets/img/portfolio/e-card.png"
  },
  {
      name:"Movie App",
      title:"movie app using react",
      cat:'filter-web',
      git:"https://codesandbox.io/s/1pd0zc",
      image:"./assets/img/portfolio/movie.png",
      link:"https://1pd0zc.csb.app/",

  },
  {
      name: "Happy new year UI",
      title: "countdown",
      cat:'filter-web',
      git:'https://codesandbox.io/s/sy0d0x?file=/index.html',
      link: "https://sy0d0x.csb.app/",
      image: "./assets/img/portfolio/happy.png"
  }, 
//   {
//       name: "TicTak UI",
//       title: "Playable tictak game",
//       link: "https://w7ljme.csb.app/",
//       image: "./assets/project-img/tiktac.png"
//   },
  
  {
      name: "Gotacha",
      cat:'filter-web',
      title: "just click the view",
      link: "https://3h7rmf.csb.app/",
      image: "./assets/img/portfolio/gotcha.png"
  },
  {
      name: "Fandom  UI",
      cat:'filter-web',
      git:'https://codesandbox.io/s/iwevks',
      title: "Demo for fangame Ui Design",
      link: "https://iwevks.csb.app/",
      image: "./assets/img/portfolio/mobile2.png"
  }
]

// 

Project.map((x)=>{
    document.getElementById('container').innerHTML += `

        <div class="col-lg-4 col-md-6 portfolio-item ${x.cat}">
            <div class="portfolio-wrap">
              <img src="${x.image}" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4>${x.name}</h4>
                <p>${x.title}</p>
                <div class="portfolio-links">
                  <a href="${x.git}" data-gallery="portfolioGallery" class="portfokio-lightbox" title="App 1"><i class="bi bi-github"></i></a>
                  <a href="${x.link}" title="view site"><i class="bi bi-globe"></i></a>
                </div>
              </div>
            </div>
          </div>
        
    `
})

document.getElementById('projx').innerHTML = `${Project[0].name}`;
