<?php

/**
 * 
 * Custom gutenberg function
 */

function digital_gutenberg_default_colors()
{
    add_theme_support('editor-color-palette',array(
        array(
            'name' => 'Beatiful color plaint',
            'slug' => 'White',
            'color' => '#ffffff',
        ),
        array(
            'name' => 'Black',
            'slug' => 'Black',
            'color' => '#000000',
        ),
        array(
            'name' => 'Pink',
            'slug' => 'Pink',
            'color' => '#ffc5e7',
        ),
        array(
            'name' => 'Orange',
            'slug' => 'Orange',
            'color' => '#F18825',
        ),
        array(
            'name' => 'Blue',
            'slug' => 'Blue',
            'color' => '#2B3DEC',
        ),
        array(
            'name' => 'Light black',
            'slug' => 'Light black',
            'color' => '#373F41',
        )
    ));

    add_theme_support('editor-font-sizes', array(
        array(
            'name'      => esc_html__( 'Extra small', 'digital' ),
            'shortName' => esc_html_x( 'XS', 'Font size', 'digital' ),
            'size'      => 16,
            'slug'      => 'extra-small',
        ),
        array(
            'name'      => esc_html__( 'Small', 'digital' ),
            'shortName' => esc_html_x( 'S', 'Font size', 'digital' ),
            'size'      => 18,
            'slug'      => 'small',
        ),
        array(
            'name'      => esc_html__( 'Normal', 'digital' ),
            'shortName' => esc_html_x( 'M', 'Font size', 'digital' ),
            'size'      => 20,
            'slug'      => 'normal',
        ),
        array(
            'name'      => esc_html__( 'Large', 'digital' ),
            'shortName' => esc_html_x( 'L', 'Font size', 'digital' ),
            'size'      => 24,
            'slug'      => 'large',
        ),
        array(
            'name'      => esc_html__( 'Extra large', 'digital' ),
            'shortName' => esc_html_x( 'XL', 'Font size', 'digital' ),
            'size'      => 40,
            'slug'      => 'extra-large',
        ),
        array(
            'name'      => esc_html__( 'Huge', 'digital' ),
            'shortName' => esc_html_x( 'XXL', 'Font size', 'digital' ),
            'size'      => 96,
            'slug'      => 'huge',
        ),
        array(
            'name'      => esc_html__( 'Gigantic', 'digital' ),
            'shortName' => esc_html_x( 'XXXL', 'Font size', 'digital' ),
            'size'      => 144,
            'slug'      => 'gigantic',
        ),
    ));
}

add_action('init', 'digital_gutenberg_default_colors');

function digital_gutenberg_blocks()
{
    wp_register_script('custom-cta-js', get_template_directory_uri() . '/build/index.js', array('wp-blocks', 'wp-editor', 'wp-components'));
    wp_register_style('custom-cta-css', get_template_directory_uri() .'/assets/css/blocks/style-cta.css', array() );
    register_block_type('digital/custom-cta', array(
        'editor_script' => 'custom-cta-js',
        'editor_style' => '',
        'style' => 'custom-cta-css',
    ));
}

add_action('init', 'digital_gutenberg_blocks');