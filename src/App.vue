<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'

// const props = defineProps<{
//   items: String[]
//   modelValue: String
// }>()
//
// const emit = defineEmits<{
//   (e: 'update:modelValue', value: string): void
// }>()

interface Country {
  name: {
    common: String
  }
}

const val = ref('')
const countries = ref<String[]>([])
const items = ref<String[]>([])
const value = ref('')

onMounted(async () => {
  const url = 'https://restcountries.com/v3.1/all?fields=name'
  const res = await fetch(url)
  const countryArray = (await res.json() as Country[])
  const newItems = countryArray.map(p => p.name.common).sort()
  countries.value = newItems
})

watch(val, () => {
  const newItems = countries.value
    .filter(p => p.toLowerCase().includes(val.value.toLowerCase()))
    .sort()
  items.value = newItems
})
</script>

<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="text-center lg:text-left">
        <h1 class="text-5xl font-bold">
          Sök efter din stad
        </h1>
        <p>{{ value }}</p>
        <p class="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
        </p>
        <div class="dropdown">
          <input
            v-model="val"
            type="text"
            class="input input-bordered w-full"
            placeholder="Type something..."
            :tabindex="0"
          >
          <div class="dropdown-content bg-base-200 top-14 w-full max-h-96 overflow-auto flex-col rounded-md">
            <ul class="menu menu-compact">
              <li v-for="(item, index) in items" :key="index" :tabindex="index + 1" class="border-b border-b-base-content/10 w-full">
                <button>{{ item }}</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
