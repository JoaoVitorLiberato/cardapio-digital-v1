<template>
  <v-container>
    <v-row
      no-gutters
    >
      <v-col
        cols="12"
      >
        <v-row
          justify="center"
          align="center"
        >
          <v-col
            :cols="$vuetify.breakpoint.xsOnly ? '12' : '6'"
          >
            <a href="https://storyset.com/business">
              <img 
                src="/img/about/about1.svg" 
                alt="Business illustrations by Storyset"
              >
            </a>
          </v-col>
          <v-col
            :cols="$vuetify.breakpoint.xsOnly ? '12' : '6'"
          >
            <h1
              class="mb-3 font-weight-bold"
            >
              Quem somos?
            </h1>
            <p
              class="font-weight-regular"
            >
              Somos um site feito de para pessoas que possam divulgar seus trabalhos gerando 
              visibilidade de forma gratuita para seus negócios.
              O intuito do nosso site é facilitar em suas divulgações divulgação e também 
              nas vendas via Wattsapp, para caso o cliente seja da mesma região ou cidade.
            </p>
          </v-col>
        </v-row> 
      </v-col>
      <v-col
        class="mt-8"
        cols="12"
      >
        <v-row>
          <v-col
            :cols="$vuetify.breakpoint.xsOnly ? '12' : '5'"
          >
            <v-row>
              <v-col
                cols="12"
                :class="$vuetify.breakpoint.mdAndUp ? '' : ''"
              >
                <h2
                  class="font-weight-bold"
                >
                  Perguntas frequentes
                </h2>
                <p
                  class="font-weight-regular"
                >
                  Nesta seção estará disponivel para você algumas peguntas onde você
                  para caso você fique com duvidas em relação ao funcionamento do nosso sistema.
                </p>
              </v-col>
              <v-col
               cols="12"
              >
                <img 
                  src="/img/about/about2.svg" 
                  alt="Business illustrations by Storyset"
                  height="300"
                >
              </v-col>
            </v-row>
          </v-col>
          <v-col
            :cols="$vuetify.breakpoint.xsOnly ? '12' : '5'"
            :style="$vuetify.breakpoint.xsOnly ? '' : 'margin-left:136px'"
          >
            <v-expansion-panels
              focusable
              class="fix-painel-container"
            >
              <v-expansion-panel
                v-for="({title, response}, index) in require('@/data/faqs/about/questions.json')"
                :key="`question-${index}`"
              >
                <v-expansion-panel-header
                  color="#EB310CBF"
                >
                  <span
                    class="text-uppercase font-weight-bold"
                    v-text="title"
                  />
                </v-expansion-panel-header>
                <v-expansion-panel-content
                  class=" py-2"
                >
                  <span
                    class="font-weight-regular"
                    v-text="response"
                  />
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { mixins } from "vue-class-component"
  import { Component } from "vue-property-decorator"
  import "@/assets/styles/views/publicViews/about.styl"

  @Component({})

  export default class About extends mixins() {}
</script>