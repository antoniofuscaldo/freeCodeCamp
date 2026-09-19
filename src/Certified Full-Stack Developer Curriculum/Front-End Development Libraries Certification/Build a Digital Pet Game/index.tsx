const { useState, useEffect } = React;

interface Pet {
  name: string;
  happiness: number;
  hunger: number;
  energy: number;
  species: string;
}

interface StatBarProps {
  label: string;
  value: number;
  icon: string;
  reverse?: boolean;
}

enum PetAction {
  NONE,
  EAT,
  PLAY,
  SLEEP,
}

enum PetMood {
  HAPPY,
  EXCITED,
  CONTENT,
  SAD,
  TIRED,
  SICK,
  HUNGRY,
}

const STAT_DECAY_RATES = {
  hunger: 10,
  happiness: 5,
  energy: 5,
};

const UPDATE_INTERVAL = 30 * 1000;

const moodEmojiMap: Record<PetMood, string> = {
  [PetMood.HAPPY]: '😺',
  [PetMood.EXCITED]: '😻',
  [PetMood.CONTENT]: '😸',
  [PetMood.SAD]: '😿',
  [PetMood.TIRED]: '😽',
  [PetMood.SICK]: '🙀',
  [PetMood.HUNGRY]: '😹',
};

function calculatePetMood(pet: Pet): PetMood {
  const { hunger, happiness, energy } = pet;

  if (hunger > 70) {
    return PetMood.HUNGRY;
  }

  if (energy < 30) {
    return PetMood.TIRED;
  }

  if (happiness < 30) {
    return PetMood.SAD;
  }

  if (happiness > 80 && energy > 70) {
    return PetMood.EXCITED;
  }

  if (happiness > 60) {
    return PetMood.HAPPY;
  }

  return PetMood.CONTENT;
}

function getStatColorClass(value: number): string {
  if (value >= 70) {
    return 'high';
  }

  if (value >= 40) {
    return 'medium';
  }

  return 'low';
}

function StatBar({ label, value, icon, reverse = false }: StatBarProps) {
  const colorClass = getStatColorClass(reverse ? 100 - value : value);

  return (
    <div className="stat-bar stat">
      <div className="stat-header">
        <div className="stat-label">
          <span className="stat-icon">{icon}</span>
          <span className="stat-name">{label}</span>
        </div>

        <span className="stat-value">{Math.round(value)}%</span>
      </div>

      <div className="stat-progress">
        <div
          className={`stat-fill ${colorClass}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

function usePet(isGameStarted: boolean) {
  const [pet, setPet] = useState<Pet>({
    name: '',
    happiness: 100,
    hunger: 0,
    energy: 100,
    species: 'Cat',
  });

  useEffect(() => {
    if (!isGameStarted) {
      return;
    }

    const interval = setInterval(() => {
      setPet((currentPet) => ({
        ...currentPet,
        hunger: Math.min(currentPet.hunger + 5, 100),
        happiness: Math.max(currentPet.happiness - 5, 0),
      }));
    }, UPDATE_INTERVAL);

    return () => clearInterval(interval);
  }, [isGameStarted]);

  function feedPet() {
    setPet((currentPet) => ({
      ...currentPet,
      hunger: Math.max(currentPet.hunger - STAT_DECAY_RATES.hunger, 0),
      energy: Math.min(currentPet.energy + STAT_DECAY_RATES.energy, 100),
    }));
  }

  function playWithPet() {
    setPet((currentPet) => ({
      ...currentPet,
      energy: Math.max(currentPet.energy - STAT_DECAY_RATES.energy, 0),
      happiness: Math.min(
        currentPet.happiness + STAT_DECAY_RATES.happiness,
        100,
      ),
    }));
  }

  function restPet() {
    setPet((currentPet) => ({
      ...currentPet,
      hunger: Math.min(currentPet.hunger + STAT_DECAY_RATES.hunger, 100),
      energy: Math.min(currentPet.energy + STAT_DECAY_RATES.energy, 100),
    }));
  }

  function doAction(action: PetAction) {
    switch (action) {
      case PetAction.EAT:
        feedPet();
        break;

      case PetAction.PLAY:
        playWithPet();
        break;

      case PetAction.SLEEP:
        restPet();
        break;

      case PetAction.NONE:
      default:
        break;
    }
  }

  function setName(name: string) {
    setPet((currentPet) => ({
      ...currentPet,
      name,
    }));
  }

  return {
    pet,
    doAction,
    setName,
  };
}

export function PetGame() {
  const [isGameStarted, setGameStarted] = useState(false);
  const [fact, setFact] = useState('');

  const { pet, doAction, setName } = usePet(isGameStarted);

  useEffect(() => {
    fetch('https://cat-facts-api.freecodecamp.rocks/api/catfacts/random')
      .then((response) => response.json())
      .then((data) => {
        setFact(data.fact ?? '');
      })
      .catch(() => {
        setFact("Sorry, we're not able to retrieve your cat fact right now!");
      });
  }, []);

  function startGame() {
    const input = document.getElementById(
      'pet-name',
    ) as HTMLInputElement | null;

    const petName = input?.value.trim() ?? '';

    if (!petName) {
      return;
    }

    setName(petName);
    setGameStarted(true);
  }

  const currentMood = calculatePetMood(pet);
  const currentMoodEmoji = moodEmojiMap[currentMood];

  return (
    <main>
      <header>
        <h1>Digital Pet Game</h1>
        <p>Take care of your virtual companion!</p>
      </header>

      {isGameStarted && (
        <section className="base-container game-container">
          <div className="pet-screen">
            <div className="pet-sprite">{currentMoodEmoji}</div>

            <h2 className="pet-name">{pet.name}</h2>
          </div>

          <div className="pet-buttons">
            <button
              id="eat-action"
              className="pet-button pet-buttons-left"
              onClick={() => doAction(PetAction.EAT)}
            >
              EAT
            </button>

            <button
              id="play-action"
              className="pet-button pet-buttons-center"
              onClick={() => doAction(PetAction.PLAY)}
            >
              PLAY
            </button>

            <button
              id="sleep-action"
              className="pet-button pet-buttons-right"
              onClick={() => doAction(PetAction.SLEEP)}
            >
              SLEEP
            </button>
          </div>
        </section>
      )}

      {isGameStarted && (
        <section className="stats-grid">
          <StatBar label="Hunger" value={pet.hunger} icon="🍽️" reverse />

          <StatBar label="Happiness" value={pet.happiness} icon="😊" />

          <StatBar label="Energy" value={pet.energy} icon="⚡" />
        </section>
      )}

      <section className="base-container info-panel">
        {!isGameStarted ? (
          <form className="start-questions">
            <label htmlFor="pet-name">What is your pet's name?</label>

            <input
              id="pet-name"
              name="pet-name"
              required
              pattern="[A-Za-z0-9]{1,20}"
            />

            <button id="set-name-btn" type="button" onClick={startGame}>
              Start Game
            </button>
          </form>
        ) : (
          <div id="hud">
            <p id="pet-species">Species: {pet.species}</p>

            <p id="pet-fact">
              <b>Pet Fact:</b> {fact}
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
