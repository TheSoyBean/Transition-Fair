<template>
    <NavBar />
    <TtsButton id="tts-button" class="tts-button"/>
    <div id="survey" class="survey">
        <iframe width="640px" height="480px" src="https://forms.office.com/Pages/ResponsePage.aspx?id=dPKcPX5U9UqN3gGmNuC2B5J9yh_VULdNhlcvUdOGSo1UQU81SjlFTzhMSURQU1lFNVBDWFdVTjlGUi4u&embed=true" frameborder="0" marginwidth="0" marginheight="0" style="border: none; max-width:100%; max-height:100vh" allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>
    </div>
    <AppFooter />
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import AppFooter from '@/components/AppFooter.vue'
import TtsButton from '@/components/TtsButton.vue'
</script>

<style scoped>
.survey label {
    font-size: 20px;
    margin: 10px 0;

}

.survey {
    display: flex;
    flex-direction: column;
    max-width: 600px;
    margin: 0 auto;
    margin-top: 20px;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.survey input[type="text"],
.survey input[type="email"],
.survey textarea {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
}

.survey input[type="submit"] {
    background-color: #07396b;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
}

.survey input[type="submit"]:hover {
    background-color: #05508c;
}
</style>