var crsr = document.querySelector("#cursor")
var crsr_blur = document.querySelector("#cursor_blur")
document.addEventListener("mousemove", function(dets){
  crsr.style.left = dets.x + "px"
  crsr.style.top = dets.y + "px"
  crsr_blur.style.left = dets.x- 100 + "px"
  crsr_blur.style.top = dets.y- 100 + "px"
    
});

gsap.to("#nav", {
    backgroundColor: "rgba(90, 227, 60, 0.5)", /* Existing green background */
    backdropFilter: "blur(10px)", /* Apply blur effect */
    webkitBackdropFilter: "blur(10px)", /* For Safari compatibility */
    height: "120px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#page1",
        scroller: "body",
        markers: false,  
        start: "top -10%",
        end: "top -11%",  
        scrub: 1
    }
});


gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        markers: false,
        start: "top -25vh",
        end: "top -70vh",
        scrub: 3
    }
})