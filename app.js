new WOW().init();

var textWrapper = document.querySelector(".hero-title");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);
// $(document).ready(function() {
//   anime.timeline({ loop: false }).add({
//     targets: ".hero-title .letter",
//     translateY: [120, 0],
//     translateZ: 0,
//     opacity: [0, 1],
//     easing: "easeOutExpo",
//     duration: 1400,
//     delay: (el, i) => 2000 + 40 * i
//   });
// });

var t1 = new TimelineMax({ paused: true });

TweenMax.from(".hero-logo", 2, {
  y: 20,
  opacity: 0,
  ease: Expo.easeInOut,
  delay: 1
});

TweenMax.from(".menu-toggle", 2, {
  y: 20,
  opacity: 0,
  ease: Expo.easeInOut,
  delay: 1
});

TweenMax.from(".view-photos", 2, {
  y: 20,
  opacity: 0,
  ease: Expo.easeInOut,
  delay: 1.4
});

TweenMax.staggerFrom(
  ".media ul li",
  2,
  {
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut,
    delay: 1.6
  },
  0.1
);

t1.to(".overlay", 1, {
  opacity: 1,
  ease: Expo.easeInOut
});

t1.to(".view-photos, .media", 1, {
  opacity: 0,
  ease: Expo.easeInOut
});

t1.staggerFrom(
  ".menu ul li",
  1,
  { y: 100, opacity: 0, ease: Expo.easeOut },
  0.1
);

t1.reverse();
$(document).on("click", "li", function() {
  t1.reversed(!t1.reversed());
});

// menu

var close = document.querySelector(".close-btn")
var open = document.querySelector(".menu-toggle");
var menu = document.querySelector(".menuLink");


function toggleMenu () {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    open.classList.remove("hidden");
    close.classList.add("hidden");
  } else {
    menu.classList.add("showMenu");
    open.classList.add("hidden");
    close.classList.remove("hidden")
  }
}

// compte à rebours
function compte_a_rebours()
{
    var compte_a_rebours = document.getElementById("compte_a_rebours");

    var date_actuelle = new Date();
    var date_evenement = new Date("Jul 7 00:00:00 2021");
    var total_secondes = (date_evenement - date_actuelle) / 1000;

    var prefixe = "";
    if (total_secondes < 0)
    {
        prefixe = "Compte à rebours terminé il y a "; // On modifie le préfixe si la différence est négatif
        total_secondes = Math.abs(total_secondes); // On ne garde que la valeur absolue
    }

    if (total_secondes > 0)
    {
        var jours = Math.floor(total_secondes / (60 * 60 * 24));
        var heures = Math.floor((total_secondes - (jours * 60 * 60 * 24)) / (60 * 60));
        minutes = Math.floor((total_secondes - ((jours * 60 * 60 * 24 + heures * 60 * 60))) / 60);
        secondes = Math.floor(total_secondes - ((jours * 60 * 60 * 24 + heures * 60 * 60 + minutes * 60)));

        var et = "et";
        var mot_jour = "jours,";
        var mot_heure = "heures,";
        var mot_minute = "minutes,";
        var mot_seconde = "secondes";

       

        compte_a_rebours.innerHTML = prefixe + jours + ' ' + mot_jour + ' ' + heures + ' ' + mot_heure + ' ' + minutes + ' ' + mot_minute + ' ' + et + ' ' + secondes + ' ' + mot_seconde;
    }
    else
    {
        compte_a_rebours.innerHTML = 'Découvrez le projet, dès maintenant !';
    }

    var actualisation = setTimeout("compte_a_rebours();", 1000);
}
compte_a_rebours();

