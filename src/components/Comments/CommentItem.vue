<template>
    <div class="card" :style="{ backgroundColor, color: fuenteColor }">
        <div class="header">
            <h3>#{{ props.id }}</h3>
            <h3>{{ props.nombre }}</h3>
        </div>
        <h3>{{ props.descripcion }}</h3>
        <h3>{{ props.fechaNac }}</h3>

        <div class="color-picker">
            <h3>Escoge el color de fondo</h3>
            <div class="color" v-for="(color, index) in fondos" :key="index">
                <p>{{ color.name }}</p>
                <input type="radio" :name="color.radioName" :value="color.value" @change="changeColor(color.value)">
            </div>

            <h3>Escoge el color de la fuente</h3>
            <div v-for="(color, index) in fuentes" :key="index">
                <p>{{ color.name }}</p>
                <input type="radio" :name="color.radioName" :value="color.value" @change="changeFontColor(color.value)">
            </div>
        </div>

    </div>
</template>
<script setup lang="ts">
import type { IComment } from '@/interfaces/IComment';
import { defineProps, defineEmits, ref } from 'vue';
const props = defineProps<IComment>();


const emits = defineEmits(['SayVue', 'SayBye']);

const clicked = () => {
    emits('SayVue', props.id);
};

const backgroundColor = ref('#35D4FC');
const fuenteColor = ref('#ffff');

const fondos = [
    { name: 'Verde', value: '#5AA877', radioName: 'background' },
    { name: 'Amarillo', value: '#FFF36F', radioName: 'background' },
    { name: 'Rosa', value: '#FC357A', radioName: 'background' }
];

const fuentes = [
    { name: 'Verde', value: '#3E12FF', radioName: 'fuenteColor' },
    { name: 'Amarillo', value: '#5744AB', radioName: 'fuenteColor' },
    { name: 'Rosa', value: '#FF7A12', radioName: 'fuenteColor' }
];

const changeColor = (color: string) => {
    backgroundColor.value = color;
};

const changeFontColor = (color: string) => {
    fuenteColor.value = color;
};


</script>
<style scoped>
.color-picker {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 60%;
    margin: auto;
    /* Centrar en la página */
}

.color-picker>div {
    flex: 1;
    margin-right: 20px;
    /* Espacio entre las secciones */
}

.color {
    flex-wrap: wrap;
}

.color-picker h3 {
    font-size: 18px;
    margin-bottom: 10px;
}

.color-picker label {
    display: block;
    margin-bottom: 10px;
}

.color-picker p {
    margin: 0;
}

/* Agrega estilos adicionales según tus necesidades */</style>