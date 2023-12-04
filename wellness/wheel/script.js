const affirmations = [
    "I am loved and worthy of love.",
    "I am confident and capable.",
    "I attract positive energy into my life.",
    "I am a powerful creator of my reality.",
    "I radiate joy and happiness.",
    "I believe in my abilities and potential.",
  ];
  
  const wheel = document.getElementById("wheel");
  
  function createWheelSections() {
    const angle = 360 / affirmations.length;
    affirmations.forEach((affirmation, index) => {
      const section = document.createElement("div");
      section.className = "wheel-section";
      section.style.transform = `rotate(${angle * index}deg)`;
      const text = document.createElement("p");
      text.textContent = affirmation;
      section.appendChild(text);
      wheel.appendChild(section);
    });
  }
  
  function spinWheel() {
    const randomRotation = Math.floor(Math.random() * 360) + 3600; // Spin multiple times
    wheel.style.transform = `rotate(${randomRotation}deg)`;
  }
  
  createWheelSections();
  spinWheel();
  