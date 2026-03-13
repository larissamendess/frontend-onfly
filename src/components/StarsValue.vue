<template>
    <div class="stars">
     <div class="stars__item">
            <q-icon
            v-for="iconStar in 5"
            :key="iconStar"
            :name="iconStar <= stars ? 'star' : 'star_border'"
        />
        </div>
    </div>
</template>

<script setup lang="ts">

interface Props {
     stars: number
}

const { stars } = defineProps<Props>();

</script>

<style scoped lang="scss">
.stars {
    position: absolute; 
    top:0;
    left: 0;

    &__item {
        background: white;
        width: 80px;
        padding: 4px;
        border-radius: 16px;
        ::v-deep(.q-icon) {
        color: $primary;
        }
    }
}
</style>