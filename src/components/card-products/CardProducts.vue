<template>
  <v-card
    :class="$vuetify.breakpoint.xsOnly ? 'mx-auto' : 'mx-3 my-2'"
    max-width="320"
  >
    <v-img
      src="https://th.bing.com/th/id/R.a4fb5ae2ee2f7d628446fcb7a4c5588e?rik=LwIw84avT5f5Bw&pid=ImgRaw&r=0"
      height="200px"
    />

    <v-card-title
      class="text-uppercase"
    >
      {{ titleProduct }}
    </v-card-title>

    <v-card-subtitle
      class="text-uppercase"
      :style="`font-size:${$vuetify.breakpoint.xsOnly ? '13' : '12'}px`"
    >
      {{ company }}
    </v-card-subtitle>

    <v-card-actions
      class="d-flex justify-space-between"
    >
      <v-btn
        color="#EB310CBF"
        text
        @click="$emit('dialogDataProduct')"
      >
        <span
          class="font-weight-bold"
          v-text="'Ver'"
        />
        <v-icon
          size="20"
        >
          mdi-plus
        </v-icon>
      </v-btn>

      <a
        class="redirect-wattsapp mr-2 "
        :href="`https://wa.me/${redirectWattsapp}`"
        target="_blank"
      >
        <span
          style="font-size:14px;color:#EB310CBF"
          class="text-uppercase font-weight-bold"
          v-text="'Eu quero'"
        />
      </a>
    </v-card-actions>
  </v-card>
</template>

<script>
  import { Component, Prop, Emit } from "vue-property-decorator"
  import { mixins } from "vue-class-component"

  @Component({})

  export default class CardProduct extends mixins() {
    @Emit('dialogDataProduct')
    @Prop({ default: '' }) titleProduct
    @Prop({ default: '' }) company
    @Prop({ default: '' }) redirectWattsapp
  }
</script>