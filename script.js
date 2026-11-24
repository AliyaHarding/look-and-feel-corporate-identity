const desktopLayout = window.matchMedia("(min-width: 1150px)");
const filterButton = document.querySelector(".mobile-filter");
const filterPopover = document.querySelector("#categories");

function updateFilterButton() {
    filterButton.disabled = desktopLayout.matches;

    if (desktopLayout.matches && filterPopover.matches(":popover-open")) {
        filterPopover.hidePopover();
    }
}

desktopLayout.addEventListener("change", updateFilterButton);
updateFilterButton();
