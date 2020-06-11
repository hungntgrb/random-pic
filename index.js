const datas = [
  {
    id: 1,
    image: "url('https://picsum.photos/id/1040/300')",
    title: "Proin tempus",
    description:
      "Pellentesque ac tortor diam. Integer eu rutrum risus. Aliquam vehicula vulputate justo, ut posuere orci mollis in. Mauris vel placerat quam. Cras non lectus eget nisi sollicitudin tempus egestas sed leo. Donec dictum urna et neque rutrum, id venenatis massa blandit. Aenean ex neque, posuere ut dui id, viverra imperdiet felis.",
  },
  {
    id: 2,
    image: "url('https://picsum.photos/id/1011/300/')",
    title: " Morbi tristique",
    description:
      "Aenean quis volutpat diam. Proin velit purus, facilisis et ullamcorper sit amet, lobortis in enim. Mauris sagittis posuere vehicula. Aenean sed molestie dolor. Cras sit amet placerat orci. Fusce sed maximus lectus, non iaculis ipsum. Nullam tortor arcu, mollis maximus rhoncus eu, ullamcorper non diam.",
  },
  {
    id: 3,
    image: "url('https://picsum.photos/id/267/300/')",
    title: "Quisque et",
    description:
      "In hac habitasse platea dictumst. Etiam volutpat posuere nisi at convallis. Curabitur quis velit vel magna varius placerat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat ante magna, et condimentum diam condimentum ultrices.",
  },
  {
    id: 4,
    image: "url('https://picsum.photos/id/103/300/')",
    title: "Vestibulum consequat",
    description:
      "Donec feugiat est sapien. Ut suscipit orci eu lectus rutrum vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nulla lorem, vulputate et neque nec, condimentum pharetra erat. Aliquam cursus diam sed est mollis sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  {
    id: 5,
    image: "url('https://picsum.photos/id/1047/300')",
    title: "Aliquam cursus",
    description:
      "Donec feugiat est sapien. Ut suscipit orci eu lectus rutrum vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nulla lorem, vulputate et neque nec, condimentum pharetra erat. Aliquam cursus diam sed est mollis sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  {
    id: 6,
    image: "url('https://picsum.photos/id/106/300')",
    title: "Suspendisse ",
    description:
      "Donec feugiat est sapien. Ut suscipit orci eu lectus rutrum vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nulla lorem, vulputate et neque nec, condimentum pharetra erat. Aliquam cursus diam sed est mollis sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  {
    id: 7,
    image: "url('https://picsum.photos/id/112/300')",
    title: "Mauris vel",
    description:
      "Donec feugiat est sapien. Ut suscipit orci eu lectus rutrum vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nulla lorem, vulputate et neque nec, condimentum pharetra erat. Aliquam cursus diam sed est mollis sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  {
    id: 8,
    image: "url('https://picsum.photos/id/134/300')",
    title: "Pellentesque eu",
    description:
      "Donec feugiat est sapien. Ut suscipit orci eu lectus rutrum vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nulla lorem, vulputate et neque nec, condimentum pharetra erat. Aliquam cursus diam sed est mollis sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
];

const len = datas.length;

currentNum = 0;

const image = document.querySelector(".main-img");
const title = document.getElementById("title");
const description = document.getElementById("description");

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const randomBtn = document.getElementById("random-btn");

function display() {
  item = datas[currentNum];
  image.style.backgroundImage = item.image;
  title.textContent = item.title;
  description.textContent = item.description;
}

nextBtn.addEventListener("click", function () {
  currentNum = (currentNum + 1) % len;
  display();
});

prevBtn.addEventListener("click", function () {
  currentNum = (currentNum - 1 + len) % len;
  display();
});

randomBtn.addEventListener("click", function () {
  currentNum = Math.floor(Math.random() * len);
  display();
});
