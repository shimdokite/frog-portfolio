<script setup lang="ts">
import { computed } from 'vue';

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
  <Modal v-model="isOpen">
    <div class="space-y-4">
      <p
        class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500"
      >
        Education
      </p>
      <p class="text-base leading-7 text-slate-600">
        백석예술대학교 | 2019.08 ~ 2021.02<br />
      </p>
      <p class="text-base leading-7 text-slate-600">
        정보처리산업기사 | 2024.12
      </p>
      <p class="text-base leading-7 text-slate-600">SQLD | 2024.06</p>
    </div>
  </Modal>
</template>
