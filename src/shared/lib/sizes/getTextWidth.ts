export const getTextWidth = (() => {
  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')

  return (text: string, font: string) => {
    if (!context) return 0
    context.font = font
    return context.measureText(text).width
  }
})()
