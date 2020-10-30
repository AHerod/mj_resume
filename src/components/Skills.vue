<template>
    <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
        <div class="w-100">
            <h2 class="mb-5">Specjalizacje</h2>
            <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div class="resume-content d-flex flex-wrap justify-content-around resume-content" v-for="edge in $static.skills.edges">
                    <div class="skill subheading mb-3 shadow" v-for="skill in edge.node.skills">{{ skill }}</div>
                </div>
            </div>
        </div>
    </section>
</template>

<static-query>
query {
    skills: allSkills {
        edges {
            node {
                skills
            }
        }
    }
}
</static-query>
