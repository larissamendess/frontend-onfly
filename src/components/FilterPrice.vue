<template>
   <div class="filter-price">
      <q-btn-dropdown
        color="white"
        label="Ordenar por: Preço "
        icon="sort"
        class="btn-dropdown"
      >
        <q-list>
          <q-item clickable v-close-popup @click="sort = 'price_asc'">
            <q-item-section>Menor preço</q-item-section>
          </q-item>

          <q-item clickable v-close-popup @click="sort = 'price_desc'">
            <q-item-section>Maior preço</q-item-section>
          </q-item>
        </q-list>
    </q-btn-dropdown>
   </div>


</template>

<script setup lang="ts">

const sort = defineModel<string>('sort')

</script>

<style scoped lang="scss">
.filter-price {
  display: flex;
  justify-content: center;
  width: 100%;
  .q-btn-dropdown {
    margin-top: -16px;
    border-radius: 12px;
    padding: 8px;
    color: $white;
    ::v-deep(span) {
       color: $info-400;
       text-transform: none;
    }
  }
}
</style>
