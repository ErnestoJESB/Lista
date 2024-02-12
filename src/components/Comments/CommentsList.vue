<template>
    <div>
        <h2>Datos de futbolistas Mexicanos</h2>
        <div class="container">
            <CommentItem @-say-bye="clicked($event)" @say-vue="clicked($event)" v-bind="comment"
                v-for="(comment, index) in Comments" :key="index">
            </CommentItem>
        </div>
    </div>
</template>
<script setup lang="ts">
import Comments from '@/data/CommentsData';

import CommentItem from './CommentItem.vue';


const clicked = (event: any) => {
    alert("Selected comment: " + event);
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