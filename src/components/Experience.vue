<template>
    <section class="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
        <div class="w-100">
            <h2 class="mb-5">Doświadczenie</h2>

            <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5"  v-for="edge in $static.experience.edges">
                <div class="resume-content">
                    <h3 class="mb-0">{{ edge.node.job_title }}</h3>
                    <div class="subheading mb-3">{{ edge.node.company }}</div>
                    <p>{{ edge.node.info }}</p>
                </div>
                <div class="resume-date text-md-right">
                    <span class="text-primary">{{ edge.node.date_from }} - {{ edge.node.date_to }}</span>
                </div>
            </div>
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
                date_from
                date_to
            }
        }
    }
}
</static-query>
