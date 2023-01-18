/* Old Codes:
    const mongoose = require('mongoose')
    const autopopulate = require('mongoose-autopopulate')    

    const Employee = require('./employee')
    const Shift = require('./shift')
    const Incident = require('./incident')
    const Contract = require('./contract')

    const Ali = new Employee('Ali', 'MEC')
    const Selim = new Employee('Selim', 'ELC')
    const Kumar = new Employee('Kumar', 'ICT')

    const One = new Shift(1, '15/11/2022', 'Day')
    const Two = new Shift(2, '15/11/2022', 'Night')
    const Four = new Shift(4, '17/11/2022', 'Night')

    const Incident01 = new Incident('FIDS', 'Black Screen', 'Checkin 46')
    const HoneywellOncallContract = new Contract('Oncall Contract', 'Honeywell', '2021/10/05', '2021/11/01', '2022/11/01/')   

    Ali.addShift(One)
    Ali.addShift(Two)
    Ali.addShift(Four)
    Four.addEmployee(Kumar)
    Four.addEmployee(Selim)
*/
