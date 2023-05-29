<!--
VFS VUE Single File Component
Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<script setup>

let name = 'VFS Vue Template';

</script>

<template>

    <section class="flexbox columns about">
        <h1 class="flexitem left title">Charts</h1>
        <div class="flexitem dialog">
            <h3 class="title">Welcome to {{ name }}</h3>
            <p>This {{ name }} is your Vue.js App</p><br/>

            <img src="../src/img/epiccharts.png" alt="Cool Image">

        </div>
    </section>

</template>
<style scoped>
/* Local styles for this template */
    .about {
        /* display: block; */
        margin:2vw;
        border: 1px solid black;
        background-color: lightgray;
        color: black;
        height: 78vh;
        width: 80vw;
    }

</style>

