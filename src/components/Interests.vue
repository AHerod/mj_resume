<template>
    <section class="resume-section p-3 p-lg-5 d-flex align-items-center headline" id="interests">
        <div class="w-100">
            <h2 class="section-title">Pasje</h2>

            <div class="resume-item d-flex flex-column justify-content-between mb-5">
                <div  class="resume-content d-flex align-items-center"
                      v-for="(edge, index) in $static.interests.edges" :class="{'flex-row-reverse': index % 2 === 0 }"
                      v-scroll-reveal.reset>
                    <font-awesome :icon="['fas', edge.node.icon]" size="9x"/>
                    <div class="p-4 p-md-5 w-75">
                        <h3 class="mb-0">{{ edge.node.interest }}</h3>
                        <div class="subheading mb-3">{{ edge.node.details }}</div>
                        <p class="text-capitalize">{{ edge.node.text }}</p>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<style lang="scss" scoped>
#interests {
    .resume-content {
        > div {
            @media screen and (max-width: 768px) {
                width: 100% !important;
            }
        }

        > svg {
            @media screen and (max-width: 420px) {
                font-size: 5em;
            }
        }

        &:nth-child(even) {
            text-align: right;
        }
    }
}
</style>
<static-query>
query {
  interests: allInterests {
    edges {
      node {
        interest
        details
        text
        icon
      }
    }
  }
}

</static-query>
