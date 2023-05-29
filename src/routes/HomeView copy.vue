<!--
<VFSHome name="Title" />
Copyright (c) 2023. Kibble Game Studios Inc. All Rights Reserved.
-->
<script setup>

    let formData = {
        sampleOne:"",
        sampleTwo:42,
    }
        
    let props = defineProps({ 
        name: String,
    })

</script>


<template>

    <section class="flexbox columns home">
        <h1 class="flexitem left title">Home</h1>
        <h3>Welcome to your {{ name }}</h3>
        <div class="flexitem dialog">
            <form class="sample-form">
                <label for="s1">Sample field:
                    <input name="s1" v-model="formData.sampleOne">
                </label><br/>
                <label for="s2">Number field:
                    <input name="s2" v-model="formData.sampleTwo">
                </label><br/>
                <button value="Submit" class="">Submit</button>
            </form>
        </div>
    </section>

</template>
<style scoped>
    /* Local styles for this template */
    .home {
        margin:2vw;
        border: 1px solid black;
        background-color: lightgray;
        color: black;
        height: 78vh;
        width: 80vw;
    }

    .sample-form {
        border: 2px solid #333;
        margin: 1em;
        padding: 2em;
    }

    label { text-shadow: #333 1px 1px; }

    select, input, button {
        font-size: 1.2em;
        font-weight: 700;
        height: 1.4em;

    }

    button {
        padding: .5em;
        margin: .25em;
        padding-bottom: 1.5em;
    }
</style>

