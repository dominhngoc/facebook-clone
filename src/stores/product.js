import { computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import { thumbnails } from './product-contruction'
export const useProduct = defineStore('prod', {
  state: () => ({
   images: []
  }),
  actions: {
    getImages() {
      console.log(thumbnails)
      this.images = [...thumbnails]
    }
  }

})
