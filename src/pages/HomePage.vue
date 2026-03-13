<template>
  <HeaderMain />
    <div class="container-main full-width q-pa-lg">
      <FormSearch v-model="searchDestination"/>
    </div>

    <div class="container-main__status" v-if="hotelStore.loadingHoteis">
      Carregando hotéis...
    </div>

    <div class="container-main__status" v-else-if="hotelStore.error">
      Erro ao carregar hotéis. Tente novamente mais tarde.
    </div>

    <div class="container-main__status" v-else-if="!filteredHotels.length">
      Nenhum hotel encontrado para essa cidade. Refaça sua busca.
    </div>

    <div >
      <ListHotel 
       :hotels="filteredHotels"
       :city="cidadePesquisada 
        ? `${cidadePesquisada.name}, 
        ${cidadePesquisada.state.shortname}` 
        : ''"/>
    </div>


</template>

<script setup lang="ts">
  import { onMounted, ref, computed } from 'vue';
  import {useHotelsStore} from '../stores/hotels.store';
  import ListHotel from 'src/components/ListHotel.vue';
  import { useCitiesStore } from 'src/stores/cities.store';
  import HeaderMain from '../components/HeaderMain.vue';
  import FormSearch from 'src/components/FormSearch.vue';
  
  const hotelStore = useHotelsStore();
  const citiesStore = useCitiesStore();
  const searchDestination = ref("")

  onMounted(async () => {
    await hotelStore.fetchHotels();
    await citiesStore.fetchCities();
  });

  const cidadePesquisada = computed(() => {
     if (searchDestination.value.length < 3) return null;
    return citiesStore.cities.find(city => city.name.toLowerCase().includes(searchDestination.value.toLowerCase()))
  })

  const filteredHotels = computed(() => {
    if (searchDestination.value.length < 3) {
      return hotelStore.hotels
    }

    if (!cidadePesquisada.value) {
      return []
    }

    return hotelStore.hotels.filter(
    hotel => hotel.placeId === cidadePesquisada.value?.placeId )
  })

</script>

<style lang="scss" scoped> 

.container-main {
  height: 300px;
  background: $primary;
  &__status{
    margin-left: 36px;
  }
}
</style>