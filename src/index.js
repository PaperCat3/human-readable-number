module.exports = function toReadable (number) {
  const zero = "zero"
  const units = ['', 'one','two','three','four','five','six','seven','eight','nine','ten',
  'eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
  const dozen = ['','ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']

  if (number == 0) return zero
  if (number < 20) return units[number]

  if (number < 100) {
   if (number % 10 != 0){
      return dozen[Math.floor(number/10)] + ' ' + units[number % 10]
   } else if (number % 10 == 0) {
      return dozen[Math.floor(number/10)]
   }
  }

  if (number >= 100){
   if (number % 100 == 0) {
      return units[number / 100] + ' hundred'
   } else if (number % 100 < 20) {
      return units[Math.floor(number / 100)] + ' hundred ' + units[number % 100]
   } else if (number % 10 == 0) {
      return units[Math.floor(number / 100)] + ' hundred ' + dozen[Math.floor(number % 100 / 10)]
   } else if (number % 100 != 0) {
     return units[Math.floor(number / 100)] + ' hundred ' + dozen[Math.floor(number % 100 / 10)] + ' ' + units[number % 10]
   }
  }

}

