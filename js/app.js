// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
// starting from v2 you can add only the features you need reducing the bundle size
$(document).ready(async function () {
    await loadFull(tsParticles);

    $("#tsparticles")
        .particles()
        .init(
            {
                background: {
                    color: {
                        value: "#E4E4E4FF",
                    },
                },
                fullscreen: {
                    enable: true,
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: false,
                            mode: "push",
                        },
                        onHover: {
                            enable: false,
                            mode: "repulse",
                        },
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#3A5A40",
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: true,
                        speed: 8,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                        },
                        value: 4,
                    },
                    opacity: {
                        value: 0.6,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: {min: 210, max: 210},
                    },
                },
                detectRetina: true,
            },
            function (container) {
                // container is the particles container where you can play/pause or stop/start.
                // the container is already started, you don't need to start it manually.
            },
        );
});


// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}




document.getElementById("more1").addEventListener("click", function () {
    document.getElementById("fullText1").style.display = "block";
    document.getElementById("more1").style.display = "none";
});
document.getElementById("more2").addEventListener("click", function () {
    document.getElementById("fullText2").style.display = "block";
    document.getElementById("more2").style.display = "none";
});
document.getElementById("more3").addEventListener("click", function () {
    document.getElementById("fullText3").style.display = "block";
    document.getElementById("more3").style.display = "none";
});


if (/Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // Код для мобильных устройств
} else {
    // Код для компьютеров
}





