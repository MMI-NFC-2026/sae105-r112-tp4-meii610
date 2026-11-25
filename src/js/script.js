// *** ACCORDEON ***

const accordeon = document.querySelector(".accordeon");

accordeon?.querySelectorAll("summary").forEach((summary) => {
  summary.addEventListener("click", () => {
    const details = summary.closest("details");

    accordeon.querySelectorAll("details").forEach((item) => {
      if (item !== details) {
        item.open = false;
      }
    });
  });
});
