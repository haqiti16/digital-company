<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>
<?php $text = $attributes['text']; ?>
<p <?php echo get_block_wrapper_attributes(); ?>>
	<?php esc_html_e( 'Dynamic – hello from a dynamic block!', 'dynamic' ); ?>
	<?php if(!empty($text)): ?>
		<?php echo $text; ?>
	<?php endif; ?>
	<?php echo $content; ?>
</p>
