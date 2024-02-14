AOS.init();

var swiper = new Swiper(".mySwiper", {
	// Hanya satu slide yang ditampilkan pada tampilan mobile
	slidesPerView: 1,
	slidesCenter: true,
	centeredSlides: true,
	spaceBetween: 30,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	breakpoints: {
		900: {
			slidesPerView: 2,
		},
	},
});

// Marquee
function initializeMarquee() {
	createMarqueeContainer("latest-news");
	rotateMarquee(marqueeContainers);
}

window.onload = initializeMarquee;

function getObjectWidth(obj) {
	if (obj.offsetWidth) return obj.offsetWidth;
	if (obj.clip) return obj.clip.width;
	return 0;
}

const marqueeContainers = [];

function createMarqueeContainer(id) {
	const container = document.getElementById(id);
	const itemWidth =
		getObjectWidth(container.getElementsByTagName("span")[0]) + 5;
	const fullWidth = getObjectWidth(container);
	const textContent = container.getElementsByTagName("span")[0].innerHTML;
	container.innerHTML = "";
	const height = container.style.height;

	container.onmouseout = () => rotateMarquee(marqueeContainers);

	container.onmouseover = () =>
		cancelAnimationFrame(marqueeContainers[0].animationID);

	container.items = [];
	const maxItems = Math.ceil(fullWidth / itemWidth) + 1;

	for (let i = 0; i < maxItems; i++) {
		container.items[i] = document.createElement("div");
		container.items[i].innerHTML = textContent;
		container.items[i].style.position = "absolute";
		container.items[i].style.left = itemWidth * i + "px";
		container.items[i].style.width = itemWidth + "px";
		container.items[i].style.height = height;
		container.appendChild(container.items[i]);
	}

	marqueeContainers.push(container);
}

function rotateMarquee(containers) {
	if (!containers) return;

	for (let j = containers.length - 1; j > -1; j--) {
		const maxItems = containers[j].items.length;

		for (let i = 0; i < maxItems; i++) {
			const itemStyle = containers[j].items[i].style;
			itemStyle.left = parseInt(itemStyle.left, 10) - 1 + "px";
		}

		const firstItemStyle = containers[j].items[0].style;

		if (
			parseInt(firstItemStyle.left, 10) + parseInt(firstItemStyle.width, 10) <
			0
		) {
			const shiftedItem = containers[j].items.shift();
			shiftedItem.style.left =
				parseInt(shiftedItem.style.left) +
				parseInt(shiftedItem.style.width) * maxItems +
				"px";
			containers[j].items.push(shiftedItem);
		}
	}

	containers[0].animationID = requestAnimationFrame(() =>
		rotateMarquee(containers),
	);
}
// Hamburger and Copyright
const Hamburger = document.getElementById("hamburger");
const Menu = document.getElementById("menu");
const Close = document.getElementById("close");
const List = document.querySelector(".list");
const List2 = document.querySelector(".list-2");
const List3 = document.querySelector(".list-3");
const List4 = document.querySelector(".list-4");
const List5 = document.querySelector(".list-5");
// const Copyright = document.getElementById("copyright");

// Copyright.innerHTML = "&copy " + new Date().getFullYear() + " Desain by Abhisn";

Hamburger.addEventListener("click", () => {
	Menu.classList.toggle("animasi");
	Menu.classList.add("navbar-normal");
});

Close.addEventListener("click", () => {
	Menu.classList.remove("navbar-normal");
	Menu.classList.toggle("animasi");
});

List.addEventListener("click", () => {
	Menu.classList.toggle("animasi");
});
List2.addEventListener("click", () => {
	Menu.classList.toggle("animasi");
});
List3.addEventListener("click", () => {
	Menu.classList.toggle("animasi");
});
List4.addEventListener("click", () => {
	Menu.classList.toggle("animasi");
});
