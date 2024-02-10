<template>
    <div class="card" :style="{ backgroundColor: backgroundColor, color:fuenteColor } "> 
        <span>
            <h3>#{{ props.id}}</h3>
        <h3>{{props.nombre}}</h3>
        </span>
        <h2>{{ props.descripcion }}</h2>
        <h3>{{ props.fechaNac }}</h3>
        
        <h3>Escoge el color de fondo</h3>
        <div v-for="(color, index) in fondos" :key="index">
            <h3>{{ color.name }}</h3>
            <input type="radio" :name="color.radioName" :value="color.value" @change="changeColor(color.value)">
        </div>

        <h3>Escoge el color de la fuente</h3>
        <div v-for="(color, index) in fuentes" :key="index">
            <h3>{{ color.name }}</h3>
            <input type="radio" :name="color.radioName" :value="color.value" @change="changeFontColor(color.value)">
        </div>

    </div>
</template>
<script setup lang="ts">
import type { IComment } from '@/interfaces/IComment';
import { defineProps, defineEmits, ref } from 'vue';
const props = defineProps<IComment>();
const emits = defineEmits(['SayVue', 'SayBye']);
const backgroundColor = ref('#35D4FC');
const fuenteColor = ref('#ffff');
const clicked = () => {
    emits('SayVue', props.id);
};

const bye = () => {
    emits('SayBye', props.id);
};

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
.card{
    border: 1px solid white;
    padding: 10px;
    margin: 5px;
    border-radius: 15px;
    box-shadow: 1px 3px 10px white;
}
</style>
