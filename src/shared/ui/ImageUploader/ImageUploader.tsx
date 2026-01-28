import cls from './ImageUploader.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ChangeEvent, memo, useRef } from 'react'
import { Image } from '../Image/Image'

interface ImageProps {
  className?: string
  value?: File | string
  onChange?: (file?: File | string) => void
}

export const ImageUploader = memo((props: ImageProps) => {
  const { className, value, onChange } = props

  const inputRef = useRef<HTMLInputElement>(null)

  const openFileDialog = () => {
    inputRef.current?.click()
  }

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      onChange?.(file)
    }
  }

  return (
    <div className={classNames(cls.image, {}, [className])}>
      <input
        ref={inputRef}
        onChange={handleChangeFile}
        type="file"
        accept="image/*"
        hidden
      />

      <Image
        width="200px"
        height="200px"
        value={value}
        alt="ImageUploader"
        onClick={openFileDialog}
      />
    </div>
  )
})
