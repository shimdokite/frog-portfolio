<script setup lang="ts">
import { computed } from 'vue';
import { workResults } from '~/constants/workResults';

const props = withDefaults(
  defineProps<{
    modelValue: boolean;
  }>(),
  {}
);

const emit = defineEmits<{
  'update:modelValue': [value: boolean];
}>();

const isOpen = computed({
  get: () => props.modelValue,
  set: (value: boolean) => emit('update:modelValue', value)
});
</script>

<template>
  <Modal v-model="isOpen" panel-class="max-w-2xl">
    <div class="space-y-4">
      <p
        class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500"
      >
        Work Experience
      </p>
      <h2 class="text-3xl font-semibold text-slate-900">
        NI System | Web Developer
      </h2>
      <p class="text-base leading-7 text-slate-600">2024.06.14 - 2025.11.07</p>
      <div class="-mr-3 max-h-[min(28rem,55vh)] space-y-6 overflow-y-auto pr-5">
        <WorkResult
          v-for="workResult in workResults"
          :key="workResult.projectName"
          :project-name="workResult.projectName"
          :period="workResult.period"
          :results="workResult.results"
        />
      </div>
    </div>
  </Modal>
</template>
