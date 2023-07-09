const { registerBlockType } = wp.blocks;
const { 
    RichText,
    InspectorControls,
    ColorPalette,
    MediaUpload,
    InnerBlocks,
    BlockControls,
    AlignmentToolbar,
} = wp.editor;
const { PanelBody, IconButton, RangeControl } = wp.components;

const ALLOWED_BLOCKS = ['core/button'];

registerBlockType('digital/custom-cta', {
    // built-in attributes
    title: 'CTA',
    description: 'Block to generate CTA',
    icon: 'megaphone',
    category: 'layout',

    // custom attributes
    attributes: {
        title: {
            type: 'string',
            source: 'html',
            selector: 'h2',
        },
        body:{
            tpye: 'string',
            source: 'html',
            selector: 'p',
        },
        alignment: {
            type: 'string',
            default: 'none',
        },
        titleColor:{
            type: 'string',
            default: '#F18825',
        },
        backgroundImage: {
            type: 'string',
            default: "",
        },
        overlayColor: {
            type : 'string',
            default : '#ffffff',
        },
        overlayOpacity: {
            type : 'number',
            default : 0.1,
        }
    },

    // custom function

    // built in functions
    edit: ({attributes, setAttributes}) => {

        const {
            title,
            body,
            alignment,
            titleColor,
            backgroundImage,
            overlayColor,
            overlayOpacity,
        } = attributes;

        function onChangeTitle(newTitle){
            setAttributes({ title: newTitle });
        }

        function onChangeBody(newBody){
            setAttributes({ body: newBody });
        }

        function onChangeAlignment(newAlignment){
            setAttributes({
                alignment:newAlignment == undefined ? 'none' : newAlignment
            });
        }

        function onTitleColorChange(newColor){
            setAttributes({titleColor: newColor});
        }

        function onSelectImage(newImage){
            setAttributes({backgroundImage: newImage.sizes.full.url});
        }

        function onChangeOverlayColor(newColor){
            setAttributes({overlayColor: newColor});
        }

        function onChangeOverlayOpacity(newOpacity){
            setAttributes({overlayOpacity: newOpacity});
        }

        return ([
            <InspectorControls style={ {marginBottom: '40px'} }>
                <PanelBody title={'Font Color Settings'}>
                    <p><strong>Select a color:</strong></p>
                    <ColorPalette value={titleColor}
                                  onChange={ onTitleColorChange } />
                </PanelBody>
                <PanelBody title={'Background Image Settings'}>
                    <p><strong>Select a background image:</strong></p>
                    <MediaUpload
                        onSelect={onSelectImage}
                        type="image"
                        value={backgroundImage}
                        render={ ({open}) => {
                            return(
                                <IconButton
                            onClick={open}
                            icon="upload"
                            className="editor-media-placeholder__button is-button is-default is-large">
                                Background Image
                            </IconButton>
                            )
                            
                        } }
                    />
                    <div style={{ marginTop: '20px', marginBottom: '40px' }}>
                        <p><strong>Overlay color:</strong></p>
                        <ColorPalette value={overlayColor}
                            onChange={ onChangeOverlayColor } 
                        />
                    </div>
                    <RangeControl
                        label={'Overlay Opacity'}
                        value={overlayOpacity}
                        onChange={onChangeOverlayOpacity}
                        min={0}
                        max={1}
                        step={0.05}
                    />
                </PanelBody>
            </InspectorControls>,
            <div className="cta-container" style={ {
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            } }>
                <div className="cta-overlay" style={ {background: overlayColor, opacity: overlayOpacity} }></div>
                {
                    <BlockControls>
                        <AlignmentToolbar 
                        value={alignment} 
                        onChange={ onChangeAlignment }
                        />
                    </BlockControls>
                }
                <RichText key="editable"
                tagName="h2"
                placeholder="Your CTA Title"
                value={title}
                onChange={ onChangeTitle }
                style={ { color: titleColor, textAlign: alignment } }
                />
                <RichText key="editable"
                tagName="p"
                placeholder="Your CTA Description"
                value={body}
                onChange={ onChangeBody }
                style={ { textAlign: alignment } }
                />
                <InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } />
            </div>
        ]);
    },
    save: ({ attributes }) => {

        const {
            title,
            body,
            alignment,
            titleColor,
            backgroundImage,
            overlayColor,
            overlayOpacity,
        } = attributes;
        return (
            <div className="cta-container" style={ {
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            } }>
            <div className="cta-overlay" style={ {background: overlayColor, opacity: overlayOpacity} }></div>
            <h2 style={ {color:titleColor, textAlign: alignment} }>{title}</h2>
            <RichText.Content tagName="p" value={body} style={ { textAlign: alignment } }/>
            <InnerBlocks.Content/>
            </div>
        )
    },
});