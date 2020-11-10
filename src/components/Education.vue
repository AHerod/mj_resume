<template>
    <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
        <div class="w-100" v-for="edge in $static.education.edges">
            <h2 class="section-title">Edukacja</h2>

            <ClientOnly>
                <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5"
                     v-for="education in edge.node.education"
                     v-scroll-reveal.reset
                >
                    <div class="resume-content">
                        <h3 class="mb-0">{{ education.major }}</h3>
                        <div class="subheading mb-3">{{ education.university }}</div>
                        <p class="text-capitalize">{{ education.degree }}</p>
                    </div>
                    <div class="resume-date text-md-right">
                        <span class="text-primary text-capitalize">{{ education.date_from }} - {{ education.date_to }}</span>
                    </div>
                </div>
            </ClientOnly>

        </div>
    </section>
</template>

<static-query>
query {
  education: allEducation {
    edges {
      node {
        education {
          university
          major
          degree
          date_from
          date_to
        }
      }
    }
  }
}

</static-query>
