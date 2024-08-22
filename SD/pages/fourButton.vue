<template>
  <div class="container ButtonsFourContainer">
    <!-- Your template content here -->

    <div class="buttonsFour">
      <button class="ButtonUniversity">University of Warwick</button>

      <button class="ButtonUniversity">University of Cambridge</button>
      <button class="ButtonUniversity">University of Manchester</button>
      <button class="ButtonUniversity">University of Nottingham</button>
    </div>
  </div>
</template>
<script setup>
</script>

<style>
.ButtonUniversity{
  color: white;
  border: none;
  padding: 7px 28px;
/*   opacity: 0px; */
  background: #e8550d;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 500;
  border-radius: 40px;

}
.container.ButtonsFourContainer {
  max-width: 100%;
  justify-content: center;
  display: flex;
}
.buttonsFour {
    margin-left: 0px;
    margin-top: 50px;
    display: flex;
    gap: 15px;
}

</style>