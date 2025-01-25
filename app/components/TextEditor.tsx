'use client'

import React, { useEffect, useRef, useState } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { BiCopy } from 'react-icons/bi';
import DOMPurify from 'dompurify';

export default function TextEditor({ aiResponse }: { aiResponse: string }) {
    const editorRef = useRef<Editor>(null);
    const [sanitizedResponse, setSanitizedResponse] = useState<string>('');

    useEffect(() => {
        if (aiResponse) {
            // Sanitize the AI response to prevent any XSS or rendering issues
            const sanitizedHtml = DOMPurify.sanitize(aiResponse);
            const cleanHtml = sanitizedHtml.replace(/```html|```/g, '');
            setSanitizedResponse(cleanHtml);
        }
    }, [aiResponse]);

    useEffect(() => {
        if (editorRef.current) {
            const editorInstance = editorRef.current.getInstance();
            editorInstance.setHTML(sanitizedResponse);
        }
    }, [sanitizedResponse]);

    return (
        <div>
            <div className='font-bold px-4 flex justify-between items-center p-2 bg-white rounded text-black'>
                <p className='text-zinc-700 font-extrabold'>Your result</p>
                <button 
                    onClick={() => { navigator.clipboard.writeText(aiResponse); }}
                    className='inline text-sm p-2 text-white bg-violet-600 hover:bg-violet-500 rounded-lg'>
                    <BiCopy className='inline font-extrabold'></BiCopy> Copy
                </button>
            </div>
            <Editor
                ref={editorRef}
                height="600px"
                initialEditType="wysiwyg"
                useCommandShortcut={true}
                theme="white"
            />
        </div>
    );
}
