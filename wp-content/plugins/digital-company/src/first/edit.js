/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, PlainText, RichText,AlignmentToolbar, InnerBlocks, BlockControls, InspectorControls, MediaReplaceFlow } from '@wordpress/block-editor';
import { ToolbarButton, PanelBody, ToggleControl, SelectControl } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes:{title, description, text, url, alt, alignment, toggle}, setAttributes }) {
	const onSelectImage = (imageObject) => {
		setAttributes({
			url: imageObject.url,
			alt: imageObject.alt,
		});
	};
	const onCLickReset = () => {
		setAttributes({
			url: "",
			alt: "",
		});
	};

	return (
		<>
			<InspectorControls key="settings">
			 <PanelBody title='Settings'>
			 	<ToggleControl
					label="Show heading"
					checked={toggle}
					onChange={ (toggle) => setAttributes({toggle}) }
					help='Toggle the visibility of the heading.'
				/>
				<SelectControl
					label="Alignment"
					value={ alignment }
					onChange={ (alignment) => setAttributes({alignment}) }
					options={[
						{ value: 'left', label: 'Left'},
						{ value: 'center', label: 'Center'},
						{ value: 'right', label: 'Right'},
					]}
				/>
			 </PanelBody>
			</InspectorControls>
			<BlockControls group="other">
				<MediaReplaceFlow
					mediaURL={url}
					accept="image/*"
					allowedTypes={['image']}
					onSelect={onSelectImage}
					name={url ? "Replace Image" : "Add Image"}
				/>

				{url && (
					<ToolbarButton
						text='reset'
						label='reset image'
						onClick={onCLickReset}
					/>
				)}
			</BlockControls>
			<div { ...useBlockProps({
				style: {
					textAlign: alignment
				}
			})}>
				{toggle && (
					<h3>heading lala yeyeye</h3>
				)}
				<section id="home" class="intro-section">
					<section class="container">
						<section class="row align-items-center">
							<section class="col-md-6 intros">
								<h1 class="display-2">
									<span class="display-2--title lh-md">
										<PlainText placeholder='Add Heading Title'
										value={title}
										onChange={ (title) => setAttributes({title}) }
										/><span class="display-2--boxed">.</span>
									</span>
									<span class="display-2--description lh-md">
										<PlainText placeholder='Add Description home'
										value={description}
										onChange={ (description) => setAttributes({description}) }
										/>
									</span>
								</h1>
								<InnerBlocks
									allowedBlocks={ ['core/button'] }
								/>
							</section>
							<section class="col-md-6 intros text-end">
								<img src={url} alt={alt} className="img-fluid"></img>
							</section>
						</section>
					</section>
				</section>
			</div>
		</>
	);
}
