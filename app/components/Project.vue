<script setup lang="ts">
import { computed } from 'vue';
import { projectResults } from '~/constants/projectResults';

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
        Project
      </p>
      <div class="-mr-3 max-h-[min(28rem,55vh)] space-y-8 overflow-y-auto pr-5">
        <ProjectResult
          v-for="projectResult in projectResults"
          :key="projectResult.projectName"
          :project-name="projectResult.projectName"
          :role="projectResult.role"
          :period="projectResult.period"
          :link="projectResult.link"
          :description="projectResult.description"
          :responsibilities="projectResult.responsibilities"
          :skills="projectResult.skills"
        />
      </div>
    </div>
  </Modal>
</template>
