const featureContent = {
    "simpleBookmarking": {
        "feature-header": "Bookmark in one click",
        "feature-desc": "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
        "feature-img": "./assets/illustration-features-tab-1.svg",
    },
    "speedySearching": {
        "feature-header": "Intelligent search",
        "feature-desc": "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
        "feature-img": "./assets/illustration-features-tab-2.svg",
    },
    "easySharing": {
        "feature-header": "Share your bookmarks",
        "feature-desc": "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
        "feature-img": "./assets/illustration-features-tab-3.svg",
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const questions = document.querySelectorAll(".question");
    console.log("questions:", questions)

    questions.forEach((question) => {
        const btn = question.querySelector(".faq-button");
        const fHeader = question.querySelector("h4");
        const answer = question.querySelector("p");

        question.addEventListener("click", () => {
            if (answer.classList.contains('active')) {
                answer.classList.remove('active');
                fHeader.classList.remove('active');
                answer.classList.remove('active');
                btn.classList.remove('active');
            } else {
                answer.classList.add('active');
                btn.classList.add('active');
                fHeader.classList.add('active');
            }
        });
    });


    const tabs = document.querySelectorAll(".list-tabs div");
    console.log("tabs:", tabs)

    tabs.forEach((tab) => {
        const tabName = tab.innerHTML;
        const header = document.querySelector(".features-description h3");
        const desc = document.querySelector(".features-description p");
        const img = document.querySelector(".features-photo img");

        tabs[0].classList.add('active');

        tab.addEventListener("click", () => {
             if (tabName == "Simple Bookmarking") {
                tabs[0].classList.add('active');
                tabs[1].classList.remove('active');
                tabs[2].classList.remove('active');

                header.innerHTML = featureContent.simpleBookmarking["feature-header"];
                desc.innerHTML = featureContent.simpleBookmarking["feature-desc"];
                img.src = featureContent.simpleBookmarking["feature-img"];
             } else if (tabName == "Speedy Searching") {
                tabs[0].classList.remove('active');
                tabs[1].classList.add('active');
                tabs[2].classList.remove('active');

                header.innerHTML = featureContent.speedySearching["feature-header"];
                desc.innerHTML = featureContent.speedySearching["feature-desc"];
                img.src = featureContent.speedySearching["feature-img"];
             } else {
                tabs[0].classList.remove('active');
                tabs[1].classList.remove('active');
                tabs[2].classList.add('active');

                header.innerHTML = featureContent.easySharing["feature-header"];
                desc.innerHTML = featureContent.easySharing["feature-desc"];
                img.src = featureContent.easySharing["feature-img"];
             }
        })
    })


    const burgerBtn = document.querySelector("#burger-menu");
    const navPanel = document.querySelector(".nav-links-mobile");
    const closeBtn = document.querySelector("#close-btn");

    burgerBtn.addEventListener("click", () => {
        if (navPanel.classList.contains('opened')) {
            navPanel.classList.remove('opened');
        } else {
            navPanel.classList.add('opened');
            document.body.classList.add('opened-menu');
        }
    })

    closeBtn.addEventListener("click", () => {
        if (navPanel.classList.contains('opened')) {
            navPanel.classList.remove('opened');
            document.body.classList.remove('opened-menu');
        }
    })
});