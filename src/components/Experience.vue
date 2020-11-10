<template>
    <section class="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
        <div class="w-100" v-for="edge in $static.experience.edges">
            <h2 class="section-title">Doświadczenie</h2>

            <ClientOnly>
                <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5"
                     v-for="experience in edge.node.experience"
                     v-scroll-reveal.reset>
                    <div class="resume-content">
                        <h3 class="mb-0">{{ experience.job_title }}</h3>
                        <div class="subheading mb-3">{{ experience.company }}</div>
                        <ul>
                            <li v-for="duty in experience.duties">{{ duty }}</li>
                        </ul>
                    </div>
                    <div class="resume-date text-md-right">
                        <span class="text-primary text-capitalize">{{ experience.date_from }} - {{
                                experience.date_to
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
experience {
  job_title
company
duties
date_from
date_to
}
}
}
}
}
</static-query>
