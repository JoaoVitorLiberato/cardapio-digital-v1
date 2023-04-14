<template>
  <v-dialog
    v-model="dialogSeeMoreProduct"
    transition="dialog-bottom-transition"
  >
    <v-card
      class="fix-card-seeMore-product mx-auto"
      max-width="100%"
      outlined
    >
      <v-list-item
        class="fix-card-seeMore-product-firstContent"
        three-line
      >
        <v-list-item-content>
          <div 
            class="text-overline"
            style="color:#EB310CBF"
          >
            Tudo sobre a receita
          </div>
          <v-row>
            <v-col
              cols="12"
            >
              <h1
                class="font-weight-bold text-uppercase"
                style="color:#EB310CBF"
              >
                {{ titleReceita }}
              </h1>
              <small
                class="text-uppercase font-weight-regular"
                style="color:#808080;"
                v-text="company"
              />
            </v-col>
            <v-col
              cols="12"
            >
              <v-btn
                color="#EB310CBF"
                dark
              >
                <span
                  class="font-weight-bold"
                  v-text="'Tudo sobre a empresa'"
                />
              </v-btn>
            </v-col>
          </v-row>
        </v-list-item-content>

        <img
          class="pt-4"
          src="https://th.bing.com/th/id/R.a4fb5ae2ee2f7d628446fcb7a4c5588e?rik=LwIw84avT5f5Bw&pid=ImgRaw&r=0"
          :width="$vuetify.breakpoint.xsOnly ? '100%' : ''"
          :height="$vuetify.breakpoint.xsOnly ? '' : '250px'"

        >
      </v-list-item>
      <v-list-item>
        <v-row>
          <v-col
            cols="12"
          >
            <h2
              class="font-weight-bold text-uppercase mb-3"
              style="color:#EB310CBF"
            >
              Receita
            </h2>
            <p
              class="font-weight-regular"
            >
              {{ receita }}
            </p>
          </v-col>
          <v-col
            cols="12"
            class="mb-4"
          >
            <h2
              class="font-weight-bold text-uppercase mb-3"
              style="color:#EB310CBF"
            >
              Modo de preparo
            </h2>
            <p
              class="font-weight-regular"
            >
              {{ modoPreparo }}
            </p>
          </v-col>
        </v-row>
      </v-list-item>

      <v-card-actions
        style="background-color: #EB310CBF; opacity: .9;"
      >
        <a
          :href="`https://wa.me/${redirectWattsapp}`"
          target="_blank"
        >
          <span
            style="font-size:15px;color:#fff"
            class="text-uppercase font-weight-bold pl-2"
            v-text="'Eu quero'"
          />
        </a>
        <v-spacer />
        <v-btn
          text
          color="#b2b2b2"
          @click="$emit('closeDialogSeeMoreProduct')"
        >
          <span
            class="font-weight-bold"
            v-text="'Fechar'"
          />
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  import { mixins } from "vue-class-component"
  import { Component, Prop, Emit } from "vue-property-decorator"
  import "@/assets/styles/components/dialogSeeMoreProduct.styl"

  @Component({})

  export default class dialogSeeMoreProduct extends mixins() {
    @Emit('closeDialogSeeMoreProduct')
    @Prop({ default: false }) dialogSeeMoreProduct
    @Prop({ default: "" }) titleReceita
    @Prop({ default: "" }) company
    @Prop({ default: "" }) receita
    @Prop({ default: "" }) modoPreparo
    @Prop({ default: "" }) redirectWattsapp
  }
</script>