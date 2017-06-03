//Triangles with filled trianlges
var particle_1 = "img/icons/logo-triangle.png";
var particle_2 = "img/icons/logo-triangle-2.png";

var particl_sz_1;
var particl_sz_1_min;
var number;
var number_2;
var size_speed_1 = 0;

var speed_1;
var ht;
var wd;


if (window.matchMedia('(max-width: 767px)').matches) {
    ht = 25;
    wd = 25;
	number = number_2 = 20;
    particl_sz_1 = 30;
    particl_sz_1_min = 10;

    speed_1 = 4;
}else{
    ht = 700;
    wd = 700;
	number = number_2 = 5;
    particl_sz_1 = 50;
    particl_sz_1_min = 40;
    speed_1 = 2;
}

particlesJS("particle-1", {
  "particles": {
    "number": {
      "value": number,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "image",

      "polygon": {
        "nb_sides": 0
      },
      "image": {
        "src": particle_1,
        "width": wd,
        "height": ht
      }
    },
    "opacity": {
      "value": 0.8,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": particl_sz_1,
      "random": true,
      "anim": {
        "enable": false,
        "speed": size_speed_1,
        "size_min": particl_sz_1_min,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": speed_1,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "grab"
      },
      "onclick": {
        "enable":false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

/*------------------------Triangles with only stroke------------------------*/
particlesJS("particle-2", {
  "particles": {
    "number": {
      "value": number_2,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "image",

      "polygon": {
        "nb_sides": 0
      },
      "image": {
        "src": particle_2,
        "width": wd,
        "height": ht
      }
    },
    "opacity": {
      "value": 0.8,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": particl_sz_1,
      "random": true,
      "anim": {
        "enable": false,
        "speed": size_speed_1,
        "size_min": particl_sz_1_min,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": speed_1,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "grab"
      },
      "onclick": {
        "enable":false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});