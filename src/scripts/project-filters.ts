function initProjectFilters(): void {
  const toolbar = document.querySelector('.project-filters');
  const list = document.getElementById('project-index');
  if (!toolbar || !list) return;

  const buttons = Array.from(toolbar.querySelectorAll<HTMLButtonElement>('.project-filters__button'));
  const rows = Array.from(list.querySelectorAll<HTMLElement>('.project-index-row'));
  if (!buttons.length || !rows.length) return;

  let empty = list.querySelector<HTMLElement>('.project-index__empty');
  if (!empty) {
    empty = document.createElement('p');
    empty.className = 'project-index__empty';
    empty.setAttribute('role', 'status');
    empty.hidden = true;
    empty.textContent = 'No case snapshots match this topic yet.';
    list.append(empty);
  }

  function rowMatches(row: HTMLElement, filter: string): boolean {
    if (filter === 'all') return true;
    const topics = (row.getAttribute('data-topics') || '').trim().split(/\s+/).filter(Boolean);
    return topics.includes(filter);
  }

  function setFilter(filter: string): void {
    let visibleCount = 0;

    buttons.forEach((button) => {
      const active = button.dataset.filter === filter;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });

    rows.forEach((row) => {
      const visible = rowMatches(row, filter);
      row.hidden = !visible;
      if (visible) visibleCount += 1;
    });

    empty.hidden = visibleCount > 0;
    list.toggleAttribute('data-filter-empty', visibleCount === 0);

    const url = new URL(window.location.href);
    if (filter === 'all') url.searchParams.delete('topic');
    else url.searchParams.set('topic', filter);
    window.history.replaceState({}, '', url);
  }

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      setFilter(button.dataset.filter || 'all');
    });
  });

  const initial = new URL(window.location.href).searchParams.get('topic');
  if (initial && buttons.some((button) => button.dataset.filter === initial)) {
    setFilter(initial);
  }
}

initProjectFilters();
