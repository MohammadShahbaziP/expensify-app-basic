const setFilterText = (text='')=>({
    type:'FILTER_TEXT',
    text
})
const sortByAmount = ()=>({
    type:'SORT_BY_AMOUNT'
})
const sortByDate = ()=>({
    type:'SORT_BY_DATE'
})
const setStartDate =(timeStamp)=>({
    type:'SET_START_DATE',
    timeStamp
})
const setEndDate= (timeStamp)=>({
    type:'SET_END_DATE',
    timeStamp
})
export {setFilterText, sortByAmount, sortByDate, setEndDate, setStartDate}