import React, { useEffect, useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { BiCopy } from 'react-icons/bi';

export default function TextEditor({ aiResponse }: { aiResponse: string }) {
    const editorRef: any = useRef({})

    const cleanRTFContent = (rtfContent: string) => {
        // Remove RTF formatting
        return rtfContent
        .replace(/<[^>]*>/g, '')  // Remove HTML tags
          .replace(/\{[\s\S]*?\\fonttbl[\s\S]*?\}/g, '')  // Remove font table
          .replace(/\{[\s\S]*?\\colortbl[\s\S]*?\}/g, '') // Remove color table
          .replace(/\\[a-z0-9]+/g, '')                    // Remove RTF commands
          .replace(/\{|\}/g, '')                          // Remove braces
          .split('\\par')                                 // Split by paragraphs
          .map(line => line.trim())                      // Clean each line
          .filter(line => line)                          // Remove empty lines
          .join('\n');                                   // Join with newlines
      };

    useEffect(() => {
        const cleanContent = cleanRTFContent(aiResponse);
        const editorInstance = editorRef.current.getInstance()
        editorInstance.setMarkdown(cleanContent)
    }, [aiResponse])
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
                toolbarItems={[]}  // Empty toolbar to prevent HTML formatting
            />
        </div>
    )
}
