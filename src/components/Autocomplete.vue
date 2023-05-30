<script setup lang="ts">
 import { ref, onMounted, watch } from 'vue'

 // const props = defineProps<{
 //   items: String[]
 //   modelValue: String
 // }>()
 // 
 // const emit = defineEmits<{
 //   (e: 'update:modelValue', value: string): void
 // }>()

 type Country = {
   name: {
     common: String;
   }
 }

 const val = ref("")
 const countries = ref<String[]>([])
 const items = ref<String[]>([])
 
 onMounted(async () => {
   const url = "https://restcountries.com/v3.1/all?fields=name";
   const res = await fetch(url)
   const countryArray = (await res.json() as Country[])
   const newItems = countryArray.map((p) => p.name.common).sort();
   countries.value = newItems
 })

 watch(val, () => {
   const newItems = countries.value
                             .filter((p) => p.toLowerCase().includes(val.value.toLowerCase()))
                             .sort();
   items.value = newItems;
 })
</script>

<template>
  <div class="dropdown">
    <input
      type="text"
      class="input input-bordered w-full"
      placeholder="Type something..."
      :tabindex="0"
      v-model="val"
    >
    <div class="dropdown-content bg-base-200 top-14 w-full max-h-96 overflow-auto flex-col rounded-md">
      <ul class="menu menu-compact">
        <li v-for="(item, index) in items" :key="index" :tabindex="index + 1" class="border-b border-b-base-content/10 w-full" @click="val = item">
          <button>{{ item }}</button>
        </li>
      </ul>
    </div>
  </div>
</template>
