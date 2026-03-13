import { defineStore } from "pinia"
import { getHotels, getHotelsDetails } from "../services/hotelsService"
import type { Hotel, HotelDetails } from "../types/Hotel"

export const useHotelsStore = defineStore("hotels", {
  state: () => ({
    hotels: [] as Hotel[] ,
    hotelsDetails: null as HotelDetails | null,
    loadingHoteis: false,
    loadingDetails: false,
    error: false
  }),

  actions: {
    async fetchHotels() {
       this.loadingHoteis = true
       this.error = false
      try {
        this.loadingHoteis = true
        const data = await getHotels()
        this.hotels = data
      } catch (error) {
        this.error = true
        console.error(error, "Error store hotels")
      }
      finally {
        this.loadingHoteis = false
      }
    },
    async fecthHotelsDetails(id: number) {
       this.loadingDetails = true
       this.error = false
      try {
        this.loadingDetails = true
        const data = await getHotelsDetails(id)
        this.hotelsDetails = data
      } catch (error) {
        this.error = true
        console.error(error, "Error store hotels")
      } finally {
        this.loadingDetails = false
      }
    }
  }
})