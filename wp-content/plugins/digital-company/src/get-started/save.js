/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {  useBlockProps, RichText,AlignmentToolbar, InnerBlocks, BlockControls, InspectorControls, MediaReplaceFlow } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({ attributes:{title, text, alignment} }) {
	return (
		<div { ...useBlockProps.save({
			style: {
				textAlign: alignment
			}
		})}>
			<section className="get-started-section mt-3">
				<section className="container">
					<section className="row get-started-heading mb-2">
						<RichText.Content
							tagName='h1'
							value={title}
						/>
					</section>
					<section className="row get-started-description mb-2">
						<RichText.Content
							tagName="p"
							value={text}
						/>
					</section>
					<section className="row get-started-cta tex-center">
						<InnerBlocks.Content
						/>
					</section>
				</section>
			</section>
		</div>
	);
}
