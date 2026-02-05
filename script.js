// script.js – Steuert die interaktive Navigation der Traumreisen‑Website

(function() {
  let selectedCharacter = null;
  // In dieser Version gibt es keine separate Altersauswahl.

  // Referenzen auf DOM‑Elemente
  const mainContent = document.getElementById('main-content');
  const modal = document.getElementById('story-modal');
  const modalClose = document.getElementById('modal-close');
  const modalTitle = document.getElementById('modal-title');
  const modalImages = document.getElementById('modal-images');
  const modalText = document.getElementById('modal-text');

  // Starte mit der Charakterauswahl
  document.addEventListener('DOMContentLoaded', () => {
    showCharacterSelection();
  });

  function showCharacterSelection() {
    selectedCharacter = null;
    // Altersvariablen werden nicht mehr verwendet.
    mainContent.innerHTML = '';
    const grid = document.createElement('div');
    grid.className = 'card-grid';
    // Lena – 4 Jahre, liebt Einhörner, Feen, Wichtel
    const lenaCard = createCard({
      title: 'Lena',
      text: 'Liebt Einhörner, Feen & Wichtel',
      image: 'images/5dcf596f-f1aa-4afd-a60e-e4c37ce4c5ac.png',
      onClick: () => selectCharacter('Lena')
    });
    // Noah – 0,5 Jahre
    const noahCard = createCard({
      title: 'Noah',
      text: 'Sanfte Reisen für die Jüngsten',
      image: 'images/a0377c18-738d-4ffb-a14a-6adc947efe2d.png',
      onClick: () => selectCharacter('Noah')
    });
    grid.appendChild(lenaCard);
    grid.appendChild(noahCard);
    mainContent.appendChild(grid);
  }

  function selectCharacter(name) {
    selectedCharacter = name;
    // Direkt zur Geschichtenauswahl springen, da es keine Alterswahl mehr gibt.
    showStoryList();
  }

  function showAgeSelection() {
    mainContent.innerHTML = '';
    // Zurück‑Button zur Figurenwahl
    const backBtn = document.createElement('button');
    backBtn.className = 'btn';
    backBtn.textContent = '← Zurück zur Figurenwahl';
    backBtn.addEventListener('click', showCharacterSelection);
    mainContent.appendChild(backBtn);

    const info = document.createElement('p');
    info.textContent = `${selectedCharacter}, wähle eine Altersgruppe für deine Traumreise.`;
    mainContent.appendChild(info);
    const btnGroup = document.createElement('div');
    btnGroup.className = 'btn-group';
    [2,3,4,5].forEach(age => {
      const btn = document.createElement('button');
      btn.className = 'btn';
      btn.textContent = `${age} Jahre`;
      if (age === recommendedAge) {
        btn.style.backgroundColor = 'var(--accent-color)';
      }
      btn.addEventListener('click', () => selectAge(age));
      btnGroup.appendChild(btn);
    });
    mainContent.appendChild(btnGroup);
  }

  function selectAge(age) {
    selectedAgeGroup = age;
    showStoryList();
  }

  function showStoryList() {
    mainContent.innerHTML = '';
    const backBtn = document.createElement('button');
    backBtn.className = 'btn';
    backBtn.textContent = '← Zurück zur Figurenwahl';
    backBtn.addEventListener('click', showCharacterSelection);
    mainContent.appendChild(backBtn);
    const heading = document.createElement('h2');
    heading.textContent = `Geschichten für ${selectedCharacter}`;
    mainContent.appendChild(heading);
    const grid = document.createElement('div');
    grid.className = 'card-grid';
    // Filter stories: Alle Geschichten, die explizit der ausgewählten Figur
    // zugeordnet sind, werden angezeigt. Ältere Geschichten ohne
    // "character"‑Feld werden nach dem Altersbereich zugeordnet, um
    // Kompatibilität zu gewährleisten. Für Lena werden Altersgruppen ab 4
    // Jahren angezeigt, für Noah bis einschließlich 3 Jahre.
    // Es sollen nur Geschichten angezeigt werden, die explizit für die
    // ausgewählte Figur erstellt wurden. Alte Einträge ohne "character"‑
    // Attribut werden komplett ausgeblendet.
    const filtered = stories.filter(story => {
      // Zeige nur Geschichten mit korrekt gesetztem character. Basis‑
      // geschichten (L‑1, L‑2, N‑1, N‑2) werden bewusst ausgeblendet,
      // selbst wenn ihre character‑Eigenschaft noch gesetzt sein sollte.
      return story.character === selectedCharacter && !['L-1','L-2','N-1','N-2'].includes(story.id);
    });
    filtered.forEach(story => {
      const card = createCard({
        title: story.title,
        text: story.theme,
        image: 'images/' + story.images[0],
        onClick: () => openStoryModal(story)
      });
      grid.appendChild(card);
    });
    mainContent.appendChild(grid);
  }

  function openStoryModal(story) {
    // Titel setzen
    modalTitle.textContent = story.title;
    // Nur das erste Bild als Kopfillustration anzeigen
    modalImages.innerHTML = '';
    if (story.images && story.images.length > 0) {
      const firstImg = document.createElement('img');
      firstImg.src = 'images/' + story.images[0];
      firstImg.alt = story.title;
      modalImages.appendChild(firstImg);
    }
    // Persönliche Begrüßung vorbereiten
    const greeting = selectedCharacter ? `${selectedCharacter}, ` : '';
    // Den Text in Zeilen aufteilen und nach der Hälfte ein zweites Bild einfügen
    const lines = story.text.split('\n');
    const midIndex = Math.floor(lines.length / 2);
    let html = greeting;
    lines.forEach((line, idx) => {
      html += line;
      // Wenn die Hälfte erreicht ist und es ein zweites Bild gibt, füge es ein
      if (idx === midIndex && story.images && story.images.length > 1) {
        html += '<br><img class="embedded-image" src="images/' + story.images[1] + '" alt="' + story.title + '"><br>';
      }
      // Zeilenumbruch zwischen den ursprünglichen Zeilen beibehalten
      if (idx < lines.length - 1) {
        html += '<br>';
      }
    });
    modalText.innerHTML = html;
    modal.classList.remove('hidden');
  }

  function createCard({ title, text, image, onClick }) {
    const card = document.createElement('div');
    card.className = 'card';
    const img = document.createElement('img');
    img.src = image;
    img.alt = title;
    const content = document.createElement('div');
    content.className = 'card-content';
    const h3 = document.createElement('h3');
    h3.className = 'card-title';
    h3.textContent = title;
    const p = document.createElement('p');
    p.className = 'card-text';
    p.textContent = text;
    content.appendChild(h3);
    content.appendChild(p);
    card.appendChild(img);
    card.appendChild(content);
    card.addEventListener('click', onClick);
    return card;
  }

  // Modal schließen
  modalClose.addEventListener('click', () => {
    modal.classList.add('hidden');
  });
  // Schließen bei Klick außerhalb des Inhalts
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
    }
  });
  // Schließen bei Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      modal.classList.add('hidden');
    }
  });
})();