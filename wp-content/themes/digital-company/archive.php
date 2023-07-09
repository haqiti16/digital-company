<?php 
    get_header();
?>
    <section id="home" class="intro-section">
        <section class="container">
            <section class="row align-items-center">
                <?php
                    if( have_posts() ){
                        while( have_posts() ){
                            the_post();
                            get_template_part('template-parts/content', 'archive');
                        }
                    }
                ?>
            </section>
        </section>
    </section>
<?php 
    get_footer();
?>