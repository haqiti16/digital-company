/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {  useBlockProps, PlainText, RichText,AlignmentToolbar, InnerBlocks, BlockControls, InspectorControls, MediaReplaceFlow } from '@wordpress/block-editor';
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
export default function save({ attributes:{title, description, text, url, alt, alignment, toggle} }) {
	return (
		<div { ...useBlockProps.save({
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
									{title}<span class="display-2--boxed">.</span>
								</span>
								<span class="display-2--description lh-md">
									{description}
								</span>
							</h1>
							<InnerBlocks.Content />
						</section>
						<section class="col-md-6 intros text-end">
							<img src={url} alt={alt} className="img-fluid"></img>
						</section>
					</section>
				</section>
			</section>
		</div>
	);
}
