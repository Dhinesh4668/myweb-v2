import '@mdxeditor/editor/style.css'
import { MDXEditor, UndoRedo, BoldItalicUnderlineToggles, toolbarPlugin, InsertTable, CodeMirrorEditor, CodeToggle, linkPlugin, linkDialogPlugin, imagePlugin, InsertImage } from '@mdxeditor/editor'

function MarkdownEditor() {
    return (
        <MDXEditor
            markdown="Hello world"
            plugins={[
                linkPlugin(),
                linkDialogPlugin({
                    linkAutocompleteSuggestions: ['https://virtuoso.dev', 'https://mdxeditor.dev']
                }),
                imagePlugin({
                    imageUploadHandler: () => {
                        return Promise.resolve('https://picsum.photos/200/300')
                    },
                    imageAutocompleteSuggestions: ['https://picsum.photos/200/300', 'https://picsum.photos/200']
                }), ({
                    imageUploadHandler: () => {
                        return Promise.resolve('https://picsum.photos/200/300')
                    },
                    imageAutocompleteSuggestions: ['https://picsum.photos/200/300', 'https://picsum.photos/200']
                }),
                toolbarPlugin({
                    toolbarContents: () => (
                        <>
                            {' '}
                            <UndoRedo />
                            <InsertTable />
                            <CodeToggle />
                            <InsertImage />
                            <BoldItalicUnderlineToggles />
                        </>
                    )
                })
            ]}
        />
    )
}

export default MarkdownEditor