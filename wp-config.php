<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress_digital' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'xH?/]fHHm?vqQac@3Oh0`)xy2{A< ~z`[%2|n[4IUHQ,zCt6E +$f5QX>sT[c{@w' );
define( 'SECURE_AUTH_KEY',  '/=I{A:F1CO*${Lob%W(@Yq;N.=hZ{ATWJ~=y2`}t-ThiU>B?mXZw^:E,lALg),`[' );
define( 'LOGGED_IN_KEY',    '-B#g9Q88<Hx}eIB@B@ Y%ysu/B*Y$(dx<%eVA 4a]Pvs^2},C{Vz+wiK.]_>gg2r' );
define( 'NONCE_KEY',        'T#1Me=}gsJ|}A#;p6@&W56Am?5s@V;@8/@B&.X^]IK];xolv(eo+r?g4|TgdNvcA' );
define( 'AUTH_SALT',        'QA4`T`uDgiTBEacX0Bv._gEW}&E3ckdaj2/s)3k<3fC3=*Cz?41esNM&n04^&^`5' );
define( 'SECURE_AUTH_SALT', 'qWMga#}^%oULg[WAE{C?-c!20j%.B{fQF 2b@lK+vlvLuiIBR SmoC;hY>y_KALS' );
define( 'LOGGED_IN_SALT',   'f$kv_?,)=R]avAYfN^J](+FOg}4kP@gD[YwuA=Q#jZuSc*(@91AFL)U]eT,_%iDw' );
define( 'NONCE_SALT',       'c?&B>cQ]B)?3 ZO*v(5U.ad!hVi9*E;cW7lsq@h3jiR?;e<oK1Z80[6.6noH)weK' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
