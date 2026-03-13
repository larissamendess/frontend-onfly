<template>
    <div class="details__complete-information">
           <h3 class="details-hotel__subtitle">Comodidades</h3>
            <div class="details-hotel__comodities" v-if="hotelsDetails?.amenities.length">
             <div
                 v-for="amenity in hotelsDetails?.amenities"
                 :key="amenity.key"
                 class="details-hotel__amenity"
               >
                 <q-icon
                   :name="amenitiesIcons[amenity.key]"
                   size="20px"
                   style="margin-right: 8px;"
                 />
                 <span>{{ amenity.label }}</span>
               </div>
           </div>
           <div v-else class="details-hotel__comodities-empty">
             Nenhuma comodidade disponível.
           </div>
 
             <div class="details-hotel__infos">
               <div class="details-hotel__adress">
                 <p class="details-hotel__localization"> Localização</p>
                 <p v-if="hotelsDetails?.fullAddress.length">{{hotelsDetails?.fullAddress }}</p> 
                 <p v-else> Não há localização disponível.</p>
               </div>
 
               <div class="details-hotel__description">
                 <p class="details-hotel__about">Sobre o {{ hotelsDetails?.name  }}</p>
                 <p v-if="hotelsDetails?.description.length">{{ hotelsDetails?.description }}</p>
                 <p v-else> Não há descrição disponível para essa hospedagem.</p>
               </div>
 
             </div>
         </div>

</template>

<script setup lang="ts">
import type { HotelDetails } from 'src/types/Hotel';
import { amenitiesIcons } from 'src/utils/icons';

interface Props {
  hotelsDetails: HotelDetails | null;
}
const { hotelsDetails } = defineProps<Props>();
</script>

<style scoped lang='scss'>
.details-hotel  {
  &__card {
    padding: 36px;
  }
  &__subtitle{
    font-size: 16px;
    color: $primary;
    margin: 0;

  }
  &__comodities {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      font-size: 12px;
      color: $info-600;
      margin-bottom: 20px;
  }
  &__localization {
    font-size: 16px;
    color: $primary;
    margin-bottom: 0;
  }
  &__about {
    font-size: 16px;
    color: $primary;
    margin-bottom: 0;
  }
}
    
</style>