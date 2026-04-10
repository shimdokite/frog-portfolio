<script setup lang="ts">
import { computed } from 'vue';
import { skills } from '~/constants/skill';

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
        Skill
      </p>
      <div class="space-y-3 pt-2">
        <div
          v-for="skillGroup in skills"
          :key="skillGroup.title"
          class="space-y-2"
        >
          <h3
            class="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500"
          >
            {{ skillGroup.title }}
          </h3>
          <p class="text-base leading-7 text-slate-600">
            {{ skillGroup.skills.join(' / ') }}
          </p>
        </div>
      </div>
    </div>
  </Modal>
</template>
