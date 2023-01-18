<script>
import axios from 'axios'
import EmployeeCard from '@/components/employee-card.vue'

export default {
  name: 'EmployeesView',
  components: {
    EmployeeCard,
  },
  data() {
    return {
      employees: [],
    }
  },
  async created() {
    const employeesRequest = await axios.get('http://localhost:4444/api/employees')

    this.employees = employeesRequest.data
  },
}
</script>

<template lang="pug">
.home
    h1 All Employee List
    employee-card(v-for="employee in employees" :employee="employee")
</template>
