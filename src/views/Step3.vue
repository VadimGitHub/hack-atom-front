<template>
  <div>
   <Step/>
    <StepSec/>
    <StepThe/>
  </div>
</template>

<script>
import Step from "@/components/Step3";
import StepSec from "@/components/Step3_2";
import StepThe from "@/components/Step3_3";
export default {
  name: "Step2",
  components:{
    StepThe,
    StepSec,
    Step
  }

}
</script>

<style scoped>

</style>