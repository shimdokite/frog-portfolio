<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, watch } from 'vue';

const props = withDefaults(
  defineProps<{
    modelValue: boolean;
    closeOnOverlay?: boolean;
  }>(),
  {
    closeOnOverlay: true
  }
);

const emit = defineEmits<{
  'update:modelValue': [value: boolean];
}>();

const isOpen = computed(() => props.modelValue);

const close = () => {
  emit('update:modelValue', false);
};

const handleOverlayClick = () => {
  if (props.closeOnOverlay) {
    close();
  }
};

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && isOpen.value) {
    close();
  }
};

watch(isOpen, (value) => {
  if (typeof document === 'undefined') {
    return;
  }

  document.body.style.overflow = value ? 'hidden' : '';
});

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown);
  document.body.style.overflow = '';
});
</script>

<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/55 px-4 py-8"
        @click="handleOverlayClick"
      >
        <div
          class="relative w-full max-w-lg rounded-3xl bg-white p-8 shadow-2xl"
          role="dialog"
          aria-modal="true"
          @click.stop
        >
          <button
            type="button"
            class="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full text-2xl leading-none text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
            aria-label="Close modal"
            @click="close"
          >
            ×
          </button>

          <div>
            <slot />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.2s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
