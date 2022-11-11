let body = document.querySelector("body");

let photos = [
  "https://images.indianexpress.com/2018/03/on-my-block-759.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/3/38/Stranger_Things_logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Grey%27s_Anatomy_Logo.svg/480px-Grey%27s_Anatomy_Logo.svg.png",
  "http://thelovelymusings.com/wp-content/uploads/2021/01/umbrella-academy.jpg",
  "https://deadline.com/wp-content/uploads/2019/05/thisisus-keyart.jpg",
  "https://occ-0-360-1380.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABYxJFBDckfZw1YUEIPwyuIg43Kw_HUBLvnCcgdOlvvf5Nc90SF3HSAi5L8uLyBqjziKBY-kGD2wu2JAqVsdHVR0frb6qG26I_U5v.jpg?r=77f"
];

body.insertAdjacentHTML("beforeend", `<img src=${photos[0]}>`);
body.insertAdjacentHTML("beforeend", `<img src=${photos[1]}>`);
body.insertAdjacentHTML("beforeend", `<img src=${photos[2]}>`);
body.insertAdjacentHTML("beforeend", `<img src=${photos[3]}>`);
body.insertAdjacentHTML("beforeend", `<img src=${photos[4]}>`);
body.insertAdjacentHTML("beforeend", `<img src=${photos[5]}>`);
// task 1: using the example on line 11, write the
//    code for each of the remaining images in the
//    array photos.

// task 2: push a picture of your favorite TV show
//    to the array and write the code to display it.
