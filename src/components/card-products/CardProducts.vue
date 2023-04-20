<template>
  <v-card
    :class="$vuetify.breakpoint.xsOnly ? 'mx-auto' : 'mx-3 my-2'"
    max-width="320"
  >
    <v-img
      :src="img_url"
      height="200px"
    />

    <v-card-title
      class="text-uppercase font-weight-bold"
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
      <div>
        <div
          v-if="router === 'me'"
        >
          <v-btn
            text
            x-small
            plain
            @click="$emit('editProduct')"
          >
            <v-icon
              color="#EB310CBF"
              size="22"
            >
              {{ icon.edit }}
            </v-icon>
          </v-btn>
          <v-btn
            text
            x-small
            plain
            @click="$emit('deleteProduct')"
          >
            <v-icon
              color="#EB310CBF"
              size="22"
            >
              {{ icon.delete }}
            </v-icon>
          </v-btn>
        </div>
        <a
          v-else
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
      </div>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mdiLeadPencil, mdiDelete } from "@mdi/js";
  import { Component, Prop, Emit } from "vue-property-decorator"
  import { mixins } from "vue-class-component"
  import router from "@/router"

  @Component({})

  export default class CardProduct extends mixins() {
    icon = {
      edit: mdiLeadPencil,
      delete: mdiDelete
    }

    router = router.currentRoute.name

    @Emit('dialogDataProduct')
    @Emit('editProduct')
    @Emit('deleteProduct')
    @Prop({ default: '' }) img_url
    @Prop({ default: '' }) titleProduct
    @Prop({ default: '' }) company
    @Prop({ default: '' }) redirectWattsapp
  }
</script>