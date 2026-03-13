<template>
    <q-form class="container-main__form q-pa-md q-pa-lg">
      <q-tabs class="container-main__tabs" v-model="tab" align="left">

        <q-tab name="flight" icon="flight" label="Aéreo"></q-tab>
        <q-tab name="hotel" icon="hotel" label="Hotel"></q-tab>
        <q-tab name="car" icon="directions_car" label="Carro"></q-tab>
        <q-tab name="bus" icon="directions_bus" label="Ônibus"></q-tab>

      </q-tabs>

       <div class="container-main__actions row items-center q-gutter-md q-mt-sm">
          <div class="container-main__input full-width q-pa-md">
            <FormInput v-model="model"/>
          </div>
       </div>
    </q-form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import FormInput from './FormInput.vue';

const tab = ref("hotel")
const model = defineModel<string>({ default: '' })

</script>

<style lang="scss" scoped> 

.container-main {
  height: 300px;
  background: $primary;

 &__form {
    border-radius: 16px;
    font-size: 12px;
    background: white;

    ::v-deep(.q-tab__content.column) {
      flex-direction: row !important;
      gap: 8px;
      align-items: center;
    }

    ::v-deep(.q-tab__indicator) {
      background: $primary;
    }

    ::v-deep(.q-tab__icon),
    ::v-deep(.q-tab__label) {
      color: $info-300;
      transition: color 0.2s;
    }

    ::v-deep(.q-tab--active .q-tab__icon),
    ::v-deep(.q-tab--active .q-tab__label) {
      color: $primary;
    }

    ::v-deep(.q-tab) {
      min-height: 50px;
    }
}

  &__input{
    ::v-deep(.q-field__label) {
      padding-left: 16px;

    }
    ::v-deep(.q-field__native),
    ::v-deep(.q-field__control-container) {
    &:focus-visible {
      outline: none !important;
      box-shadow: none !important;
      
    }

    }
    ::v-deep(.q-field__control) {
      border-radius: 16px;
    }
    ::v-deep(.q-field__control-container){
      justify-content: space-between;
      align-items: center;

    }
    ::v-deep(.q-field__native) {
      width: 40%;
      height: 40px;
      margin: 8px;
      border-radius: 8px;
      border: 2px solid $info-100;
    }

    ::v-deep(.q-btn){
      height: 40px;
      border-radius: 12px;
    }
  }

}

@media (max-width: 768px) {
  ::v-deep(.q-field__native) {
      width: 100% !important;
    }
  .container-main__form {
    ::v-deep(.q-btn){
      display: none;
    }
  }
}
</style>