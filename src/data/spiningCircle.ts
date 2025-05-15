import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

export function initSpinningCircle() {
	const circle = document.querySelector(".main-circle") as HTMLElement;
	const radius = circle.offsetWidth / 2;
	const imageURLs = [
		"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
		"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
		"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
		"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/astro/astro-original.svg",
		"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
		"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
		"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
	];
	const imageElements = [];
	const angleIncrement = (Math.PI * 2) / imageURLs.length;

	for (let i = 0; i < imageURLs.length; i++) {
		const angle = angleIncrement * i;
		const imagen = document.createElement("img");
		imagen.src = imageURLs[i];
		imagen.classList.add(
			"w-20",
			"md:grayscale-100",
			"hover:grayscale-0",
			"transition-all",
			"duration-150",
		);
		imageElements.push(imagen);
		circle.appendChild(imagen);

		gsap.set(imagen, {
			position: "absolute",
			top: 0,
			left: 0,
			xPercent: -50,
			yPercent: -50,
			transformOrigin: "50% 50%",
			x: radius + Math.cos(angle) * radius,
			y: radius + Math.sin(angle) * radius,
		});
	}

	const spin = gsap
		.timeline({ repeat: -1, defaults: { duration: 50, ease: "none" } })
		.to(circle, { rotation: 360 })
		.to(imageElements, { rotation: -360 }, 0);

	Draggable.create(".main-circle", {
		type: "rotation",
		inertia: true,
		onPressInit: () => spin.pause(),
		onDrag: function () {
			//just convert the rotation into a progress value for the spin timeline. Easy peasy. Very performant too.
			const angle = (this.rotation + 360 * 100000) % 360; //ensure that the value is always between 0 and 360. Don't let it go negative or beyond 360.
			spin.progress(angle / 360);
		},
		onThrowUpdate: function () {
			const angle = (this.rotation + 360 * 100000) % 360;
			spin.progress(angle / 360);
		},
		onDragEnd: () => {
			spin.resume();
			gsap.fromTo(
				spin,
				{ timeScale: 0 },
				{ duration: 1, timeScale: 1, ease: "none" },
			);
		},
	});
}
