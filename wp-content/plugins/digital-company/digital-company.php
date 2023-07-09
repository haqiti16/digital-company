<?php
/**
 * Plugin Name:       Digital Company
 * Description:       Plugin apik joss..
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.1
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       digital-company
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_digital_company_block_init() {
	register_block_type( __DIR__ . '/build/first' );
	register_block_type( __DIR__ . '/build/get-started' );
	register_block_type( __DIR__ . '/build/get-intro-block' );
	register_block_type( __DIR__ . '/build/dynamic' );
}
add_action( 'init', 'create_block_digital_company_block_init' );
