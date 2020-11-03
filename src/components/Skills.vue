<template>
    <section class="resume-section p-3 p-lg-5 d-flex  flex-column align-items-center" id="skills">

        <ClientOnly>
            <div class="w-100">
                <h2 class="section-title">Specjalizacje</h2>
                <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div class="resume-content d-flex justify-content-center flex-wrap skills"
                         v-for="edge in $static.skills.edges" v-scroll-reveal.reset>
                        <div class="skill subheading mb-3 shadow" v-for="skill in edge.node.main_skills">{{
                                skill
                            }}
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-100">
                <h2 class="section-title">Umiejętności</h2>
                <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div class="resume-content d-flex justify-content-center flex-wrap skills"
                         v-for="edge in $static.skills.edges" v-scroll-reveal.reset>
                        <div class="skill subheading mb-3 shadow" v-for="skill in edge.node.skills">{{ skill }}</div>
                    </div>
                </div>
            </div>
        </ClientOnly>

    </section>
</template>

<static-query>
query {
skills: allSkills {
edges {
node {
main_skills
skills
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

<style lang="scss">
#skills {
    min-height: 60vh;
}
</style>
