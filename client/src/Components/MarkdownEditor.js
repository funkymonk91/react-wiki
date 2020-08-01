import React, { useEffect, useState } from 'react';
import SimpleMDE from 'simplemde';
import { marked } from 'marked';

export default function MarkdownEditor({ setShowNav }) {
    useEffect(() => {
        let simplemde = new SimpleMDE({
            element: document.getElementById('markdownEditor'),
            autofocus: true,
            autosave: {
                enabled: true,
                delay: 10000,
                uniqueId: 'documentCreate',
            },
            /* previewRender: (plaintText, previewElement) => {
                previewElement.classList.add('markdown');
                return plaintText;
            }, */
            forceSync: true,
        });

        simplemde.codemirror.on('refresh', () => {
            // console.log(simplemde.isSideBySideActive());
            setShowNav(!simplemde.isFullscreenActive());
        });

        // simplemde.togglePreview();

        return () => {
            /* simplemde.toTextArea();
            simplemde = null; */
        };
    }, []);

    return <textarea id='markdownEditor' className='table-auto'></textarea>;
}
