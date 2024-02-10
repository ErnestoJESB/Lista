<template>
    <div class="card"> 
        <span>
            <h3>#{{ props.id + 1 }}</h3>
        <h3>{{props.date}}</h3>
        </span>
        <h2>{{ props.title }}</h2>
        <h3>{{ props.body }}</h3>
        <!-- <button @click="clicked()" v-on:click="clicked()">hola</button> -->
        <button @click="clicked()">hola</button>
        <button @click="bye()">bye</button>
    </div>
</template>
<script setup lang="ts">
import type { IComment } from '@/interfaces/IComment';
const props = defineProps<IComment>();
const emits = defineEmits(['SayVue', 'SayBye']);
const clicked = () => {
    emits('SayVue', props.id + 1);
};

const bye = () => {
    emits('SayBye', props.autor );
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
