import React, {  useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { BiCopy } from 'react-icons/bi';

export default function TextEditor() {
    const editorRef: any = useRef({})
    return (
        <div >
            <div className='font-bold px-4 flex justify-between items-center p-2 bg-white rounded text-black'>
                <p>your result</p>
                <button className='inline text-sm p-2 text-white bg-violet-600 rounded-lg'><BiCopy className='inline font-extrabold'></BiCopy> Copy</button>
            </div>
            <Editor
                ref={editorRef}
                initialValue="hello react editor world!"
                previewStyle="vertical"
                height="600px"
                initialEditType="wysiwyg"
                useCommandShortcut={true}
                onChange={() => console.log(editorRef.current.getInstance().getMarkdown())}
                theme="white"
            />
        </div>
    )
}
