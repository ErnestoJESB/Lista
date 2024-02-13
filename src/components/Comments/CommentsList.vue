<template>
    <div>
        <h2>Datos de futbolistas Mexicanos</h2>
        <button @click="clicked" >Agregar Jugador</button>
        <div class="container">
            <CommentItem v-bind="comment"
                v-for="(comment, index) in Comments" :key="index">
            </CommentItem>
        </div>
        <CommentAdd></CommentAdd>
    </div>
</template>
<script setup lang="ts">
import Comments from '@/data/CommentsData';
import CommentItem from './CommentItem.vue';
import CommentAdd from './CommentAdd.vue';


const clicked = () => {
    /* Haz que agregue datos al array Comments */
    
};

</script>



<style scoped>
body {
    margin: 0;
    font-family: 'Nunito';
}

.container {
    width: 100%;
    display: grid;
    grid-gap: 2em;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    justify-items: center;
}

@media (min-width: 550px) {
    /*
    .span-2 {
        grid-column: auto / span 2;
    }
    */
}
</style> 