import EditorJS, { API, OutputData } from '@editorjs/editorjs'
import { FC, useEffect, useRef } from 'react'
import { editableTools, readOnlyTools } from './tools'

const HOLDER = 'editorjs-container'

interface Props {
  onInitialize: (instance: EditorJS) => void
  readOnly?: boolean
  data?: OutputData | undefined
  onReady?: () => void | undefined
  onChange?: (api: API) => void
}

const Editor: FC<Props> = ({
  onInitialize,
  readOnly = false,
  data = undefined,
  onReady = undefined,
  onChange = undefined,
}) => {
  const ref = useRef<EditorJS>()
  const tools = readOnly ? readOnlyTools : editableTools

  useEffect(() => {
    if (!ref.current) {
      const instance = new EditorJS({
        holder: HOLDER,
        tools,
        readOnly,
        data,
        onReady,
        onChange,
      })
      ref.current = instance

      onInitialize(instance)
    }
    return () => {
      if (ref.current?.destroy) {
        ref.current.destroy()
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div id={HOLDER} className="-mb-14" />
}

export default Editor
