<script>
export default {
  name: 'EmployeeCard',
  props: ['employee'],
}
</script>

<template lang="pug">
.box
  h1 {{ employee.name }} 
  h2 {{ employee.jobTitle }}
  h3 {{ employee.nationality }} --- {{ employee.personelNo }}
</template>

<style lang="scss" scoped>
.box {
  padding: 2rem;
  border: 1px solid rgb(55, 215, 130);
  border-radius: 0.3rem;
}
</style>
