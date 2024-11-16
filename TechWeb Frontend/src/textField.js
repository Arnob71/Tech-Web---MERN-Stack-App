import { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const TextField=({draftTextHandler})=>{
    const [text,setText]=useState();
    const [editorState,setEditorState]=useState(()=>EditorState.createEmpty());
    return(
        <div>
        <Editor
        placeholder='Describe the responsibilities, work experience, skills or education for this job'
        toolbar={{
            options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list'],
            inline:{options:['bold','italic','underline' ]},
            blockType:{options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'Blockquote']},
            fontSize:{options:[10,11,12,13,14,15,16,17,18,19,20]}
        }}
        editorStyle={{backgroundColorolor:'black'}}
        editorState={editorState}
        onEditorStateChange={setEditorState}
        onChange={()=>draftTextHandler(draftToHtml(convertToRaw(editorState.getCurrentContent())))}
        />
        </div>
    )
}
export default TextField;
