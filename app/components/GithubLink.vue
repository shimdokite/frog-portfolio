<template>
  <a
    class="github-link"
    href="https://github.com/shimdokite"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Open GitHub profile"
  >
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M12 2C6.48 2 2 6.58 2 12.25c0 4.52 2.87 8.36 6.84 9.72.5.09.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.38-3.37-1.38-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.33 9.33 0 0 1 12 6.99c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.95.68 1.91 0 1.38-.01 2.49-.01 2.83 0 .27.18.59.69.49A10.08 10.08 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"
      />
    </svg>
  </a>
</template>

<style scoped>
.github-link {
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 30;
  display: flex;
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 9999px;
  color: #ffffff;
  background: rgba(8, 46, 54, 0.72);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.24);
  backdrop-filter: blur(8px);
  transition:
    transform 180ms ease,
    border-color 180ms ease,
    background 180ms ease;
}

.github-link:hover,
.github-link:focus-visible {
  border-color: rgba(255, 255, 255, 0.72);
  background: rgba(12, 54, 64, 0.9);
  transform: translateY(-2px);
}

.github-link:focus-visible {
  outline: 2px solid #ffffff;
  outline-offset: 3px;
}

.github-link svg {
  width: 25px;
  height: 25px;
}

@media (max-width: 640px) {
  .github-link {
    right: 16px;
    bottom: 16px;
    width: 44px;
    height: 44px;
  }
}
</style>
