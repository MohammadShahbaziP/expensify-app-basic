const name = (name)=>`Hello ${name}`

test('hello',()=>{
    const result= name('mmd')
    expect(result).toBe('Hello mmd')
})