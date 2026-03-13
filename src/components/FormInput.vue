<template>
    <q-input filled label="Destino" v-model="model" borderless>
        <q-btn class="container-main__btn" color="primary" icon="search" label="Buscar Hotel"></q-btn>
    </q-input>
</template>

<script setup lang="ts">

const model = defineModel<string>({ default: '' })

</script>

<style lang="scss" scoped>

q-input {
    .q-btn {
        display: none;
    }
}

</style>