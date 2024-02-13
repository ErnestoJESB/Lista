<template>
    <div>
        <h2>Datos de futbolistas</h2>
        <CommentAdd @-data="clicked"/>
        <div class="container">
            <CommentItem v-bind="comment"
                v-for="(comment, index) in Comments" :key="index">
            </CommentItem>
        </div>
    </div>
</template>
<script setup lang="ts">
import Comments from '@/data/CommentsData';
import CommentItem from './CommentItem.vue';
import CommentAdd from './CommentAdd.vue';
import { ref } from 'vue';

console.log(Comments);

const clicked = (data: any) => { 
    console.log(Comments.length + 1)   
    const newLength = Comments.length + 1;
    data.value.id = newLength;
    console.log(data);
    Comments.push(data);
    
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
    padding-top: 50px;
}

@media (min-width: 550px) {
    /*
    .span-2 {
        grid-column: auto / span 2;
    }
    */
}


</style> 