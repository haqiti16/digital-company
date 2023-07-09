<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>
<body>
    <nav class="navbar navbar-expand-lg menu shadow ">
        <section class="container">
            <a class="navbar-brand" href="#">
                <?php
                if( function_exists('the_custom_logo') ){
                    $custom_logo = get_theme_mod('custom_logo');
                    $logo = wp_get_attachment_image_src($custom_logo);
                    
                }
                ?>
                <img src="<?= $logo[0] ?>" alt="logo" style="max-height: 32px; max-width: 148px;">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <section class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <?php
                wp_nav_menu(
                    array(
                        'menu' => 'primary',
                        'container' => '',
                        'theme_location' => 'primary',
                        'items_wrap' => '<ul id="navbar-nav" class="navbar-nav">%3$s</ul>'
                    )
                );
            ?>
            </section>
        </section>
    </nav>