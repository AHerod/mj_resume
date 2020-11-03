<template>
    <section class="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
        <div class="w-100">
            <h2 class="section-title">Doświadczenie</h2>

            <ClientOnly>
                <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5"
                     v-for="edge in $static.experience.edges"
                     v-scroll-reveal.reset>
                    <div class="resume-content">
                        <h3 class="mb-0">{{ edge.node.job_title }}</h3>
                        <div class="subheading mb-3">{{ edge.node.company }}</div>
                        <ul>
                            <li v-for="duty in edge.node.duties">{{ duty }}</li>
                        </ul>
                    </div>
                    <div class="resume-date text-md-right">
                        <span class="text-primary text-capitalize">{{ edge.node.date_from }} - {{
                                edge.node.date_to
                            }}</span>
                    </div>
                </div>
            </ClientOnly>


        </div>
    </section>
</template>

<static-query>
query {
experience: allExperience {
edges {
node {
job_title
company
duties
date_from
date_to
}
}
}
}
</static-query>

<script>
export default {
    mounted() {
        this.$VueScrollReveal({
            duration: 800,
            scale: 1,
            distance: '10px',
            mobile: false
        });
    }
}
</script>
