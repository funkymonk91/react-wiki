import React from 'react';
import MarkdownEditor from './Components/MarkdownEditor';

export default function CreateDocument({ setShowNav }) {
    const hotkeys = [
        { command: "Cmd-'", description: '"toggleBlockquote" Action' },
        { command: 'Cmd-B', description: '"toggleBold" Action' },
        { command: 'Cmd-E', description: '"cleanBlock" Action' },
        { command: 'Cmd-H', description: '"toggleHeadingSmaller" Action' },
        { command: 'Cmd-I', description: '"toggleItalic" Action' },
        { command: 'Cmd-K', description: '"drawLink" Action' },
        { command: 'Cmd-L', description: '"toggleUnorderedList" Action' },
        { command: 'Cmd-P', description: '"togglePreview" Action' },
        { command: 'Cmd-Alt-C', description: '"toggleCodeBlock" Action' },
        { command: 'Cmd-Alt-I', description: '"drawImage" Action' },
        { command: 'Cmd-Alt-L', description: '"toggleOrderedList" Action' },
        { command: 'Shift-Cmd-H', description: '"toggleHeadingBigger" Action' },
        { command: 'F9', description: '"toggleSideBySide" Action' },
        { command: 'F11', description: '"toggleFullScreen" Action' },
    ];

    return (
        <div className='container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center bg-white rounded'>
            <div className='w-full text-gray-800'>
                <h2 className='text-3xl font-bold'>Markdown</h2>

                <MarkdownEditor setShowNav={setShowNav}></MarkdownEditor>

                <div className='w-1/3'>
                    <h2 className='text-xl font-bold'>Hotkeys</h2>
                    <hr />

                    <table className='mx-auto my-5 w-full border border-gray-500'>
                        <thead>
                            <tr>
                                <th>Shortcut</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {hotkeys.map((h, i) => (
                                <tr className={i % 2 === 0 ? 'bg-gray-200' : ''} key={i}>
                                    <td className='border border-gray-500 p-1 font-bold'>
                                        {h.command}
                                    </td>
                                    <td className='border border-gray-500 p-1'>{h.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
