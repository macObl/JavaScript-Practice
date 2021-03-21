new fullpage("#fullpage", {
  autoScrolling: true,
  navigation: true,
  onLeave: (origin, destination, direction) => {
    const section = destination.item;
    const title = section.querySelector("h1");
    const t1 = new TimelineMax({ delay: 0.5 });
    t1.fromTo(title, 0.5, { y: "50", opacity: 0 }, { y: 0, opacity: 1 });

    if (destination.index === 1) {
      const chairs = document.querySelectorAll(".chair");
      const discription = document.querySelector(".description");

      t1.fromTo(chairs, 0.7, { x: "100%" }, { x: "-35%" })
        // .fromTo(destination, 0.5. {y: "50", opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo(chairs[0], 1, { opacity: 1 }, { opacity: 1 })
        .fromTo(chairs[1], 1, { opacity: 0 }, { opacity: 1 })
        .fromTo(chairs[2], 1, { opacity: 0 }, { opacity: 1 });
    }
  },
});
