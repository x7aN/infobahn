<template>
  <div class="page-wrapper">
    <Header></Header>
    <List></List>
    <Footer></Footer>
  </div>
</template>

<script>
import ScriptList from "/static/js/external_js";
import CssList from "/static/css/external_css";

export default {
  head: {
     bodyAttrs: {
       'data-anm': '.anm'
      },
      link: CssList.map(css=>css),
      script: ScriptList.map(script=>script)
  },
  name: 'IndexPage'
}
</script>
