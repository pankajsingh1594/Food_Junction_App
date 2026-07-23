// Image CDN URL
export const IMAGE_CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

// Filtering function
export function filterData(search, restaurantList) {
  const filter = restaurantList?.filter((res) => {
    return res?.info?.name.toLowerCase().includes(search.toLowerCase());
  });
  return filter;
}

// Sort by rating function
export function sortByRating(restaurantList) {
  const sortedtList = restaurantList?.toSorted((a, b) => {
    return b?.info?.avgRating - a?.info?.avgRating;
  });
  return sortedtList;
}

// Sort by name function
export function sortByName(restaurantList) {
  const sortedList = restaurantList?.toSorted((a, b) => {
    const x = a?.info?.name;
    const y = b?.info?.name;
    if (x < y) return -1;
    if (x > y) return 1;
    return 0;
  });
  return sortedList;
}

// Scroll button function
export function ScrollButton() {
  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // 'auto' for instant jump, 'smooth' for animation
    });
  };
  return handleScrollUp;
}
