fetch('data.json')
  .then(res => res.json())
  .then(data => {
    // Apply background gradient theme
    document.getElementById('body').style.background = data.theme.gradient;

    // Fill main info
    document.getElementById('name').textContent = data.name;
    document.getElementById('role').textContent = data.role;
    document.getElementById('bio').textContent = data.bio;

    // Profile photo
    document.getElementById('photo-container').innerHTML = `
      <img src="${data.photo}" alt="${data.name}" class="w-full h-full object-cover">
    `;

    // Profile button
    const btn = document.getElementById('profile-btn');
    btn.href = data.button_url;
    btn.textContent = `Explore ${data.name.split(' ')[0]}'s Work`;
    btn.style.backgroundColor = data.theme.primary;

    // Create professional cards
    const cardsContainer = document.getElementById('cards');
    data.cards.forEach((card, index) => {
      const cardDiv = document.createElement('div');
      cardDiv.className =
        "bg-white/10 border border-emerald-700 rounded-2xl p-6 text-left shadow-md hover:shadow-emerald-500/40 transition transform hover:-translate-y-1";
      cardDiv.innerHTML = `
        <h3 class="text-emerald-400 text-lg font-semibold mb-2">${index + 1}. ${card.title}</h3>
        <p class="text-gray-200 text-sm leading-relaxed">${card.content}</p>
      `;
      cardsContainer.appendChild(cardDiv);
    });

    // Social links
    const socialsDiv = document.getElementById('socials');
    const icons = {
      facebook: "🌐",
      instagram: "📸",
      x: "✖️"
    };
    Object.entries(data.socials).forEach(([key, url]) => {
      const a = document.createElement('a');
      a.href = url;
      a.target = "_blank";
      a.className = "text-2xl hover:text-emerald-400 transition";
      a.innerHTML = icons[key];
      socialsDiv.appendChild(a);
    });
  })
  .catch(err => console.error("Error loading data:", err));
