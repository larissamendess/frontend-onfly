  <template>
    <div class="hotel-list">

       <FilterPrice 
        v-model:sort="sort"/>
        
        <ul class="hotel-list__item">
        <span v-if="city" class="hotel-list__title-state">Exibindo listas de hotéis em <strong>{{city}}</strong>:</span>
        <li v-for="hotel in listHotelPaginated"
          :key="hotel.id"
          class="hotel-list__itens"
          >
          <div class="hotel-list__card">
            <section class="hotel-list__img">
            <q-img
              :src="hotel.thumb"
              style="height:200px"
            >
              <template #error>
                <q-img
                  :src="imagemDefault"
                  style="height:200px"
                />
              </template>
            </q-img>
            <StarsValue :stars="Number(hotel.stars)" style="padding: 20px;"/>
            </section>

            <section class="hotel-list__infos">
              <div class="hotel-list__infos-acomodacoes">
                <div class="hotel-list__infos-name">
                  <h3>{{ hotel.name }}</h3>
                  <span>{{ hotel.district }}</span>
                </div>

                <div class="hotel-list__amenities">
                  <div v-if="hotel.amenities.length === 0">
                    Não há comodidades para essa hospedagem.
                  </div>
                  <div v-else class="hotel-list__amenities-itens">
                    <q-icon 
                      v-for="amenity in hotel.amenities"
                      :key="amenity"
                      :name="amenitiesIcons[amenity]"
                      size="20px"
                      style="margin-right: 8px;"
                      >
                      
                    </q-icon>
                  </div>
                  <div v-if="hotel.hasRefundableRoom" class="hotel-list__amenities-confort">
                    <q-icon  name="attach_money"/>
                    Reembolsável
                  </div>
                  <div v-if="hotel.hasBreakFast" class="hotel-list__amenities-confort">
                    <q-icon  name="free_breakfast"/>
                    Café da manhã
                  </div>

                </div>
              </div>
            </section>

            <section class="hotel-list__prices">
              <p class="hotel-list__prices-daily">Por dia <strong>{{ formatPrice(hotel.dailyPrice, false)}}</strong></p>
               <div class="hotel-list__prices-more">
                 <p>Diárias <span>{{formatPrice(hotel.dailyPrice) }}</span></p>
                 <p>Taxas <span>{{formatPrice(hotel.tax) }}</span></p>
                 <p>Total <span>{{ formatPrice(hotel.totalPrice, false) }}</span></p>
               </div>

              <q-btn @click="selectHotel(hotel)" class="hotel-list__prices-btn">
                Ver detalhes
              </q-btn>
            </section>
          </div>
        </li>
      </ul>

     
      <ModalDetails :hotel="selectedHotel" />

      <div class="hotel-list__pagination q-pa-lg flex flex-center">
        <q-pagination
          v-model="current"
          :max="totalPages"
        />
      </div>
    </div>
  </template>

  <script setup lang="ts">
  import type { Hotel } from "src/types/Hotel"
  import {ref, computed } from 'vue';
  import ModalDetails from "./ModalDetails.vue";
  import {useHotelsStore} from '../stores/hotels.store';
  import { amenitiesIcons } from "src/utils/icons";
  import { formatPrice } from "src/utils/formatPrice";
  import FilterPrice from "./FilterPrice.vue";
  import imagemDefault  from '../assets/hotel-default.jpg';
  import StarsValue from "./StarsValue.vue";

  const hotelStore = useHotelsStore();

  const current = ref(1)
  const hotelsPerPage = 5
  const selectedHotel = ref<Hotel | null>(null)
  const sort = ref('price_desc')

  interface Props {
    hotels: Hotel[],
    city: string
  }

  const { hotels, city } = defineProps<Props>()

  const totalPages = computed(() => {
    return Math.ceil(hotels.length / hotelsPerPage)
  })

  const listHotelPaginated = computed(() => {
    const start = (current.value - 1) * hotelsPerPage
    const end = start + hotelsPerPage
    return sortHotels.value.slice(start, end)
  })

  const selectHotel = async (hotel: Hotel) => {
    selectedHotel.value = {...hotel};
    await hotelStore.fecthHotelsDetails(hotel.id);
  };

  const sortHotels = computed(() => {
    const list = [...hotels]
    if(sort.value === 'price_asc') {
      return list.sort((a, b) => a.totalPrice - b.totalPrice )
    }

    if(sort.value === 'price_desc') {
      return list.sort((a,b) => b.totalPrice - a.totalPrice )
    }

    return list

  })
 
  </script>

  <style lang="scss" scoped>
  .hotel-list {
    background: $background-full;
    border-radius: 32px 32px 0 0;
    margin-top: -44px;

      &__title-state {
        margin-left: 44px;
        color: $info-600;
        font-size: 16px;
      }

      &__item {
        padding: 0 20px;
      }

      &__itens {
        list-style: none;
      }

      &__card {
        display: flex;
        background: $white;
        height: 250px;
        margin: 40px;
        border-radius: 20px;
        justify-content: space-between;
      }

      &__img {
        width: 375px;
        position: relative;
        img {
          height: 100%;
          object-fit: cover;
          border-radius: 20px 0 0 20px;
        }
      }
      ::v-deep(.q-img){
          height: 100% !important;
          border-radius: 20px 0px 0px 20px;
        }

      &__infos {
        width: 60%;

        &-acomodacoes {
          margin-left: 20px;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          color: $info-600;

          h3 {
            font-size: 16px;
            font-weight: bold;
            margin: 0;
          }
        }
        &-name {
          display: flex;
          flex-direction: column;
        }
      }
      
      &__amenities {
        margin-bottom: 20px;
        &-itens{
          margin-bottom: 20px;
          ::v-deep(.q-icon) {
            background: $info-100;
            padding: 4px;
            border-radius: 16px;
          }
        }
        &-confort {
          color: $success-100;
          font-weight: 600;

        }
      }

      &__prices {
        width: 250px;
        display: flex;
        flex-direction: column;
        margin-left: 20px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        color: $info-400;
        border-left: 1px solid $info-100;
        padding: 12px;
        &-daily {
          display: flex;
          flex-direction: column;
          font-weight: 500;
          margin: 0;
          strong {
            font-weight: bold;
            color: $primary;
            font-size: 16px;
          }
        }
        &-more {
          p {
              display: flex;
              justify-content: space-between;
              font-weight: 500;
              margin: 0;
              font-size: 12px;
          }
        }
        &-btn {
          background-color: $primary;
          color: $white;
          border-radius: 16px;
          text-transform: none;
        }
      }
}

@media (max-width: 768px) {
   .hotel-list {
    height: 100%;
    
    &__itens {
      margin-bottom: 40px;
    }

    &__card{
     margin: 0;
     flex-direction: column;
     height: 100%;
    }

    &__img {
      width: 100%;
    }
   }
}
  </style>