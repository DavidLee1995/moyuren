<template>
    <div class="into">
        <kinesis-container>
            <kinesis-element class="into-fontSize" @click="handleOpenWord" :strength="400"> 有好康的，想看吗 </kinesis-element>
        </kinesis-container>
    </div>
</template>

<script setup>
import { KinesisContainer, KinesisElement } from "vue-kinesis";
import { useRouter } from "vue-router";
const router = useRouter();
const handleOpenWord = () => {
    console.log("小子，你点到我了");
    router.push({
        path: "/house"
    })
}
</script>

<style scoped>
.into-fontSize {
    font-size: 20px;
    font-weight: 700;
}
</style>