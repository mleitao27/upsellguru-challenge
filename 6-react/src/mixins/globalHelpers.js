const months = {
  1: 'Jan',
  2: 'Feb',
  3: 'Mar',
  4: 'Apr',
  5: 'May',
  6: 'Jun',
  7: 'Jul',
  8: 'Aug',
  9: 'Sep',
  10: 'Oct',
  11: 'Nov',
  12: 'Dec'
}

const dateFormatting = (date) => {
  let splited = date.split('/')
  return splited[2] + '-' + months[splited[1]]
}

const euroFormatting = (value) => {
  if (!value && value !== 0) {
    return
  }
  if (typeof value === 'number') {
    value = String((value / 100).toFixed(2))
  }
  if (value.includes('.')) {
    // get position of first decimal
    // this prevents multiple decimals from being entered
    const decimalPos = value.indexOf('.')

    // split number by decimal point
    let leftSide = value.substring(0, decimalPos)
    let rightSide = value.substring(decimalPos)

    // add .'s to left side of number
    leftSide = leftSide.replace(/\D/g, '')
    leftSide = leftSide.replace(/\B(?=(\d{3})+(?!\d))/g, '.')

    // validate right side
    rightSide = rightSide.replace(/\D/g, '')
    rightSide = rightSide.replace(/\B(?=(\d{3})+(?!\d))/g, '.')

    // Limit decimal to only 2 digits
    rightSide = rightSide.substring(0, 2)

    // join number by ,
    value = leftSide + ',' + rightSide
  } else {
    // no decimal entered
    // remove all non-digits
    value = value.replace(/\D/g, '')
    value = value.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  }
  return value + '€'
}

export {
  dateFormatting,
  euroFormatting
};