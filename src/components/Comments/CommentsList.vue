<template>
    <div>
        <h2>Comments</h2>
        <button @click="clicked">Clickeame</button>
        <ul>
            <CommentItem @-say-bye="clicked($event)" @say-vue="clicked($event)" v-bind="comment" v-for="(comment, index) in Comments" :key="index">
            </CommentItem>
        </ul>
    </div>
</template>
<script setup lang="ts">
import Comments from '@/data/CommentsData';
import CommentItem from './CommentItem.vue';
const clicked = (event :any) => {
    alert("Selected comment: " + event);
};
</script>

<style scoped></style>