function isTypingTarget(element: Element | null): boolean {
  if (!element || !(element instanceof HTMLElement)) return false;
  const tag = element.tagName;
  return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || element.isContentEditable;
}

function shouldHandle(event: KeyboardEvent): boolean {
  if (event.altKey || event.ctrlKey || event.metaKey) return false;
  if (isTypingTarget(document.activeElement)) return false;
  return true;
}

function navigate(href: string | undefined): void {
  if (!href) return;
  window.location.assign(href);
}

function focusProjectIndexLink(delta: number): void {
  const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('.project-index-row[href]'));
  if (!links.length) return;

  const active = document.activeElement;
  const currentIndex = links.findIndex((link) => link === active);
  const nextIndex =
    currentIndex === -1
      ? delta > 0
        ? 0
        : links.length - 1
      : (currentIndex + delta + links.length) % links.length;

  links[nextIndex]?.focus();
}

function handleGlobalShortcut(event: KeyboardEvent, key: string): boolean {
  switch (key) {
    case 'h':
      navigate('/');
      return true;
    case 'p':
      navigate('/projects/');
      return true;
    case 'b':
      navigate('/about/');
      return true;
    default:
      return false;
  }
}

function handleProjectDetailShortcut(event: KeyboardEvent, key: string, body: HTMLElement): boolean {
  const prev = body.dataset.projectPrev;
  const next = body.dataset.projectNext;

  if (key === 'arrowleft' || key === 'k') {
    if (!prev) return false;
    navigate(prev);
    return true;
  }

  if (key === 'arrowright' || key === 'n' || key === 'j') {
    if (!next) return false;
    navigate(next);
    return true;
  }

  if (key === 'i' || key === 'a') {
    navigate('/projects/');
    return true;
  }

  return false;
}

function handleProjectsIndexShortcut(event: KeyboardEvent, key: string): boolean {
  if (key === 'arrowdown' || key === 'j') {
    event.preventDefault();
    focusProjectIndexLink(1);
    return true;
  }

  if (key === 'arrowup' || key === 'k') {
    event.preventDefault();
    focusProjectIndexLink(-1);
    return true;
  }

  return false;
}

function initKeyboardShortcuts(): void {
  const body = document.body;
  const page = body.dataset.page ?? 'page';

  document.addEventListener('keydown', (event) => {
    if (!shouldHandle(event)) return;

    const key = event.key.toLowerCase();

    if (page === 'project-detail' && handleProjectDetailShortcut(event, key, body)) {
      event.preventDefault();
      return;
    }

    if (page === 'projects-index' && handleProjectsIndexShortcut(event, key)) {
      return;
    }

    if (handleGlobalShortcut(event, key)) {
      event.preventDefault();
    }
  });
}

initKeyboardShortcuts();
