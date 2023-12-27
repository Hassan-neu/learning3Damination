import { Application } from "@splinetool/runtime";
gsap.registerPlugin(ScrollTrigger);
const letters = gsap.utils.toArray([
    ":is(.text-top,.text-mid, .text-end, .small-text) > span",
    ".text-dots",
]);
const grids = gsap.utils.toArray([
    ".hero-bottom--wrapper > div ",
    ".navigation",
]);
const smallBlocks = gsap.utils.toArray(".about-bigText span");
const smallDesc = gsap.utils.toArray([".desc-left", ".desc-right"]);
const contactInfo = gsap.utils.toArray([".contact-copy", ".contact-details"]);
const contactMore = gsap.utils.toArray(".contact-more > div");
const socials = gsap.utils.toArray(".header-left a");
const canvas = document.getElementById("canvas3d");
const app = new Application(canvas);
app.load("https://prod.spline.design/NvPihkNOAfnYssG0/scene.splinecode").then(
    () => {
        const tl = gsap.timeline({});
        const sodaCan = app.findObjectByName("can");
        gsap.set(sodaCan.position, {
            y: 45,
            x: 0,
            z: 0,
        });
        gsap.to(sodaCan.position, {
            y: 0,
            x: 0,
            z: 0,
            yoyo: true,
            repeat: -1,
            duration: 10,
            ease: 'sine.inOut",',
        });
        const initialRotation = gsap.to(sodaCan.rotation, {
            duration: 10,
            x: 0,
            y: Math.PI * 0.5 + sodaCan.rotation.y,
            z: Math.PI * 0.05 + sodaCan.rotation.z,
            repeat: -1,
            yoyo: true,
            ease: "none",
        });
        tl.to(sodaCan.rotation, {
            x: Math.PI * 2 + sodaCan.rotation.x,
            y: Math.PI * 0.5 + sodaCan.rotation.y,
            z: Math.PI * 0.05 + sodaCan.rotation.z,
            scrollTrigger: {
                trigger: ".hero",
                start: "top top",
                end: "+=1000px",
                scrub: true,
                onToggle: (self) =>
                    self.isActive ? initialRotation.kill() : null,
            },
        });
        tl.to(sodaCan.rotation, {
            y: Math.PI * 2 + sodaCan.rotation.y,
            duration: 0.6,
        });
        tl.to(sodaCan.rotation, {
            y: Math.PI * 2 + sodaCan.rotation.y,
            z: Math.PI * 0.5 + sodaCan.rotation.z,
            scrollTrigger: {
                trigger: ".about",
                start: "top 20%",
                endTrigger: ".contact-content",
                end: "top 10%",
                scrub: true,
            },
        });
    }
);
gsap.to(".canvas-wrapper", {
    y: "49.25vw",
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "+=900",
        scrub: true,
    },
});
gsap.fromTo(
    ".canvas-wrapper",
    {
        y: "49.25vw",
        immediateRender: false,
    },
    {
        y: "128.25vw",
        immediateRender: false,
        scrollTrigger: {
            trigger: ".about",
            start: "top 30%",
            endTrigger: ".contact-content",
            end: "top 20%",
            scrub: true,
        },
    }
);
ScrollTrigger.create({
    trigger: ".gallery",
    start: "-400px 40%",
    end: "35% 40%",
    onEnter: () =>
        document.querySelector(".side-semi").classList.add("invisible"),
    onLeave: () =>
        document.querySelector(".side-semi").classList.remove("invisible"),
    onEnterBack: () =>
        document.querySelector(".side-semi").classList.add("invisible"),
    onLeaveBack: () =>
        document.querySelector(".side-semi").classList.remove("invisible"),
});

gsap.from(letters, {
    yPercent: -100,
    duration: 0.3,
    autoAlpha: 0,
    stagger: {
        each: 0.01,
    },
});
gsap.from(".spinner", {
    y: 100,
    autoAlpha: 0,
});
gsap.from(socials, {
    yPercent: -100,
    duration: 0.2,
    autoAlpha: 0,
    stagger: {
        each: 0.2,
    },
});
gsap.from(grids, {
    yPercent: 50,
    autoAlpha: 0,
    stagger: {
        each: 0.3,
    },
    scrollTrigger: {
        trigger: ".hero-bottom",
        start: "top 30%",
    },
});
const aboutDivs = gsap.utils.toArray([".about-container", ".about-empty"]);
gsap.to(aboutDivs, {
    y: -200,
    scrollTrigger: {
        trigger: ".about",
        start: "top 90%",
        scrub: 1,
        onEnter: (scroll) => scroll.trigger.classList.add("active"),
        onLeaveBack: (scroll) => scroll.trigger.classList.remove("active"),
        onUpdate: (scroll) => {
            document.documentElement.style.setProperty(
                "--gap",
                `${scroll.progress * 5.4}rem`
            );
        },
    },
});
ScrollTrigger.create({
    trigger: ".about",
    start: "-200px top",
    end: () => "+=" + document.querySelector(".about").offsetHeight,
    onEnter: () => document.querySelector(".header").classList.add("dark"),
    onLeave: () => document.querySelector(".header").classList.remove("dark"),
    onEnterBack: () => document.querySelector(".header").classList.add("dark"),
    onLeaveBack: () =>
        document.querySelector(".header").classList.remove("dark"),
});

gsap.from(smallBlocks, {
    y: 100,
    autoAlpha: 0,
    scrollTrigger: {
        trigger: ".about",
        start: "top 70%",
        end: "bottom 50%",
    },
});
gsap.from(smallDesc, {
    y: 100,
    autoAlpha: 0,
    scrollTrigger: {
        trigger: ".about",
        start: "top 70%",
        end: "bottom 50%",
    },
});
const contactDivs = gsap.utils.toArray([".contact-empty", ".contact"]);
gsap.to(contactDivs, {
    y: -550,
    scrollTrigger: {
        trigger: ".about",
        start: "bottom 80%",
        endTrigger: ".contact",
        end: "bottom bottom",
        id: "contact",
        scrub: true,
    },
});
gsap.from(contactInfo, {
    y: 100,
    autoAlpha: 0,
    scrollTrigger: {
        trigger: ".contact-content",
        start: "top 20%",
        end: "bottom 50%",
    },
});
gsap.from(contactMore, {
    y: 100,
    autoAlpha: 0,
    scrollTrigger: {
        trigger: ".contact-more",
        start: "top 80%",
        id: "contact-more",
    },
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        document.querySelector(".header").classList.add("scrolled");
    } else {
        document.querySelector(".header").classList.remove("scrolled");
    }
});
const lenis = new Lenis();

// lenis.on("scroll", (e) => {
//     console.log(e);
// });

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
