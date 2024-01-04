<?php

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

require_once __DIR__ . '/../class-adeliom-acf-field-icon-library.php';

class ACF_Icon_Default extends \ACF_icon_library
{
    /**
     * @throws JsonException
     */
    public function __construct()
    {
        parent::__construct(
            __('Default', 'adeliom-icon' ),
            'default'
        );

        $this->setResolver('https://cdn.jsdelivr.net/npm/@agence-adeliom/awc@latest/dist/assets/icons/{{name}}.svg');

        if(!apply_filters('acf/icon_field/use_cache', true)){
            delete_transient('acf/awc_default_icons');
        }

        if ((false === ($awc_icons = get_transient('acf/awc_default_icons'))) && $icons = self::get_icons_from_api()) {
            $awc_icons = array_reduce($icons, static function ($icons, $icon) {
                $icons[] = [
                    'id' => $icon,
                    'name' => str_replace('-', ' ', $icon),
                    'subset' => null,
                    'prefix' => ''
                ];
                return $icons;
            }, []);
            set_transient( 'acf/awc_default_icons', $awc_icons, 12 * HOUR_IN_SECONDS );
        }

        $this->setIcons($awc_icons ?? []);

    }

    /**
     * @throws JsonException
     */
    private static function get_icons_from_api()
    {
        $request = \wp_remote_get('https://cdn.jsdelivr.net/npm/@agence-adeliom/awc@latest/dist/assets/icons/icons.json', [
            'accept' => 'application/json'
        ]);

        if( is_wp_error( $request ) ) {
            return false; // Bail early
        }

        $body = wp_remote_retrieve_body( $request );
        return json_decode($body, true, 512, JSON_THROW_ON_ERROR);
    }
}