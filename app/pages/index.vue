<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import Edu from '~/components/Edu.vue';
import Intro from '~/components/Intro.vue';
import Project from '~/components/Project.vue';
import Skill from '~/components/Skill.vue';
import Work from '~/components/Work.vue';

const isModalOpen = ref(false);
const autoOpenModal = ref(false);
const isAnimating = ref(false);
const showClickMe = ref(true);
const tutorialActive = ref(true);
const tutorialFinished = ref(false);
const currentPad = ref(1);
const activePad = ref<number | null>(null);
const direction = ref('right');
const frogStage = ref<
  'idle' | 'jumping' | 'down_jumping' | 'up_jumping' | 'landing'
>('idle');

const padPositions = [
  { left: 'calc(50% - 30rem)', top: '46%' },
  { left: 'calc(50% - 15rem)', top: '50%' },
  { left: 'calc(50% + 3rem)', top: '36%' },
  { left: 'calc(50% + 16rem)', top: '50%' },
  { left: 'calc(50% + 30rem)', top: '46%' }
];

const frogImageSrc = computed(() => {
  if (frogStage.value === 'jumping') return '/images/frog_2.png';
  // if (frogStage.value === 'landing') return '/images/frog_3.png';
  if (frogStage.value === 'down_jumping') return '/images/frog_4.png';
  if (frogStage.value === 'up_jumping') return '/images/frog_5.png';

  return '/images/frog_1.png';
});

const frogPositionStyle = computed(() => {
  const position = padPositions[currentPad.value - 1] ?? padPositions[0];

  return {
    left: position ? position.left : '',
    top: position ? position.top : '',
    transform: 'translate(-50%, -50%)'
  };
});

const frogDirectionStyle = computed(() => {
  return {
    transform: `scaleX(${direction.value === 'left' ? 1 : -1})`
  };
});

const wait = (milliseconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

const handleFrogClick = () => {
  showClickMe.value = false;

  if (tutorialFinished.value) {
    isModalOpen.value = true;
    return;
  }

  if (tutorialActive.value && currentPad.value === 1 && !isModalOpen.value) {
    isModalOpen.value = true;
    return;
  }

  isModalOpen.value = true;
};

const updateIdleDirection = (index: number) => {
  if (index === 1) direction.value = 'right';
  if (index === padPositions.length) direction.value = 'left';
};

const moveToPad = async (index: number, openModal = false) => {
  const previousPad = currentPad.value;

  direction.value = index > previousPad ? 'right' : 'left';

  if ((previousPad === 3 && index === 4) || (previousPad === 3 && index === 2))
    frogStage.value = 'down_jumping';
  // else if (previousPad === 4 && index === 3) frogStage.value = 'up_jumping';
  else frogStage.value = 'jumping';

  currentPad.value = index;
  await wait(300);
  activePad.value = index;
  // frogStage.value = 'landing';
  await wait(150);
  frogStage.value = 'idle';
  updateIdleDirection(index);

  if (openModal && !isModalOpen.value) {
    autoOpenModal.value = true;
    isModalOpen.value = true;
  }

  await wait(300);

  if (activePad.value === index) activePad.value = null;
};

const handleLilyPadClick = async (index: number) => {
  if (tutorialActive.value) return;
  if (isAnimating.value || index === currentPad.value) return;

  showClickMe.value = false;
  isAnimating.value = true;

  const step = index > currentPad.value ? 1 : -1;
  const targetPads: number[] = [];

  for (let pad = currentPad.value + step; pad !== index + step; pad += step) {
    targetPads.push(pad);
  }

  for (const [index, pad] of targetPads.entries()) {
    const isFinalStep = index === targetPads.length - 1;

    await moveToPad(pad, isFinalStep);
  }

  isAnimating.value = false;
};

watch(isModalOpen, (isOpen, previous) => {
  if (previous && !isOpen && tutorialActive.value && !autoOpenModal.value) {
    const nextPad = currentPad.value + 1;

    if (nextPad <= padPositions.length) {
      moveToPad(nextPad, true);
    } else {
      tutorialFinished.value = true;
      tutorialActive.value = false;
    }
  }

  if (isOpen && autoOpenModal.value) {
    autoOpenModal.value = false;
  }
});
</script>

<template>
  <main class="relative">
    <div class="flex h-screen items-center justify-center">
      <button
        type="button"
        class="group absolute z-10 cursor-pointer border-0 bg-transparent p-0 transition-[left,top] duration-500"
        :style="frogPositionStyle"
        aria-label="Open portfolio modal"
        @click="handleFrogClick"
      >
        <span
          v-if="showClickMe"
          class="font-joti absolute -top-8 left-1/2 -translate-x-1/2 -rotate-6 whitespace-nowrap text-xl font-semibold text-[#ECEA5F] transition-transform duration-300 ease-out group-hover:-translate-y-2"
        >
          Click Me !
        </span>
        <div :style="frogDirectionStyle">
          <NuxtImg :src="frogImageSrc" :width="110" alt="frog" />
        </div>
      </button>

      <div
        :class="[
          'relative mr-10 cursor-pointer',
          activePad === 1 ? 'pad-sink' : ''
        ]"
        @click="handleLilyPadClick(1)"
      >
        <div
          v-if="activePad === 1"
          class="pointer-events-none absolute inset-0"
        >
          <span class="pad-wave-ring ring-1"></span>
          <span class="pad-wave-ring ring-2"></span>
        </div>
        <NuxtImg src="/images/lily_pad_1.png" :width="220" />
      </div>

      <div
        :class="[
          'relative -mb-20 mr-12 cursor-pointer',
          activePad === 2 ? 'pad-sink' : ''
        ]"
        @click="handleLilyPadClick(2)"
      >
        <div
          v-if="activePad === 2"
          class="pointer-events-none absolute inset-0"
        >
          <span class="pad-wave-ring ring-1"></span>
          <span class="pad-wave-ring ring-2"></span>
        </div>
        <NuxtImg src="/images/lily_pad_2.png" :width="210" />
      </div>

      <div
        :class="[
          'relative mb-40 cursor-pointer',
          activePad === 3 ? 'pad-sink' : ''
        ]"
        @click="handleLilyPadClick(3)"
      >
        <div
          v-if="activePad === 3"
          class="pointer-events-none absolute inset-0"
        >
          <span class="pad-wave-ring ring-1"></span>
          <span class="pad-wave-ring ring-2"></span>
        </div>
        <NuxtImg src="/images/lily_pad_3.png" :width="220" />
      </div>

      <div
        :class="[
          'relative -mb-20 mr-12 cursor-pointer',
          activePad === 4 ? 'pad-sink' : ''
        ]"
        @click="handleLilyPadClick(4)"
      >
        <div
          v-if="activePad === 4"
          class="pointer-events-none absolute inset-0"
        >
          <span class="pad-wave-ring ring-1"></span>
          <span class="pad-wave-ring ring-2"></span>
        </div>
        <NuxtImg src="/images/lily_pad_2.png" :width="210" />
      </div>

      <div
        :class="['relative cursor-pointer', activePad === 5 ? 'pad-sink' : '']"
        @click="handleLilyPadClick(5)"
      >
        <div
          v-if="activePad === 5"
          class="pointer-events-none absolute inset-0"
        >
          <span class="pad-wave-ring ring-1"></span>
          <span class="pad-wave-ring ring-2"></span>
        </div>
        <NuxtImg src="/images/lily_pad_1.png" :width="220" />
      </div>
    </div>

    <Intro v-if="currentPad === 1" v-model="isModalOpen" />
    <Skill v-if="currentPad === 2" v-model="isModalOpen" />
    <Work v-if="currentPad === 3" v-model="isModalOpen" />
    <Project v-if="currentPad === 4" v-model="isModalOpen" />
    <Edu v-if="currentPad === 5" v-model="isModalOpen" />
  </main>
</template>

<style scoped>
.pad-sink {
  animation: pad-sink 0.65s ease-in-out;
}

@keyframes pad-sink {
  0% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(4px);
  }
  70% {
    transform: translateY(-2px);
  }
  100% {
    transform: translateY(0);
  }
}

.pad-wave-ring {
  position: absolute;
  inset: 0;
  border: 0.5px solid rgba(255, 255, 255, 0.6);
  border-radius: 100%;
  opacity: 0;
  filter: blur(2px);
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.14);
}

.pad-wave-ring.ring-1 {
  animation: pad-wave-outer 0.7s ease-out;
}

.pad-wave-ring.ring-2 {
  animation: pad-wave-inner 0.3s ease-out 0.1s;
}

@keyframes pad-wave-outer {
  0% {
    opacity: 0.4;
    transform: scale(0.9);
  }
  35% {
    opacity: 0.28;
    transform: scale(1.1);
  }
  65% {
    opacity: 0.16;
    transform: scale(1.28);
  }
  100% {
    opacity: 0;
    transform: scale(1.55);
  }
}

@keyframes pad-wave-inner {
  0% {
    opacity: 0.28;
    transform: scale(0.78);
  }
  35% {
    opacity: 0.2;
    transform: scale(1.02);
  }
  70% {
    opacity: 0.1;
    transform: scale(1.28);
  }
  100% {
    opacity: 0;
    transform: scale(1.45);
  }
}
</style>
