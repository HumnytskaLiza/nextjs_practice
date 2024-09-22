const featureContent = {
    simpleBookmarking: {
      "feature-header": "Bookmark in one click",
      "feature-desc":
        "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
      "feature-img": "./assets/illustration-features-tab-1.svg",
    },
    speedySearching: {
      "feature-header": "Intelligent search",
      "feature-desc":
        "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
      "feature-img": "./assets/illustration-features-tab-2.svg",
    },
    easySharing: {
      "feature-header": "Share your bookmarks",
      "feature-desc":
        "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
      "feature-img": "./assets/illustration-features-tab-3.svg",
    },
  };
  
  const questions = document.querySelectorAll(".question");
  
  questions.forEach((question) => {
    const btn = question.querySelector(".faq-button");
    const fHeader = question.querySelector("h4");
    const answer = question.querySelector("p");
  
    question.addEventListener("click", () => {
      answer.classList.toggle("active");
      btn.classList.toggle("active");
      fHeader.classList.toggle("active");
    });
  });
  
  const tabs = document.querySelectorAll(".list-tabs div");
  
  tabs.forEach((tab) => {
    const header = document.querySelector(".features-description h3");
    const desc = document.querySelector(".features-description p");
    const img = document.querySelector(".features-photo img");
  
    function changeTabContent(tabIndex) {
      tabs.forEach((tab, index) => {
        tab.classList.toggle("active", index === tabIndex);
      });
  
      let featureKey;
  
      if (tabIndex === 0) {
        featureKey = "simpleBookmarking";
      } else if (tabIndex === 1) {
        featureKey = "speedySearching";
      } else {
        featureKey = "easySharing";
      }
  
      header.innerHTML = featureContent[featureKey]["feature-header"];
      desc.innerHTML = featureContent[featureKey]["feature-desc"];
      img.src = featureContent[featureKey]["feature-img"];
    }
  
    tab.addEventListener("click", () => {
      const currentTabIndex = Array.from(tabs).indexOf(tab);
      changeTabContent(currentTabIndex);
    });
  });
  
  const burgerBtn = document.querySelector("#burger-menu");
  const navPanel = document.querySelector(".nav-links-mobile");
  const closeBtn = document.querySelector("#close-btn");
  
  burgerBtn.addEventListener("click", () => {
    navPanel.classList.add("opened");
    document.body.classList.add("opened-menu");
  });
  
  closeBtn.addEventListener("click", () => {
    navPanel.classList.remove("opened");
    document.body.classList.remove("opened-menu");
  });
  