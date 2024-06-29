document.addEventListener('DOMContentLoaded', () => {
    const blockedWebsites = [
      "facebook.com",
      "instagram.com",
      "twitter.com",
      "youtube.com"
    ];

    const ul = document.getElementById('blocked-websites');
    blockedWebsites.forEach(site => {
      const li = document.createElement('li');
      li.textContent = site;
      ul.appendChild(li);
    });
  });
