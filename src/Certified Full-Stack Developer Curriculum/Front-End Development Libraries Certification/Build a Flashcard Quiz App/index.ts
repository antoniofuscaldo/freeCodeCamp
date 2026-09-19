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

// Extend Window so TypeScript knows about the global properties
interface FlashcardWindow {
  InvalidUserInputError: typeof InvalidUserInputError;
  currentCards: FlashCard[];
}

const flashcardWindow = window as unknown as Window & FlashcardWindow;

// Expose the error constructor globally for the test harness
flashcardWindow.InvalidUserInputError = InvalidUserInputError;

/* -------------------------
   In-memory flashcard store
   ------------------------- */

const currentCards: FlashCard[] = [
  {
    questionText: 'What is the capital of Italy?',
    questionAnswer: 'Rome',
  },
  {
    questionText: 'What language is primarily spoken in Torino?',
    questionAnswer: 'Italian',
  },
  {
    questionText: 'What is 2 + 2?',
    questionAnswer: '4',
  },
];

// Expose currentCards globally for the test harness
flashcardWindow.currentCards = currentCards;

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

/* -------------------------
   Flashcard faces
   ------------------------- */

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

let currentIndex = currentCards.length - 1;

/* -------------------------
   Render
   ------------------------- */

function render(): void {
  if (!flashcardEl || !frontFace || !backFace) {
    return;
  }

  if (currentCards.length === 0) {
    frontFace.textContent = 'No flashcards available.';
    backFace.textContent = 'Add one using the form below.';

    if (positionEl) {
      positionEl.textContent = '0 / 0';
    }

    flashcardEl.classList.remove('flipped');
    return;
  }

  // Keep the index within the valid range
  if (currentIndex < 0) {
    currentIndex = 0;
  }

  if (currentIndex >= currentCards.length) {
    currentIndex = currentCards.length - 1;
  }

  const card = currentCards[currentIndex];

  frontFace.textContent = card.questionText;
  backFace.textContent = card.questionAnswer;

  if (positionEl) {
    positionEl.textContent = `${currentIndex + 1} / ${currentCards.length}`;
  }

  // Reset the card to the front when changing cards
  flashcardEl.classList.remove('flipped');
}

/* -------------------------
   Flashcard click
   ------------------------- */

flashcardEl.addEventListener('click', () => {
  flashcardEl.classList.toggle('flipped');
});

/* -------------------------
   Delete current card
   ------------------------- */

if (deleteBtn) {
  deleteBtn.addEventListener('click', () => {
    if (currentCards.length === 0) {
      return;
    }

    currentCards.splice(currentIndex, 1);

    currentIndex = Math.max(0, currentIndex - 1);

    render();
  });
}

/* -------------------------
   Previous card
   ------------------------- */

if (prevBtn) {
  prevBtn.addEventListener('click', () => {
    if (currentCards.length === 0) {
      return;
    }

    currentIndex =
      (currentIndex - 1 + currentCards.length) % currentCards.length;

    render();
  });
}

/* -------------------------
   Next card
   ------------------------- */

if (nextBtn) {
  nextBtn.addEventListener('click', () => {
    if (currentCards.length === 0) {
      return;
    }

    currentIndex = (currentIndex + 1) % currentCards.length;

    render();
  });
}

/* -------------------------
   Add new flashcard
   ------------------------- */

if (entryForm) {
  entryForm.addEventListener('submit', (event: SubmitEvent) => {
    const question = frontText?.value.trim() ?? '';
    const answer = backText?.value.trim() ?? '';

    // Validate before preventing the default submission
    if (!question || !answer) {
      throw new flashcardWindow.InvalidUserInputError(
        'Both question and answer are required.',
      );
    }

    event.preventDefault();

    const newCard: FlashCard = {
      questionText: question,
      questionAnswer: answer,
    };

    currentCards.push(newCard);

    // Show the newly added card
    currentIndex = currentCards.length - 1;

    // Clear form fields
    if (frontText) {
      frontText.value = '';
    }

    if (backText) {
      backText.value = '';
    }

    render();
  });
}

/* -------------------------
   Initial render
   ------------------------- */

render();
