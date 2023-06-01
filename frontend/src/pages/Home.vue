<script setup lang="ts">
import SwedenMap from '../components/SwedenMap.vue'

function selectRegion(payload: MouseEvent) {
  if (!payload.target || !(payload.target instanceof SVGPathElement))
    return

  const attributes = payload.target.attributes
  const municipality = attributes.getNamedItem('municipality')
  if (!municipality)
    return
    // hehhehhehheheh

  console.log('hehehhehhe')
}
</script>

<template>
  <div class="min-h-screen bg-base-200">
    <div class="navbar bg-base-100">
      <a class="btn btn-ghost normal-case text-xl">Allergikartan</a>
    </div>
    <div class="flex flex-col w-full items-center p-4">
      <h1 class="font-semibold text-3xl">
        Karta
      </h1>
      <div class="divider" />
      <SwedenMap class="max-w-sm" @click="selectRegion" />
      <div class="divider" />
      <div class="grid h-20 card bg-base-300 rounded-box place-items-center">
        content
      </div>
    </div>
    <div class="flex flex-col items-center gap-4 p-4" />
    <div />
  </div>
</template>
