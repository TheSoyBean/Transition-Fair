<template>
    <NavBar />
    <button id="tts-button" class="tts-button"></button>
    <div id="survey" class="survey">
        <form action="/submit_survey.php">
            <label for="likes">What was your favorite part of the fair?</label><br>
            <input type="text" id="likes" placeholder="Insert text here..."><br>
            <label for="dislikes">What was your least favorite part of the fair?</label><br>
            <input type="text" id="dislikes" placeholder="Insert text here..."><br>
            <label for="prob">Is there any problems you had with the fair?</label><br>
            <input type="text" id="prob" placeholder="Insert text here..."><br>
            <label for="extra">Anything else?</label><br>
            <input type="text" id="extra" placeholder="Insert text here..."><br>
            <button type="submit" value="submit">
                Submit
            </button>
        </form>
    </div>
    <AppFooter />
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import AppFooter from '@/components/AppFooter.vue'
import { onMounted } from 'vue'
onMounted(() => {
    if ('speechSynthesis' in window) {
        var synthesis = window.speechSynthesis;
        document.getElementById('tts-button').addEventListener('click', function () {
            var textElement = document.getElementById('navBar');
            var text = textElement.innerText;
            var utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'en-US';
            utterance.pitch = 1;
            utterance.rate = 1;
            utterance.volume = 1;
            window.speechSynthesis.speak(utterance);

            textElement = document.getElementById('survey');
            text = textElement.innerText;
            utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'en-US';
            utterance.pitch = 1;
            utterance.rate = 1;
            utterance.volume = 1;
            window.speechSynthesis.speak(utterance);
        });

        window.addEventListener('beforeunload', function () {
            if (synthesis.speaking) {
                synthesis.cancel();
            }
        });
    }
    else {
        console.error('TTS not supported');
    }
})

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