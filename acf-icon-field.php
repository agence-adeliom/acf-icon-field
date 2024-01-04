<?php
/**
 * ACF Icon Field
 *
 * @copyright    Copyright (C) 2023, Adeliom - io@adeliom.com
 * @link         https://adeliom.io
 *
 * @wordpress-plugin
 * Plugin Name:       ACF Icon Field
 * Version:           1.0.0
 * Plugin URI:        https://adeliom.io/
 * Description:       An advanced icon field for ACF
 * Author:            Adeliom
 * Author URI:        https://adeliom.com/?utm_source=Plugin&utm_medium=Readme%20Author%20URI&utm_campaign=WP
 * License:           MIT
 * License URI:       https://choosealicense.com/licenses/mit/
 * Text Domain:       adeliom-icon
 * Domain Path:       /languages
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define('ACF_ICON_FIELD_VERSION', '1.0.0');
define('ACF_ICON_FIELD_URL', plugin_dir_url( __FILE__ ));
define('ACF_ICON_FIELD_ABSPATH', dirname( plugin_basename( __FILE__ ) ));

add_action( 'init', 'adeliom_include_acf_field_icon_field' );
/**
 * Registers the ACF field type.
 */
function adeliom_include_acf_field_icon_field() {
    load_plugin_textdomain( 'adeliom-icon', false, ACF_ICON_FIELD_ABSPATH . '/languages' );

    global $acf_icon_field_registry;

    require_once __DIR__ . '/includes/class-adeliom-acf-field-icon-registry.php';
    require_once __DIR__ . '/includes/libraries/default.php';
    require_once __DIR__ . '/includes/libraries/font-awesome-free.php';
    require_once __DIR__ . '/includes/libraries/font-awesome-pro.php';

    $acf_icon_field_registry = \ACF_icon_registry::getInstance();

    if(apply_filters("acf/icon_field/register_default", true)){
        $acf_icon_field_registry->addLibrary(new ACF_Icon_Default());
    }

    if($registerFontAwesome = apply_filters("acf/icon_field/register_font-awesome", true)){
        if($registerFontAwesome === "pro"){
            $acf_icon_field_registry->addLibrary(new ACF_Icon_Font_Awesome_Pro());
        }else{
            $acf_icon_field_registry->addLibrary(new ACF_Icon_Font_Awesome_Free());
        }
    }

    $acf_icon_field_registry = apply_filters("acf/icon_field/registry", $acf_icon_field_registry);

    if ( ! function_exists( 'acf_register_field_type' ) ) {
		return;
	}

    require_once __DIR__ . '/includes/class-adeliom-acf-field-icon-field.php';
	acf_register_field_type( 'adeliom_acf_field_icon_field' );
}

add_action( 'wp_enqueue_scripts', 'adeliom_enqueue_acf_field_icon_field_scripts', 10, 0 );
add_action( 'admin_enqueue_scripts', 'adeliom_enqueue_acf_field_icon_field_scripts', 10, 0 );
function adeliom_enqueue_acf_field_icon_field_scripts() {
    global $acf_icon_field_registry;

    $url     = trailingslashit( ACF_ICON_FIELD_URL );
    wp_register_script(
        'adeliom-icon-libraries',
        "{$url}dist/icon-libraries.js",
        [],
        ACF_ICON_FIELD_VERSION
    );
    wp_localize_script( 'adeliom-icon-libraries', 'acf_icons', $acf_icon_field_registry->toArray());
    wp_localize_script( 'adeliom-icon-libraries', 'acf_icon_theme', [
        'uri' => get_stylesheet_directory_uri(),
    ]);
    wp_enqueue_script( 'adeliom-icon-libraries' );
}