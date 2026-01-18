(() => {
  const filterButtons = Array.from(document.querySelectorAll(".portfolio-filter__button"));
  const cards = Array.from(document.querySelectorAll(".portfolio-card"));

  if (!filterButtons.length || !cards.length) {
    return;
  }

  const emptyMessages = Array.from(document.querySelectorAll(".portfolio-empty"));
  const sections = Array.from(document.querySelectorAll(".portfolio-section"));

  const setActiveButton = (activeButton) => {
    filterButtons.forEach((button) => {
      const isActive = button === activeButton;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  };

  const updateCounts = () => {
    const counts = cards.reduce(
      (acc, card) => {
        const category = card.dataset.category;
        acc.all += 1;
        acc[category] = (acc[category] || 0) + 1;
        return acc;
      },
      { all: 0 }
    );

    filterButtons.forEach((button) => {
      const count = counts[button.dataset.filter] ?? 0;
      const countEl = button.querySelector(".portfolio-filter__count");
      if (countEl) {
        countEl.textContent = `(${count})`;
      }
    });
  };

  const applyFilter = (filter) => {
    let anyVisible = false;

    cards.forEach((card) => {
      const match = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("is-hidden", !match);
      card.hidden = !match;
      if (match) {
        anyVisible = true;
      }
    });

    if (sections.length) {
      sections.forEach((section) => {
        const sectionCards = Array.from(section.querySelectorAll(".portfolio-card"));
        const sectionMatch = sectionCards.some((card) => {
          return filter === "all" || card.dataset.category === filter;
        });
        const sectionEmpty = section.querySelector(".portfolio-empty");
        if (sectionEmpty) {
          sectionEmpty.hidden = sectionMatch;
        }
      });

      emptyMessages
        .filter((message) => !message.closest(".portfolio-section"))
        .forEach((message) => {
          message.hidden = anyVisible;
        });
    } else {
      emptyMessages.forEach((message) => {
        message.hidden = anyVisible;
      });
    }
  };

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter || "all";
      setActiveButton(button);
      applyFilter(filter);
    });
  });

  updateCounts();
})();
