<template>
<div class="nkn-adviser">
  <div class="common-title">Adviser</div>
  <div class="nkn-adviser-body clearfix">
    <adviser-module>
      <i slot="portrait" class="pic-adviser-diffie"></i>
      <a slot="fullname" :href="$url.ADVISER_LINK.diffie">Whitfield Diffie</a>
      <div slot="honor">Inventor of public key cryptography (Diffie-Hellman)</div>
      <div slot="honor">2015 Turing Award winner</div>
      <div slot="honor-detail">Fellow of the Royal Society;</div>
      <div slot="honor-detail">Member, National Academy of Engineering;</div>
      <div slot="honor-detail">Honorary doctorate from the Swiss Federal Institute of Technology;</div>
      <div slot="honor-detail">Fellow of the Marconi Foundation;</div>
      <div slot="honor-detail">Doctor of Science (Honoris Causa) by Royal Holloway, University of London;</div>
      <div slot="honor-detail">IEEE Donald G. Fink Prize Paper Award in 1981;</div>
      <div slot="honor-detail">The Franklin Institute’s Louis E. Levy Medal in 1997;</div>
      <div slot="honor-detail">Golden Jubilee Award for Technological Innovation from the IEEE Information Theory Society;</div>
      <div slot="honor-detail">IEEE Richard W. Hamming Medal in 2010.</div>
    </adviser-module>
    <adviser-module>
      <i slot="portrait" class="pic-adviser-wolfram"></i>
      <a slot="fullname" :href="$url.ADVISER_LINK.wolfram">Stephen Wolfram</a>
      <div slot="honor">Founder and CEO of Wolfram Research</div>
      <div slot="honor-detail">PhD in theoretical Physics, Caltech, 1979;</div>
      <div slot="honor-detail">Recipient, MacArthur Genius Award, 1981;</div>
      <div slot="honor-detail">Long-term member, Institute for Advanced Study, 1983-1986;</div>
      <div slot="honor-detail">Founder, Center for Complex Systems Research;</div>
      <div slot="honor-detail">Adjunct Professor of Mathematics, Computer Science, Physics, University of Illinois Urbana- Champaign;</div>
      <div slot="honor-detail">Founder, Journal of Complex Systems;</div>
      <div slot="honor-detail">Fellow, American Association for the Advancement of Science;</div>
      <div slot="honor-detail">Bestselling author of A New Kind of Science;</div>
      <div slot="honor-detail">Recipient, Speaker of the Event Award from SXSW Interactive for Making the Biggest Impact on the Digital Community, 2012;</div>
      <div slot="honor-detail">Inaugural Fellow, American Mathematical Society;</div>
      <div slot="honor-detail">Founding Trustee, Museum of Mathematics.</div>
    </adviser-module>
  </div>
</div>
</template>

<script>
import AdviserModule from '@/components/about/plugins/AdviserModule'
export default {
  components: {
    AdviserModule
  }
}
</script>

<style lang="scss" scoped>
.nkn-adviser {
  &-body {
    padding: 100px 0;

    &>div+div {
      margin-left: 30px;
    }
  }
}
</style>
