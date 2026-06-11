// index.ts

// Interface required by the tests
interface FlashCard {
  questionText: string;
  questionAnswer: string;
}

// Custom error required by the tests
class InvalidUserInputError extends Error {
  constructor(message?: string) {
    super(message ?? 'Invalid user input');
    this.name = 'InvalidUserInputError';
  }
}

// Expose the error constructor globally so the test harness can detect it
// (tests often run in the page scope and expect the constructor to be available on window)
(window as any).InvalidUserInputError = InvalidUserInputError;

/* -------------------------
   In-memory flashcard store
   ------------------------- */
const currentCards: FlashCard[] = [
  { questionText: 'What is the capital of Italy?', questionAnswer: 'Rome' },
  {
    questionText: 'What language is primarily spoken in Torino?',
    questionAnswer: 'Italian',
  },
  { questionText: 'What is 2 + 2?', questionAnswer: '4' },
];

// Expose currentCards to window for test visibility if needed
(window as any).currentCards = currentCards;

/* -------------------------
   DOM references
   ------------------------- */
const flashcardEl = document.getElementById(
  'flashcard',
) as HTMLDivElement | null;
const deleteBtn = document.getElementById(
  'delete-btn',
) as HTMLButtonElement | null;
const prevBtn = document.getElementById('prev-btn') as HTMLButtonElement | null;
const nextBtn = document.getElementById('next-btn') as HTMLButtonElement | null;

const entryForm = document.getElementById(
  'entry-form',
) as HTMLFormElement | null;
const frontText = document.getElementById(
  'front-text',
) as HTMLTextAreaElement | null;
const backText = document.getElementById(
  'back-text',
) as HTMLTextAreaElement | null;

const positionEl = document.getElementById(
  'position',
) as HTMLSpanElement | null;

if (!flashcardEl) {
  throw new Error('Missing #flashcard element in DOM');
}

// create front/back face elements if not present (defensive)
let frontFace = flashcardEl.querySelector('.front') as HTMLDivElement | null;
let backFace = flashcardEl.querySelector('.back') as HTMLDivElement | null;

if (!frontFace) {
  frontFace = document.createElement('div');
  frontFace.className = 'face front';
  flashcardEl.appendChild(frontFace);
}
if (!backFace) {
  backFace = document.createElement('div');
  backFace.className = 'face back';
  flashcardEl.appendChild(backFace);
}

/* -------------------------
   State
   ------------------------- */
let currentIndex = currentCards.length - 1; // show last added by default

/* -------------------------
   Render logic
   ------------------------- */
function render() {
  if (!flashcardEl || !frontFace || !backFace) return;

  if (currentCards.length === 0) {
    frontFace.textContent = 'No flashcards available.';
    backFace.textContent = 'Add one using the form below.';
    if (positionEl) positionEl.textContent = '0 / 0';
    flashcardEl.classList.remove('flipped');
    return;
  }

  // clamp index
  if (currentIndex < 0) currentIndex = 0;
  if (currentIndex > currentCards.length - 1)
    currentIndex = currentCards.length - 1;

  const card = currentCards[currentIndex];
  frontFace.textContent = card.questionText;
  backFace.textContent = card.questionAnswer;
  if (positionEl)
    positionEl.textContent = `${currentIndex + 1} / ${currentCards.length}`;
  // ensure flipped class is not stuck when switching cards
  flashcardEl.classList.remove('flipped');
}

/* -------------------------
   Event handlers
   ------------------------- */

// Toggle flipped class when flashcard is clicked
flashcardEl.addEventListener('click', () => {
  flashcardEl.classList.toggle('flipped');
});

// Delete current card and show previous
if (deleteBtn) {
  deleteBtn.addEventListener('click', () => {
    if (currentCards.length === 0) return;

    // remove the current card
    currentCards.splice(currentIndex, 1);

    // move index to previous card (or clamp to 0)
    currentIndex = Math.max(0, currentIndex - 1);

    render();
  });
}

// Navigation helpers
if (prevBtn) {
  prevBtn.addEventListener('click', () => {
    if (currentCards.length === 0) return;
    currentIndex =
      (currentIndex - 1 + currentCards.length) % currentCards.length;
    render();
  });
}
if (nextBtn) {
  nextBtn.addEventListener('click', () => {
    if (currentCards.length === 0) return;
    currentIndex = (currentIndex + 1) % currentCards.length;
    render();
  });
}

// Entry form: add new flashcard
if (entryForm) {
  entryForm.addEventListener('submit', (ev) => {
    // Validate inputs first and throw the global InvalidUserInputError if invalid.
    const q = frontText ? frontText.value.trim() : '';
    const a = backText ? backText.value.trim() : '';

    if (!q || !a) {
      // Use the globally exposed constructor to ensure the test harness recognizes it
      const ErrCtor =
        (window as any).InvalidUserInputError || InvalidUserInputError;
      throw new ErrCtor('Both question and answer are required.');
    }

    // Prevent default only after validation passes
    ev.preventDefault();

    const newCard: FlashCard = { questionText: q, questionAnswer: a };
    currentCards.push(newCard);

    // show the newly added card
    currentIndex = currentCards.length - 1;

    // clear inputs
    if (frontText) frontText.value = '';
    if (backText) backText.value = '';

    render();
  });
}

/* -------------------------
   Initial render
   ------------------------- */
render();
