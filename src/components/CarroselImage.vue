<template>
  <div class="details-hotel__carrosel">
      <div class="q-gutter-md">
        <q-carousel
          v-if="hotelsDetails?.images?.length"
          v-model="slideCarrosel"
          transition-prev="scale"
          transition-next="scale"
          swipeable
          animated
          control-color="$white"
          padding
          arrows
          height="300px"
          class="bg-primary text-white shadow-1 rounded-borders"
        >
          <q-carousel-slide 
              v-for="(img, index) in hotelsDetails?.images"
              :key="img.length"
              :name="index"
              class="details-hotel__carrosel-item">
              <q-img 
                  class="details-hotel_carrosel-img" 
                  :src="img" 
                  :alt="hotelsDetails?.description" 
                  style="height: 100%; width: 100%"/>
          </q-carousel-slide>
        </q-carousel>


        <StarsValue :stars="Number(hotelsDetails?.stars ?? 0)" />

      </div>
    </div>
</template>

<script setup lang="ts">
import type { HotelDetails } from 'src/types/Hotel';
import { ref } from 'vue';
import StarsValue from './StarsValue.vue';

interface Props {
  hotelsDetails: HotelDetails | null;
}
const { hotelsDetails } = defineProps<Props>();
const slideCarrosel = ref(0);

</script>

<style scoped lang="scss">
.details-hotel {
  &__carrosel {
    position: relative;
     &-item {
       padding: 0 !important;
     }
 
      ::v-deep(.q-carousel__arrow button) {
       width: 40px;
       height: 40px;
       background-color: $white;
     }
 
     ::v-deep(.q-carousel__arrow i) {
       font-size: 20px;
       color: $primary;
     }
 
     ::v-deep(.q-carousel__prev-arrow),
     ::v-deep(.q-carousel__next-arrow)  {
       top: auto;
     }
   }
}
</style>

