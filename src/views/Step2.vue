<template>
  <div>
   <Step/>
    <StepSec/>
  </div>
</template>

<script>
import Step from "@/components/Step2";
import StepSec from "@/components/Step2_2";
export default {
  name: "Step2",
  components:{
    StepSec,
    Step
  }

}
</script>

<style scoped>

</style>