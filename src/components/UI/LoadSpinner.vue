<template>
  <div>
    <div class="container">
      <div class="spinners">
        <div class="spinner-block">
          <div class="spinner spinner-1"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name: 'load-spinner',
};
</script>
<style lang="scss" scoped>
//variables
$bg-color: #fff; //container background-color;
$basic-dark-color: #212121; //color of the spinner
$border-width: 4px; //width of spinners border
$basic-spinner-dimensions: 125px; //width and height of spinner
$main-spinner-dimensions: $basic-spinner-dimensions - $border-width * 2; //width and height of bigger circle
$small-spinner-dimensions: $main-spinner-dimensions * 0.7; //width and height of smaller circle
.container {
  width: 960px;
  margin: 70px auto 0px auto;
  text-align: center;

  h1 {
    font: {
      family: "Lato", sans-serif;
      size: 40px;
    }
    color: $basic-dark-color;
    margin-bottom: 20px;

    & + a {
      color: $basic-dark-color;
      font: {
        family: "Lato", sans-serif;
        size: 20px;
      }
      text-decoration: none;
    }

    &:before {
      content: "{";
      display: inline-block;
      padding-right: 20px;
    }

    &:after {
      content: "}";
      display: inline-block;
      padding-left: 20px;
    }
  }

  .spinners {
    margin-top: 50px;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;

    .spinner-block {
      width: $basic-spinner-dimensions;
      text-align: center;
      margin-right: 83px;

      &:nth-child(5n) {
        margin-right: 0px;
      }

      h2 {
        font: {
          family: "Pacifico", cursive;
          size: 17px;
        }
        color: $basic-dark-color;
        margin-bottom: 20px;
      }
    }
  }
}

/* YOU NEED THESE STYLES */

/* spinner style */
.spinner {
  position: relative;
  width: $basic-spinner-dimensions;
  height: $basic-spinner-dimensions;

  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    border-width: 4px;
    border-style: solid;
    border-radius: 50%;
  }
}

/* spinner-1 styles */
.spinner.spinner-1 {
  @keyframes rotate-animation {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes anti-rotate-animation {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(-360deg);
    }
  }

  &:before {
    width: $main-spinner-dimensions;
    height: $main-spinner-dimensions;
    border-bottom-color: $basic-dark-color;
    border-right-color: $basic-dark-color;
    border-top-color: rgba($basic-dark-color, 0);
    border-left-color: rgba($basic-dark-color, 0);
    top: 0px;
    left: 0px;
    animation: rotate-animation 1s linear 0s infinite;
  }

  &:after {
    width: $small-spinner-dimensions;
    height: $small-spinner-dimensions;
    border-bottom-color: $basic-dark-color;
    border-right-color: $basic-dark-color;
    border-top-color: rgba($basic-dark-color, 0);
    border-left-color: rgba($basic-dark-color, 0);
    top: ($main-spinner-dimensions - $small-spinner-dimensions) / 2;
    left: ($main-spinner-dimensions - $small-spinner-dimensions) / 2;
    animation: anti-rotate-animation 0.85s linear 0s infinite;
  }
}
</style>
