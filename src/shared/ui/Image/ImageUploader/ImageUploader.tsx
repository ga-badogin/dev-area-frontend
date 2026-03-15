import cls from './ImageUploader.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ChangeEvent, CSSProperties, FC, memo, SVGProps, useRef } from 'react'
import { Image } from '../Image'
import { Block, BlockTheme } from '../../Block/Block'
import { Button, ButtonTheme } from '../../Button/Button'
import ChangeImageIcon from '@/shared/assets/icons/ChangeImage.svg'
import RemoveImageIcon from '@/shared/assets/icons/RemoveImageIcon.svg'

interface ImageProps {
  className?: string
  value?: File | string
  width?: string
  height?: string
  onChange?: (file?: File) => void
  FallbackImage?: FC<SVGProps<SVGSVGElement>>
  readOnly?: boolean
}

export const ImageUploader = memo((props: ImageProps) => {
  const {
    className,
    value,
    onChange,
    width = '250px',
    height = '250px',
    FallbackImage,
    readOnly
  } = props

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

  const styles: CSSProperties = {
    width,
    height
  }

  return (
    <div
      className={classNames(cls.imageUploader, {}, [className])}
      style={styles}
    >
      <input
        ref={inputRef}
        onChange={handleChangeFile}
        type="file"
        accept="image/*"
        hidden
      />

      <Image
        className={cls.image}
        width={width}
        height={height}
        value={value}
        alt="ImageUploader"
        FallbackImage={FallbackImage}
      />

      {!readOnly && (
        <Block className={cls.actionBlock} theme={BlockTheme.SMALL}>
          <Button onClick={openFileDialog} theme={ButtonTheme.CLEAR}>
            <ChangeImageIcon className={cls.changeIcon} />
          </Button>
          {value && (
            <Button onClick={() => onChange?.()} theme={ButtonTheme.CLEAR}>
              <RemoveImageIcon className={cls.removeIcon} />
            </Button>
          )}
        </Block>
      )}
    </div>
  )
})
