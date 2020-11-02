<template>
    <Layout>
        <div class="container-fluid p-0">
            <Personal/>
            <hr class="m-0">
            <Experience/>
            <hr class="m-0">
            <Education/>
            <hr class="m-0">
            <Skills/>
            <hr class="m-0">
            <Form/>
        </div>
    </Layout>
</template>

<script>
import Personal from "../components/Personal";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Form from "../templates/Form";

export default {
    components: {
        Personal, Experience, Education, Skills, Form
    },
    metaInfo: {
        title: "Martyna Jońca -  Marketing Specialist"
    }
};
</script>

<style lang="scss">
.subheading {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.2rem;
    @media (min-width: 768px) {
        font-size: 1.5rem;
    }
}

.fa-ul > li {
    display: flex;
    align-items: center;
}

.dev-icons {
    font-size: 3rem;
}

.dev-icons .list-inline-item svg:hover {
    color: var(--primary);
}

section.resume-section {
    padding-top: 5rem !important;
    padding-bottom: 5rem !important;
    max-width: 75rem;
}

section.resume-section .resume-item .resume-date {
    min-width: none;
}

@media (min-width: 768px) {
    section.resume-section {
        min-height: 100vh;
    }
    section.resume-section .resume-item .resume-date {
        min-width: 18rem;
    }
}

@media (min-width: 992px) {
    section.resume-section {
        padding-top: 3rem !important;
        padding-bottom: 3rem !important;
    }
}
</style>
