const desktopLayout = window.matchMedia("(min-width: 1150px)");
const filterButton = document.querySelector(".mobile-filter");
const filterPopover = document.querySelector("#categories");
const filterSection = document.querySelector(".filter-section");
const filterScrollDistance = 750;
let previousScroll = window.scrollY;
let lastUpwardScroll = 0;

function updateStickyFilters() {
    const currentScroll = window.scrollY;
    if (currentScroll < previousScroll) {
        lastUpwardScroll = currentScroll;
    }

    const scrolledFarEnough = currentScroll - lastUpwardScroll >= filterScrollDistance;
    filterSection.classList.toggle("is-hidden", desktopLayout.matches && scrolledFarEnough);
    previousScroll = currentScroll;
}

function updateFilterButton() {
    filterButton.disabled = desktopLayout.matches;

    if (desktopLayout.matches && filterPopover.matches(":popover-open")) {
        filterPopover.hidePopover();
    }

    updateStickyFilters();
}

desktopLayout.addEventListener("change", updateFilterButton);
window.addEventListener("scroll", updateStickyFilters, { passive: true });
updateFilterButton();
