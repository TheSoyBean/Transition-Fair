<template>
    <div>
        <NavBar />
        <TtsButton id="tts-button" class="tts-button" />
        <div class="summary" id="summary-text">
            <h2>What is the DSD Transition to Adulthood Fair?</h2>
            <p>Every year, Davis School District (DSD) annually sponsors a free 504 & Special Education Transition Fair
                to help parents, guardians, and students meet and become familiar with the help different agencies and
                organizations can provide. The 2025 Transition Fair will be held Thursday, March 6, 2025. (DSD
                Transition Fair) Further information will be distributed to teachers and parents during the coming
                school year. We invite everyone to attend and meet face-to-face with agencies and organizations to learn
                what would be helpful for them.
                <br /><br />We maintain a list all-year round with those agencies and organizations that participated in
                the last Transition Fair. That list is found under the Help with Transition (Agencies and Organizations)
                link, as well as on our DSD Transition Fair page for convenience.
            </p>
            <h2>When is it? Where will it be?</h2>
            <p>Thursday, March 6, 2025, 5-8 p.m.
                <br />Weber State University Layton Campus Stewart Center - Building D-3
            </p>
            <div class="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3006.632008378223!2d-111.98509602374668!3d41.09888631384056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87530389bc220849%3A0x19799fed97fb6562!2sWeber%20State%20University%20Davis!5e0!3m2!1sen!2sus!4v1736962279789!5m2!1sen!2sus"
                    width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <h2>Areas</h2>

            <h4> Transition Area 1 - Employment</h4>
            <p id="areas-text">
                <br />Transition planning for employment covers skills necessary for many levels of employment, such as:
            </p>
            <ul>
                <li>Competitive Employment</li>

                <li>Self-Employment</li>

                <li>Customized Employment, and</li>

                <li>Supported Employment.</li>
            </ul>
            <p id="areas-text">
                These skills may be in areas such as career exploration, interest inventories, job-matching, applying
                for jobs, building a portfolio, being on-time, following directions, associating with colleagues,
                job-specific skills, work-kits, etc. depending on the student's readiness and level of supports needed.
                <br /><br />
                For more information about transition planning for <a
                    href="https://www.davis.k12.ut.us/o/dsd/page/employment">employment</a>, select this link.
                <br /><br />

                Vocational Rehabilitation is often an agency that helps with employment and post-secondary education.
                Their information can be found under Help with Transition <a
                    href="https://www.davis.k12.ut.us/o/dsd/page/all-agencies-organizations">(All Agencies and
                    Organizations)</a>.
                <br />
            </p>
            <h4>Transition Area 2 - Post-Sec. Education</h4>
            <p id="areas-text">
                Post-Secondary Education looks at what learning setting a student will participate in after receiving
                their high school Diploma or a Certificate of Completion.
                <br /><br />
                Transition planning for Post-Secondary Education refers to skills and preparation needed to attend a
                variety of post-secondary education settings (universities, community colleges, technical school,
                military, apprenticeships, on-the-job training, etc.). A common misconception is that this domain only
                refers to gong to a 4-year university. These skills may be in areas such as choosing a major, class
                selection, assignment completion, test-taking, organization, study skills, following directions, etc.
                All students with disabilities can and should attend some form of post-secondary education/training!
                <br /><br />
                For more information about transition planning for <a
                    href="https://www.davis.k12.ut.us/o/dsd/page/post-secondary-education">Post-Secondary Education</a>,
                please select the link.
                <br /><br />
            </p>

            <h4>Transition Area 3 - Independent Living</h4>
            <p id="areas-text"></p>
            Independent Living refers to skills a person needs to function independently in life, and may include such
            areas as cooking, transportation, budgeting, safety, technology, housing, time management, social skills,
            etc. While different disabilities and needs may require this to be individualized, each person has
            opportunity to be as independent as possible in all areas they can be.

            <br /><br />Select this link to learn more about <a
                href="https://www.davis.k12.ut.us/o/dsd/page/independent-living">Independent Living</a>
            <h2>Who will be there?</h2>
            <a href="https://www.davis.k12.ut.us/o/dsd/page/all-agencies-organizations">Click here to see full list of
                partners</a>
        </div>
    </div>
    <AppFooter />
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import AppFooter from '@/components/AppFooter.vue'
import TtsButton from '@/components/Ttsbutton.vue'
</script>

<style scoped>
.summary {
    padding: 50px;
    margin: 20px;
}
</style>