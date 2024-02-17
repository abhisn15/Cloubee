AOS.init();

// Navbar ketika klik akan berubah warna
$("a.link").click(function () {
	$("a.link").css("color", "white");
	$("a.link").css("border-bottom", "2px");
	$(this).css("border-bottom", "2px solid white");
	$(this).css("color", "rgba(255, 255, 255, 0.6)");
});

//navbar Dropdown
const DropdownContent = document.querySelector(".dropdown-content-mobile");
const Dropdown = document.querySelector(".list-dropdown");

Dropdown.addEventListener("click", () => {
	DropdownContent.classList.toggle("hidden");
});

// SwiperJS
var swiper = new Swiper(".mySwiper", {
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
const List6 = document.querySelector(".list-6");
const Copyright = document.getElementById("copyright");

Copyright.innerHTML =
	"All Rights Reserved &copy; Cloubee " + new Date().getFullYear();

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
List5.addEventListener("click", () => {
	Menu.classList.toggle("animasi");
});
List6.addEventListener("click", () => {
	Menu.classList.toggle("animasi");
});

// Deskripsi selengkapnya dan sembunyikan
function selengkapnyaPembangunanMasjid() {
	var extraDesk = document.querySelector(".extra-desk-masjid");
	var Card = document.querySelector(".bangun-masjid");
	var readMore = document.querySelector(".selengkapnya-pembangunan-masjid");

	if (extraDesk.classList.contains("hidden")) {
		extraDesk.classList.remove("hidden");
		Card.classList.add("h-[700px]");
		readMore.textContent = "Sembunyikan";
	} else {
		extraDesk.classList.add("hidden");
		Card.classList.remove("h-[700px]");
		readMore.textContent = "Selengkapnya...";
	}
}
function selengkapnyaPengobatanKanker() {
	var extraDesk = document.querySelector(".extra-desk-pengobatan-kanker");
	var readMore = document.querySelector(".selengkapnya-pengobatan-kanker");
	var Card = document.querySelector(".pengobatan-kanker");

	if (extraDesk.classList.contains("hidden")) {
		extraDesk.classList.remove("hidden");
		Card.classList.add("h-[850px]");
		readMore.textContent = "Sembunyikan";
	} else {
		Card.classList.remove("h-[850px]");
		extraDesk.classList.add("hidden");
		readMore.textContent = "Selengkapnya...";
	}
}
function selengkapnyaKesembuhanHafizd() {
	var extraDesk = document.querySelector(".extra-desk-kesembuhan");
	var readMore = document.querySelector(".selengkapnya-kesembuhan-hafizd");
	var Card = document.querySelector(".bantu-kesembuhan-hafidz");

	if (extraDesk.classList.contains("hidden")) {
		extraDesk.classList.remove("hidden");
		Card.classList.add("h-[900px]");
		readMore.textContent = "Sembunyikan";
	} else {
		extraDesk.classList.add("hidden");
		Card.classList.remove("h-[900px]");
		readMore.textContent = "Selengkapnya...";
	}
}
function selengkapnyaBantuDengar() {
	var extraDesk = document.querySelector(".extra-desk-bantu-dengar");
	var readMore = document.querySelector(".selengkapnya-bantu-dengar");
	var Card = document.querySelector(".hadiah-bantu-dengar");

	if (extraDesk.classList.contains("hidden")) {
		extraDesk.classList.remove("hidden");
		Card.classList.add("h-[1000px]");
		readMore.textContent = "Sembunyikan";
	} else {
		extraDesk.classList.add("hidden");
		Card.classList.remove("h-[1000px]");
		readMore.textContent = "Selengkapnya...";
	}
}
function selengkapnyaSedekahSubuh() {
	var extraDesk = document.querySelector(".extra-desk-sedekah");
	var readMore = document.querySelector(".selengkapnya-sedekah-subuh");
	var Card = document.querySelector(".sedekah-subuh");

	if (extraDesk.classList.contains("hidden")) {
		extraDesk.classList.remove("hidden");
		Card.classList.add("h-[1000px]");
		readMore.textContent = "Sembunyikan";
	} else {
		extraDesk.classList.add("hidden");
		Card.classList.remove("h-[1000px]");
		readMore.textContent = "Selengkapnya...";
	}
}
function selengkapnyaBantuDengar() {
	var extraDesk = document.querySelector(".extra-desk-bantu-dengar");
	var readMore = document.querySelector(".selengkapnya-bantu-dengar");
	var Card = document.querySelector(".hadiah-bantu-dengar");

	if (extraDesk.classList.contains("hidden")) {
		extraDesk.classList.remove("hidden");
		Card.classList.add("h-[900px]");
		readMore.textContent = "Sembunyikan";
	} else {
		extraDesk.classList.add("hidden");
		Card.classList.remove("h-[900px]");
		readMore.textContent = "Selengkapnya...";
	}
}
function selengkapnyaBantuDifabel() {
	var extraDesk = document.querySelector(".extra-desk-bantu-difabel");
	var readMore = document.querySelector(".selengkapnya-bantu-difabel");
	var Card = document.querySelector(".bantu-difabel");

	if (extraDesk.classList.contains("hidden")) {
		extraDesk.classList.remove("hidden");
		Card.classList.add("h-[1000px]");
		readMore.textContent = "Sembunyikan";
	} else {
		extraDesk.classList.add("hidden");
		Card.classList.remove("h-[1000px]");
		readMore.textContent = "Selengkapnya...";
	}
}
//  Mobile Version
function selengkapnyaPembangunanMasjidMobile() {
	var extraDesk = document.querySelector(".extra-desk-masjid-mobile");
	var Card = document.querySelector(".bangun-masjid-mobile");
	var readMore = document.querySelector(
		".selengkapnya-pembangunan-masjid-mobile",
	);

	if (extraDesk.classList.contains("hidden")) {
		extraDesk.classList.remove("hidden");
		Card.classList.add("h-[640px]");
		readMore.textContent = "Sembunyikan";
	} else {
		extraDesk.classList.add("hidden");
		Card.classList.remove("h-[640px]");
		readMore.textContent = "Selengkapnya...";
	}
}
function selengkapnyaPengobatanKankerMobile() {
	var extraDesk = document.querySelector(
		".extra-desk-pengobatan-kanker-mobile",
	);
	var readMore = document.querySelector(
		".selengkapnya-pengobatan-kanker-mobile",
	);
	var Card = document.querySelector(".pengobatan-kanker-mobile");

	if (extraDesk.classList.contains("hidden")) {
		extraDesk.classList.remove("hidden");
		Card.classList.add("h-[780px]");
		readMore.textContent = "Sembunyikan";
	} else {
		Card.classList.remove("h-[780px]");
		extraDesk.classList.add("hidden");
		readMore.textContent = "Selengkapnya...";
	}
}
function selengkapnyaKesembuhanHafizdMobile() {
	var extraDesk = document.querySelector(".extra-desk-kesembuhan-mobile");
	var readMore = document.querySelector(
		".selengkapnya-kesembuhan-hafizd-mobile",
	);
	var Card = document.querySelector(".bantu-kesembuhan-hafidz-mobile");

	if (extraDesk.classList.contains("hidden")) {
		extraDesk.classList.remove("hidden");
		Card.classList.add("h-[800px]");
		readMore.textContent = "Sembunyikan";
	} else {
		extraDesk.classList.add("hidden");
		Card.classList.remove("h-[800px]");
		readMore.textContent = "Selengkapnya...";
	}
}
function selengkapnyaSedekahSubuhMobile() {
	var extraDesk = document.querySelector(".extra-desk-sedekah-mobile");
	var readMore = document.querySelector(".selengkapnya-sedekah-subuh-mobile");
	var Card = document.querySelector(".sedekah-subuh-mobile");

	if (extraDesk.classList.contains("hidden")) {
		extraDesk.classList.remove("hidden");
		Card.classList.add("h-[910px]");
		readMore.textContent = "Sembunyikan";
	} else {
		extraDesk.classList.add("hidden");
		Card.classList.remove("h-[910px]");
		readMore.textContent = "Selengkapnya...";
	}
}

function selengkapnyaBantuDengarMobile() {
	var extraDesk = document.querySelector(".extra-desk-bantu-dengar-mobile");
	var readMore = document.querySelector(".selengkapnya-bantu-dengar-mobile");
	var Card = document.querySelector(".hadiah-bantu-dengar-mobile");

	if (extraDesk.classList.contains("hidden")) {
		extraDesk.classList.remove("hidden");
		Card.classList.add("h-[840px]");
		readMore.textContent = "Sembunyikan";
	} else {
		extraDesk.classList.add("hidden");
		Card.classList.remove("h-[840px]");
		readMore.textContent = "Selengkapnya...";
	}
}

function selengkapnyaBantuDifabelMobile() {
	var extraDesk = document.querySelector(".extra-desk-bantu-difabel-mobile");
	var readMore = document.querySelector(".selengkapnya-bantu-difabel-mobile");
	var Card = document.querySelector(".bantu-difabel-mobile");

	if (extraDesk.classList.contains("hidden")) {
		extraDesk.classList.remove("hidden");
		Card.classList.add("h-[850px]");
		readMore.textContent = "Sembunyikan";
	} else {
		extraDesk.classList.add("hidden");
		Card.classList.remove("h-[850px]");
		readMore.textContent = "Selengkapnya...";
	}
}

// Selengkapnya Deskripsi Rekomendasi Bantuan
function selengkapnyaRekomendasi1() {
  var extraDesk = document.querySelector(".extra-desk-rekomendasi1");
	var readMore = document.querySelector(".selengkapnya-rekomendasi1");
  
	if (extraDesk.classList.contains("hidden")) {
    extraDesk.classList.remove("hidden");
		readMore.textContent = "Sembunyikan";
	} else {
    extraDesk.classList.add("hidden");
		readMore.textContent = "Selengkapnya...";
	}
}
function selengkapnyaRekomendasi2() {
  var extraDesk = document.querySelector(".extra-desk-rekomendasi2");
	var readMore = document.querySelector(".selengkapnya-rekomendasi2");
  
	if (extraDesk.classList.contains("hidden")) {
    extraDesk.classList.remove("hidden");
		readMore.textContent = "Sembunyikan";
	} else {
		extraDesk.classList.add("hidden");
		readMore.textContent = "Selengkapnya...";
	}
}
function selengkapnyaRekomendasi3() {
	var extraDesk = document.querySelector(".extra-desk-rekomendasi3");
	var readMore = document.querySelector(".selengkapnya-rekomendasi3");
  
	if (extraDesk.classList.contains("hidden")) {
    extraDesk.classList.remove("hidden");
		readMore.textContent = "Sembunyikan";
	} else {
    extraDesk.classList.add("hidden");
		readMore.textContent = "Selengkapnya...";
	}
}

// Selengkapnya Deskripsi Rekomendasi Bantuan Mobile

function selengkapnyaRekomendasi1Mobile() {
  var extraDesk = document.querySelector(".extra-desk-rekomendasi1-mobile");
  var readMore = document.querySelector(".selengkapnya-rekomendasi1-mobile");
  var Card = document.querySelector(".rekomendasi-1");

  if (extraDesk.classList.contains("hidden")) {
    extraDesk.classList.remove("hidden");
    Card.classList.add("h-[680px]");
    readMore.textContent = "Sembunyikan";
  } else {
    extraDesk.classList.add("hidden");
    Card.classList.remove("h-[680px]");
    readMore.textContent = "Selengkapnya...";
  }
}

function selengkapnyaRekomendasi2Mobile() {
  var extraDesk = document.querySelector(".extra-desk-rekomendasi2-mobile");
  var readMore = document.querySelector(".selengkapnya-rekomendasi2-mobile");
  var Card = document.querySelector(".rekomendasi-2");

  if (extraDesk.classList.contains("hidden")) {
    extraDesk.classList.remove("hidden");
    Card.classList.add("h-[940px]");
    readMore.textContent = "Sembunyikan";
  } else {
    extraDesk.classList.add("hidden");
    Card.classList.remove("h-[940px]");
    readMore.textContent = "Selengkapnya...";
  }
}

function selengkapnyaRekomendasi3Mobile() {
  var extraDesk = document.querySelector(".extra-desk-rekomendasi3-mobile");
  var readMore = document.querySelector(".selengkapnya-rekomendasi3-mobile");
  var Card = document.querySelector(".rekomendasi-3");

  if (extraDesk.classList.contains("hidden")) {
    extraDesk.classList.remove("hidden");
    Card.classList.add("h-[1100px]");
    readMore.textContent = "Sembunyikan";
  } else {
    extraDesk.classList.add("hidden");
    Card.classList.remove("h-[1100px]");
    readMore.textContent = "Selengkapnya...";
  }
}

//Selengkapnya Deskripsi Zakat
function selengkapnyaZakatMaal() {
  var extraDesk = document.querySelector(".extra-desk-zakat-maal");
  var readMore = document.querySelector(".selengkapnya-zakat-maal");
  var Card = document.querySelector(".zakat-maal");

  if (extraDesk.classList.contains("hidden")) {
    extraDesk.classList.remove("hidden");
    Card.classList.add("xl:h-[840px]");
    Card.classList.add("md:h-[740px]");
    Card.classList.add("h-[640px]");
    readMore.textContent = "Sembunyikan";
  } else {
    extraDesk.classList.add("hidden");
    Card.classList.remove("xl:h-[840px]");
    Card.classList.remove("md:h-[740px]");
    Card.classList.remove("h-[640px]");
    readMore.textContent = "Selengkapnya...";
  }
}

function selengkapnyaZakatPenghasilan() {
  var extraDesk = document.querySelector(".extra-desk-zakat-penghasilan");
  var readMore = document.querySelector(".selengkapnya-zakat-penghasilan");
  var Card = document.querySelector(".zakat-penghasilan");

  if (extraDesk.classList.contains("hidden")) {
    extraDesk.classList.remove("hidden");
    Card.classList.add("xl:h-[700px]");
    Card.classList.add("md:h-[600px]");
    Card.classList.add("h-[600px]");
    readMore.textContent = "Sembunyikan";
  } else {
    extraDesk.classList.add("hidden");
    Card.classList.remove("xl:h-[700px]");
    Card.classList.remove("md:h-[600px]");
    Card.classList.remove("h-[600px]");
    readMore.textContent = "Selengkapnya...";
  }
}