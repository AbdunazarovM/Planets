Vue.component("planets", {
  template: `
    <div>
      <header class="site-header">
        <h1 class="visually-hidden">THE PLANETS</h1>
        <div class="site-header__container container">
          <div class="nav-logos">
            <a class="logo" href="#">
              <img class="logo-img" src="img/logo.svg" alt="site logo">
            </a>

            <button class="burger" @click="showNav = !showNav"></button>
          </div>
    
          <nav class="navbar" :class="{'show-nav': showNav}">
        
            <ul class="navbar-list">
              <li class="navbar-item" 
              v-for="planet in planetsMenu">
                <span class="navbar-tab"
                @click="selectedPlanet = planet" @click="[selectedPlanet = planet, showNav = !showNav]"
                :style="[selectedPlanet == planet? {'color': planets[selectedPlanet].backgroundColor}: {color: '#fff'}]">{{ planet }}</span>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <div class="container main__container">
          <div class="wrapper-img">
          <img :src="planets[selectedPlanet][selectedButton].img" :alt="planets[selectedPlanet][selectedButton].imgAlt" width="400" height="400">
          </div>
          <section class="info-section">
            <div class="info-text">
              <h2 class="planet-name">{{ planets[selectedPlanet].name }}</h2>
              <p class="planet-info">{{ planets[selectedPlanet][selectedButton].text }}</p>
              <p class="planet-info-source">Source : <a class="wikipedia" href="#">Wikipedia</a></p>
            </div>
            
            <ul class="tab-list">
              <li class="tab-item"
              v-for="(tab,index) in planetStructure"
              @click="selectedButton = tab" 
              :class="{active:selectedButton==tab}"
              :style="[selectedButton === tab? {'background-color': planets[selectedPlanet].backgroundColor}: {color: '#fff'}]"
              >
                <p class="tab-text"><span>0{{ ++index }}</span>{{ tab }}</p>
              </li>
            </ul>
            
          </section>
        </div>

        <div class="main-footer">
          <div class="main-footer__container container">
            <ul class="main-footer__list">
              <li class="main-footer__item"
              v-for="infoPlanets in infoPlanet">
                <p class="main-footer__title">{{ infoPlanets }}</p>
                <p class="main-footer__caption">{{ planets[selectedPlanet].info[infoPlanets] }}</p>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  `,
  data() {
    return {
      planetsMenu: [
        "Mercury",
        "Venus",
        "Earth",
        "Mars",
        "Jupiter",
        "Saturn",
        "Uranus",
        "Neptune",
      ],
      planetStructure: ["overview", "internal structure", "surface geology"],
      infoPlanet: [
        "rotation time",
        "revolution time",
        "radius",
        "average temp",
      ],
      selectedPlanet: 'Mercury',
      selectedButton: "overview",
      showNav: false,
      planets: {
        "Mercury": {
          name: "Mercury",
          wikipediaLink: "https://wikipedia.com",
          backgroundColor: "#419Ebb",
          "overview": {
            text: "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
            img: "/img/mercuriy.png",
            imgAlt: "mercuriy planet image",
          },
          "internal structure": {
            text: "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
            img: "/img/mercuriy-structure.png",
            imgAlt: "mercuriy image",
          },
          "surface geology": {
            text: "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
            img: "/img/mercuriy-geo.png",
            imgAlt: "mercuriy surface image",
          },
          "info": {
            "rotation time": "58.6 days",
            "revolution time": "87.97 days",
            "radius": "2,439.7 km",
            "average temp": "430°c",
          },
        },
        "Venus": {
          name: "Venus",
          wikipediaLink: "https://wikipedia.com",
          backgroundColor: "#eda249",
          "overview": {
            text: "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
            img: "/img/venus.png",
            imgAlt: "venus planet image",
          },
          "internal structure": {
            text: "The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.",
            img: "/img/venus-structure.png",
            imgAlt: "venus planet structure",
          },
          "surface geology": {
            text: "Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.",
            img: "/img/venus-geo.png",
            imgAlt: "venus planet surface",
          },
          info: {
            "rotation time": "243 days",
            "revolution time": "224.7 days",
            "radius": "6,051.8 km",
            "average temp": "471°c",
          },
        },
        "Earth": {
          name: "Earth",
          wikipediaLink: "https://wikipedia.com",
          backgroundColor: "#6d2ed5",
          "overview": {
            text: "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
            img: "/img/earth.png",
            imgAlt: "Earth planet image",
          },
          "internal structure": {
            text: "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.",
            img: "/img/earth-structure.png",
            imgAlt: "Earth planet structure",
          },
          "surface geology": {
            text: "The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.",
            img: "/img/earth-geo.png",
            imgAlt: "Earth planet surface",
          },
          info: {
            "rotation time": "0.99 days",
            "revolution time": "365.26 days",
            "radius": "6,371 km",
            "average temp": "16°c",
          },
        },
        "Mars": {
          name: "Mars",
          wikipediaLink: "https://wikipedia.com",
          backgroundColor: "#d14c32",
          "overview": {
            text: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the 'Red Planet'.",
            img: "/img/Mars.png",
            imgAlt: "Mars planet image",
          },
          "internal structure": {
            text: "Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.",
            img: "/img/Mars-structure.png",
            imgAlt: "Mars planet structure",
          },
          "surface geology": {
            text: "Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.",
            img: "/img/Mars-geo.png",
            imgAlt: "Mars planet surface",
          },
          info: {
            "rotation time": "1.03 days",
            "revolution time": "1.88 years",
            "radius": "3,389.5 km",
            "average temp": "-28°c",
          },
        },
        "Jupiter": {
          name: "Jupiter",
          wikipediaLink: "https://wikipedia.com",
          backgroundColor: "#d83a34",
          "overview": {
            text: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.",
            img: "/img/Jupiter.png",
            imgAlt: "Jupiter planet image",
          },
          "internal structure": {
            text: "When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.",
            img: "/img/Jupiter-structure.png",
            imgAlt: "Jupiter planet structure",
          },
          "surface geology": {
            text: "The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.",
            img: "/img/Jupiter-geo.png",
            imgAlt: "Jupiter planet surface",
          },
          info: {
            "rotation time": "9.93 hours",
            "revolution time": "11.86 years",
            "radius": "69,911 km",
            "average temp": "-108°c",
          },
        },
        "Saturn": {
          name: "Saturn",
          wikipediaLink: "https://wikipedia.com",
          backgroundColor: "#cd5120",
          "overview": {
            text: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.",
            img: "/img/Saturn.png",
            imgAlt: "Saturn planet image",
          },
          "internal structure": {
            text: "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.",
            img: "/img/Saturn-structure.png",
            imgAlt: "Saturn planet structure",
          },
          "surface geology": {
            text: "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust. ",
            img: "/img/Saturn-geo.png",
            imgAlt: "Saturn planet surface",
          },
          info: {
            "rotation time": "10.8 hours",
            "revolution time": "29.46 years",
            "radius": "58,232 km",
            "average temp": "-138°c",
          },
        },
        "Uranus": {
          name: "Uranus",
          wikipediaLink: "https://wikipedia.com",
          backgroundColor: "#1ec1a2",
          "overview": {
            text: "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
            img: "/img/Uranus.png",
            imgAlt: "Uranus planet image",
          },
          "internal structure": {
            text: "The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.",
            img: "/img/Uranus-structure.png",
            imgAlt: "Uranus planet structure",
          },
          "surface geology": {
            text: "The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.",
            img: "/img/Uranus-geo.png",
            imgAlt: "Uranus planet surface",
          },
          info: {
            "rotation time": "17.2 hours",
            "revolution time": "84 years",
            "radius": "25,362 km",
            "average temp": "-195°c",
          },
        },
        "Neptune": {
          name: "Neptune",
          wikipediaLink: "https://wikipedia.com",
          backgroundColor: "#2d68f0",
          "overview": {
            text: "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.",
            img: "/img/Neptune.png",
            imgAlt: "Neptune planet image",
          },
          "internal structure": {
            text: "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.",
            img: "/img/Neptune-structure.png",
            imgAlt: "Neptune planet structure",
          },
          "surface geology": {
            text: "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.",
            img: "/img/Neptune-geo.png",
            imgAlt: "Neptune planet surface",
          },
          info: {
            "rotation time": "16.8 hours",
            "revolution time": "164.79 years",
            "radius": "24,622 km",
            "average temp": "-201°c",
          },
        },
      },
    };
  },
});

var app = new Vue({
  el: "#app",
});
