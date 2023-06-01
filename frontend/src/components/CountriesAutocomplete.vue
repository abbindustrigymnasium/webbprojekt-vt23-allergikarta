<script setup lang="ts">
 import { ref, onMounted, onUpdated, computed } from 'vue'
 import AutoComplete from './Autocomplete.vue'

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
   const newItems = countryArray.map((c) => c.name.common).sort()
   countries.value = newIems
 })
   if(!val.value) {
     items.value = countries.value
   }

 const newItems = computed(() => {
   return countries.value.filter((c) => c.toLowerCase().includes(val.value.toLowerCase())).sort()
 })
</script>

<template>
  <AutoComplete v-model="val" :items="items"></AutoComplete>
</template>
