<template lang="pug">
  div
    md-field
      label Initial Value
      md-input(v-model='initial')
    md-field
      label Initial Value (Read Only)
      md-input(v-model='initial' readonly)
    md-field
      label Type Here!
      md-input(v-model='type')
      span.md-helper-text Helper Text
    md-field
      label With Label
      md-input(v-model='withLabel' placeholder='A nice placeholder')
    md-field(md-inline)
      label Inline
      md-input(v-model='inline')
    md-field
      label Number
      md-input(v-model='number' type='number')
    md-field
      label Textarea
      md-textarea(v-model='textarea')
    md-field
      label Textarea with Autogrow
      md-textarea(v-model='autogrow' md-autogrow)
    md-field
      label Disabled
      md-input(v-model='disabled' disabled)
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Form',
  data: () => ({
    initial: 'Initial Value',
    type: null,
    withLabel: null,
    inline: null,
    number: null,
    textarea: null,
    autogrow: null,
    disabled: null
  })
})
</script>

<style lang="scss" scoped>
</style>


