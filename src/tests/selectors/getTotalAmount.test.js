import getTotalAmount from '../../selectors/getTotalAmount'
import expenses from '../fixturs/expenseList'

test('should return 0 if no expenses', () => {
    const total = getTotalAmount([])
    expect(total).toBe(0)

})

test('should return add up one expense total', () => {
    const total = getTotalAmount([expenses[1]])
    expect(total).toBe(expenses[1].amount)

})

test('should return add up more expense total', () => {
    const total = getTotalAmount(expenses)
    expect(total).toBe(2840)

})