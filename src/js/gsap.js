// TweenMax.to(".rotating-blocks", 2, {
//   rotation:360, 
//   transformOrigin:"50% 50%"
// });

$(function () {
   TweenMax.to(".rotating-blocks", 6, {
     rotation: 360,
     transformOrigin: "50% 50%",
     ease: Linear.easeNone,
     repeat: -1
   });

   // TweenMax.fromTo(".shaft-anim", 1, 
   //     {rotation: -10}, 
   //     {rotation: 10,repeat: -1,yoyo: true,repeatDelay:0.5,ease: Linear.easeNone,});
   
})();