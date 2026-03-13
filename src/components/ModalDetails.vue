<template>
  <div class="details-hotel q-pa-md">

    <q-dialog v-model="drawer" position="right">

        <q-card class="details-hotel__card" style="width: 50vw; max-width: 900px; height: 150vh">
          
          <div class="details-hotel__info-title">
            <h2 class="details-hotel__title">{{ hotelStore.hotelsDetails?.name }}</h2>

            <q-btn class="details-hotel__close" icon="close" flat round dense v-close-popup />
          </div>

          <CarroselImage :hotelsDetails="hotelStore.hotelsDetails"/>
          <InfosHotel :hotels-details="hotelStore.hotelsDetails"/>

        </q-card>
    </q-dialog>
  </div>
</template>

<script setup lang="ts">
import type { Hotel } from "src/types/Hotel";
import { ref, watch } from "vue";
import { useHotelsStore } from 'src/stores/hotels.store';
import CarroselImage from '../components/CarroselImage.vue'
import InfosHotel from "./InfosHotel.vue";

const hotelStore = useHotelsStore();

const drawer = ref(false);

interface Props {
  hotel: Hotel | null;
}

const { hotel } = defineProps<Props>();

watch(
  () => hotel,
  (newHotel) => {
    if (newHotel) drawer.value = true;
  }
);

</script>


 <style scoped lang="scss">
.details-hotel  {
  &__card {
    padding: 36px;
  }
  &__info {
    &-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  &__title {
      font-size: 16px;
      color: $info-400;
      font-weight: 500;
  }
}

@media (max-width: 768px) {
  .details-hotel  {
    &__card {
      width: 100% !important;
    }
  }
}
</style>
