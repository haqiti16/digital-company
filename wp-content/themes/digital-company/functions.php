<?php

function digital_theme_support()
{
    // dynamic title
    add_theme_support('title-tag');
    add_theme_support('custom-logo');

    // Add support for Block Styles.
    add_theme_support( 'wp-block-styles' );
    // Add support for editor styles.
    add_theme_support( 'editor-styles' );
    // Enqueue editor styles.
    add_editor_style( './assets/css/style-editor.css' );
}

add_action('after_setup_theme', 'digital_theme_support');

function digital_menus()
{
    $locations = array(
        'primary' => "Navbar Menu",
        'footer' => "Footer Menu",
    );

    register_nav_menus($locations);
}

add_action('init', 'digital_menus');

function digital_register_style()
{
    $version = wp_get_theme()->get('Version');
    wp_enqueue_style('digital-style', get_template_directory_uri() . "/style.css", array(), $version, 'all');
    wp_enqueue_style('digital-fontawesome', get_template_directory_uri() . "/assets/css/fontawesome.css", array(), "6.4.0", 'all');
    wp_enqueue_style('digital-fontawesome-cdn', "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css", array(), "5.13.0", 'all');
}

add_action('wp_enqueue_scripts', 'digital_register_style');

function digital_register_script()
{
    $version = wp_get_theme()->get('Version');
    wp_enqueue_script('digital-bootstrap', get_template_directory_uri() . "/assets/js/bootstrap.bundle.js", array(), '5.3.0', true);
    wp_enqueue_script('digital-chartjs', "https://cdn.jsdelivr.net/npm/chart.js", array(), $version, true);
    // wp_enqueue_script('digital-service', get_template_directory_uri() . "/assets/js/service.js", array(), $version, true);
}

add_action('wp_enqueue_scripts', 'digital_register_script');

function digital_widget_area()
{
    register_sidebar(
        array(
            'before_title' => '',
            'after_title' => '',
            'before_widget' => '',
            'after_widget' => '',
        ),
        array(
            'name' => 'Sidebar area',
            'id' => 'sidebar-1',
            'description' => 'Sidebar widget area',
        )
    );
}
add_action('widgets_init', 'digital_widget_area');

// Custom gutenberg blocks
require get_template_directory() . "/inc/gutenberg.php";
?>