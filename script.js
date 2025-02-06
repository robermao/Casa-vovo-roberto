document.addEventListener("DOMContentLoaded", function () {
    let images = document.querySelectorAll(".carousel-container img");
    let currentIndex = 0;
    let totalImages = images.length;

    // Criar o contador
    let counter = document.createElement("div");
    counter.id = "counter";
    counter.style.position = "absolute";
    counter.style.bottom = "10px";
    counter.style.left = "50%";
    counter.style.transform = "translateX(-50%)";
    counter.style.background = "rgba(0, 0, 0, 0.5)";
    counter.style.color = "white";
    counter.style.padding = "5px 10px";
    counter.style.borderRadius = "5px";
    counter.style.fontSize = "16px";
    counter.innerText = `${currentIndex + 1} / ${totalImages}`;
    document.querySelector(".carousel").appendChild(counter);

    function showImage(index) {
        images.forEach(img => img.classList.remove("active"));
        images[index].classList.add("active");
        counter.innerText = `${index + 1} / ${totalImages}`;
    }

    document.getElementById("prev").addEventListener("click", function () {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        showImage(currentIndex);
    });

    document.getElementById("next").addEventListener("click", function () {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        showImage(currentIndex);
    });

    showImage(currentIndex);
});
